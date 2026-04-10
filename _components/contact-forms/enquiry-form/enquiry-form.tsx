"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import classNames from "classnames";
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
} from "react-google-recaptcha-v3";

import { sendDiscoveryCallEmail } from "@/_actions/discovery-call-email-actions";
import generalData from "@/_data/general-data.json";
import ProgressTrackerComponent from "./progress-tracker-component";
import ButtonType from "@/_components/ui/buttons/button-type";
import FormInput from "@/_components/ui/forms/form-input";
import FormSelect from "@/_components/ui/forms/form-select";
import FormCheckboxes from "@/_components/ui/forms/form-checkboxes";
import FormRadioGroup from "@/_components/ui/forms/form-radio-group";
import FormTextarea from "@/_components/ui/forms/form-textarea";

interface FormState {
  success: boolean;
  error?: string;
}

interface EnquiryFormProps {
  cssClasses?: string;
}

const steps = generalData.bookADiscoveryMeetingForm;
const totalSteps = steps.length;

const slugify = (label: string) =>
  label
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const EnquiryFormInner = ({ cssClasses }: EnquiryFormProps) => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [currentStep, setCurrentStep] = useState(1);
  const [fieldAnswers, setFieldAnswers] = useState<Record<string, string>>({});
  const [isStepComplete, setIsStepComplete] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<FormState>({ success: false });
  const formRef = useRef<HTMLFormElement>(null);
  const collectedData = useRef<Record<string, string | string[]>>({});

  const currentStepData = steps[currentStep - 1];
  const isLastStep = currentStep === totalSteps;
  const showBack = currentStep > 1;

  const initFieldAnswersFromCollected = (stepIndex: number) => {
    const stepData = steps[stepIndex];
    if (!stepData.hasConditionalFields) {
      setFieldAnswers({});
      return;
    }
    const restored: Record<string, string> = {};
    stepData.fields.forEach((field) => {
      const name = slugify(field.label);
      const saved = collectedData.current[name];
      if (typeof saved === "string" && saved) {
        restored[name] = saved;
      }
    });
    setFieldAnswers(restored);
  };

  const handleFieldChange = (name: string, value: string) => {
    setFieldAnswers((prev) => {
      const updated = { ...prev, [name]: value };
      currentStepData.fields.forEach((field) => {
        if ("showWhen" in field && field.showWhen) {
          const showWhen = field.showWhen as { field: string; value: string };
          if (showWhen.field === name && showWhen.value !== value) {
            const conditionalName = slugify(field.label);
            delete updated[conditionalName];
            delete collectedData.current[conditionalName];
          }
        }
      });
      return updated;
    });
  };

  const captureCurrentFields = () => {
    if (!formRef.current) return;
    const formData = new FormData(formRef.current);
    currentStepData.fields.forEach((field) => {
      const name = slugify(field.label);
      if ("showWhen" in field && field.showWhen) {
        const showWhen = field.showWhen as { field: string; value: string };
        if (fieldAnswers[showWhen.field] !== showWhen.value) {
          delete collectedData.current[name];
          return;
        }
      }
      if (field.type === "checkboxes") {
        collectedData.current[name] = formData.getAll(name).map(String);
      } else {
        collectedData.current[name] = formData.get(name)?.toString() || "";
      }
    });
  };

  const handleBack = () => {
    captureCurrentFields();
    const nextStep = currentStep - 1;
    initFieldAnswersFromCollected(nextStep - 1);
    setCurrentStep(nextStep);
  };

  const handleNext = () => {
    captureCurrentFields();
    const nextStep = currentStep + 1;
    initFieldAnswersFromCollected(nextStep - 1);
    setCurrentStep(nextStep);
  };

  const handleSubmit = async () => {
    captureCurrentFields();

    try {
      setIsSubmitting(true);
      setSubmitState({ success: false });

      if (!executeRecaptcha) {
        setSubmitState({
          success: false,
          error:
            "Security verification unavailable. Please refresh and try again.",
        });
        return;
      }

      const recaptchaToken = await executeRecaptcha("discovery_call_form");
      const honeypot = formRef.current
        ? (new FormData(formRef.current).get("_honey")?.toString() ?? "")
        : "";

      const result = await sendDiscoveryCallEmail(
        collectedData.current,
        recaptchaToken,
        honeypot,
      );

      setSubmitState(result);
    } catch {
      setSubmitState({
        success: false,
        error: "An unexpected error occurred. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFieldVisible = (field: (typeof currentStepData.fields)[number]) => {
    if (!("showWhen" in field) || !field.showWhen) return true;
    const showWhen = field.showWhen as { field: string; value: string };
    return fieldAnswers[showWhen.field] === showWhen.value;
  };

  const checkStepComplete = useCallback(() => {
    if (!formRef.current) return false;
    const formData = new FormData(formRef.current);
    for (const field of currentStepData.fields) {
      if ("optional" in field && field.optional) continue;
      if (!isFieldVisible(field)) continue;
      const name = slugify(field.label);
      if (field.type === "checkboxes") {
        if (formData.getAll(name).length === 0) return false;
      } else {
        if (!formData.get(name)?.toString().trim()) return false;
      }
    }
    return true;
  }, [currentStepData, fieldAnswers]);

  useEffect(() => {
    setIsStepComplete(false);
    const id = requestAnimationFrame(() =>
      setIsStepComplete(checkStepComplete()),
    );
    return () => cancelAnimationFrame(id);
  }, [currentStep]);

  useEffect(() => {
    setIsStepComplete(checkStepComplete());
  }, [fieldAnswers]);

  const renderField = (field: (typeof currentStepData.fields)[number]) => {
    const name = slugify(field.label);
    const labelText =
      "optional" in field && field.optional
        ? field.label + " (Optional):"
        : field.label + ":";
    const placeholder =
      "placeholder" in field ? (field.placeholder as string) : undefined;

    if (field.type === "radio" && "options" in field) {
      return (
        <FormRadioGroup
          key={name}
          label={labelText}
          name={name}
          options={field.options!}
          defaultValue={(collectedData.current[name] as string) || ""}
          onChange={
            currentStepData.hasConditionalFields
              ? (value) => handleFieldChange(name, value)
              : undefined
          }
        />
      );
    }

    if (field.type === "checkboxes" && "options" in field) {
      return (
        <FormCheckboxes
          key={name}
          label={labelText}
          name={name}
          options={field.options!}
          maxSelections={
            "maxSelections" in field
              ? (field.maxSelections as number)
              : undefined
          }
          defaultSelected={(collectedData.current[name] as string[]) || []}
        />
      );
    }

    if (field.type === "select" && "options" in field) {
      return (
        <FormSelect
          key={name}
          label={labelText}
          name={name}
          options={field.options!}
          defaultValue={(collectedData.current[name] as string) || ""}
        />
      );
    }

    if (field.type === "textarea") {
      return (
        <FormTextarea
          key={name}
          label={labelText}
          name={name}
          placeholder={placeholder}
          defaultValue={(collectedData.current[name] as string) || ""}
        />
      );
    }

    return (
      <FormInput
        key={name}
        label={labelText}
        name={name}
        type={field.type === "email" ? "email" : "text"}
        placeholder={placeholder || field.label}
        defaultValue={(collectedData.current[name] as string) || ""}
        autoComplete={name}
      />
    );
  };

  return (
    <div
      className={classNames(
        "bg-charcoal p-10 -mx-7 desktop:rounded-[6px] tablet:-mx-10 desktop:mx-0 desktop:flex desktop:gap-10",
        cssClasses,
      )}
    >
      {submitState.success ? (
        <p className="text-citrine text-center text-subheading py-15">
          Your enquiry has been submitted. We will be in touch soon.
        </p>
      ) : (
        <>
          <ProgressTrackerComponent
            currentStep={currentStep}
            totalSteps={totalSteps}
            cssClasses="mb-10 desktop:mb-0"
          />
          <div className="flex-1">
            <p className="text-[26px] font-normal text-white">
              {currentStepData.title}
            </p>
            <form
              ref={formRef}
              action={handleSubmit}
              className="flex flex-col gap-10 mt-5"
              key={currentStep}
              onChange={() =>
                setTimeout(() => setIsStepComplete(checkStepComplete()), 0)
              }
              onInput={() =>
                setTimeout(() => setIsStepComplete(checkStepComplete()), 0)
              }
            >
              {"introText" in currentStepData && currentStepData.introText && (
                <p className="text-paragraph font-extralight text-slate">
                  {currentStepData.introText as string}
                </p>
              )}
              <div
                className={classNames("grid gap-5", {
                  "tablet:grid-cols-2": currentStep === 1,
                })}
              >
                {currentStepData.fields.map((field) => {
                  if (!isFieldVisible(field)) return null;
                  return renderField(field);
                })}
              </div>
              <input
                type="text"
                name="_honey"
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />
              {submitState.error && (
                <p className="text-[#ff6b6b] text-center">
                  {submitState.error}
                </p>
              )}
              <div
                className={classNames(
                  "flex flex-col gap-5 min-[600px]:gap-10 tablet:justify-between",
                  currentStep !== 1
                    ? "min-[600px]:flex-row-reverse"
                    : "min-[600px]:flex-row",
                )}
              >
                {isLastStep ? (
                  <ButtonType
                    type="submit"
                    background="charcoal"
                    border="citrine"
                    cssClasses="w-full tablet:w-auto"
                    ariaLabel="Submit enquiry form"
                    disabled={!isStepComplete || isSubmitting}
                    formButton
                  >
                    Request Discovery Conversation
                  </ButtonType>
                ) : (
                  <ButtonType
                    type="button"
                    onClick={handleNext}
                    border="citrine"
                    background="charcoal"
                    cssClasses={classNames(
                      "w-full tablet:w-auto",
                      currentStep === 1
                        ? "tablet:self-start"
                        : "tablet:self-end",
                    )}
                    ariaLabel="Go to next step"
                    disabled={!isStepComplete}
                    formButton
                  >
                    Next
                  </ButtonType>
                )}
                {showBack && (
                  <ButtonType
                    type="button"
                    onClick={handleBack}
                    border="mist"
                    background="mist"
                    cssClasses="w-full tablet:w-auto tablet:self-center"
                    ariaLabel="Go to previous step"
                    backButton
                  >
                    Back
                  </ButtonType>
                )}
              </div>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

const EnquiryForm = ({ cssClasses }: EnquiryFormProps) => {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
    >
      <EnquiryFormInner cssClasses={cssClasses} />
    </GoogleReCaptchaProvider>
  );
};

export default EnquiryForm;
