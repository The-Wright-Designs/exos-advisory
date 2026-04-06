"use client";

import { useEffect, useRef, useState } from "react";
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
} from "react-google-recaptcha-v3";

import { sendEmail } from "@/_actions/send-email-actions";
import ButtonType from "@/_components/ui/buttons/button-type";
import FormInput from "@/_components/ui/forms/form-input";
import FormTextarea from "@/_components/ui/forms/form-textarea";

interface FormState {
  success: boolean;
  error?: string;
}

interface ContactFormProps {
  heading: string;
  formType: "advisory" | "contact";
}

const ContactFormInner = ({
  heading,
  formType,
}: ContactFormProps) => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const formRef = useRef<HTMLFormElement>(null);
  const [state, setState] = useState<FormState>({ success: false });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
    }
  }, [state.success]);

  const handleSubmit = async (formData: FormData) => {
    try {
      setIsSubmitting(true);
      setState({ success: false });

      if (!executeRecaptcha) {
        setState({
          success: false,
          error:
            "Security verification unavailable. Please refresh and try again.",
        });
        return;
      }

      const recaptchaToken = await executeRecaptcha("contact_form");
      formData.append("recaptchaToken", recaptchaToken);

      const result = await sendEmail(formData, formType);
      setState(result);
    } catch {
      setState({
        success: false,
        error: "An unexpected error occurred. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-charcoal p-10 rounded-[6px]">
      <p className="text-[26px] font-normal text-white">{heading}</p>
      <form
        ref={formRef}
        action={handleSubmit}
        className="flex flex-col gap-10 mt-5"
      >
        <div className="flex flex-col gap-5">
          <FormInput
            label="Name:"
            name="name"
            placeholder="Full name"
            required
            autoComplete="name"
          />
          <FormInput
            label="Email:"
            name="email"
            type="email"
            placeholder="Email address"
            required
            autoComplete="email"
          />
          <FormTextarea
            label="Message:"
            name="message"
            placeholder="Type your message here"
            required
          />
        </div>
        <input
          type="text"
          name="_honey"
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
        />
        {state.success && (
          <p className="text-citrine text-center">
            Your message has been sent. We will be in touch soon.
          </p>
        )}
        {state.error && (
          <p className="text-[#ff6b6b] text-center">{state.error}</p>
        )}
        <ButtonType
          type="submit"
          border="citrine"
          cssClasses="w-full h-[56px] text-[16px]"
          ariaLabel="Submit contact form"
          disabled={isSubmitting}
        >
          Submit
        </ButtonType>
      </form>
    </div>
  );
};

const ContactForm = ({ heading, formType }: ContactFormProps) => {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
    >
      <ContactFormInner heading={heading} formType={formType} />
    </GoogleReCaptchaProvider>
  );
};

export default ContactForm;
