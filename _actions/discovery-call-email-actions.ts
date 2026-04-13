"use server";

import nodemailer from "nodemailer";
import generalData from "@/_data/general-data.json";
import { discoveryCallEmailTemplate } from "@/_lib/utils/email-templates/discovery-call-email-template";
import { clientConfirmationEmailTemplate } from "@/_lib/utils/email-templates/client-confirmation-email-template";
import { verifyRecaptchaToken } from "@/_lib/verify-recaptcha";
import { slugify } from "@/_lib/utils/slugify";

interface MailOptions {
  from: string;
  to: string;
  subject: string;
  replyTo: string;
  html: string;
}

const formSteps = generalData.bookADiscoveryMeetingForm;

export async function sendDiscoveryCallEmail(
  formData: Record<string, string | string[]>,
  recaptchaToken: string,
  honeypot: string,
): Promise<{ success: boolean; error?: string }> {
  try {
    if (honeypot.trim() !== "") {
      console.error("Invalid form submission due to non-empty honeypot field");
      return { success: false, error: "Spam detected" };
    }

    if (!recaptchaToken) {
      return { success: false, error: "reCAPTCHA verification required" };
    }

    const recaptchaPromise = verifyRecaptchaToken(recaptchaToken);

    const isFieldVisible = (field: { showWhen?: { field: string; value: string } }) => {
      if (!field.showWhen) return true;
      const gatingValue = formData[field.showWhen.field];
      return gatingValue === field.showWhen.value;
    };

    const emailSteps = formSteps.map((step) => {
      const questions: { label: string; value: string }[] = [];
      for (const field of step.fields) {
        const showWhen = "showWhen" in field ? field.showWhen : undefined;
        if (!isFieldVisible({ showWhen })) continue;

        const key = slugify(field.label);
        const raw = formData[key];
        const value =
          field.type === "checkboxes"
            ? Array.isArray(raw)
              ? raw.join(", ")
              : ""
            : typeof raw === "string"
              ? raw.trim()
              : "";

        const optional = "optional" in field && field.optional;
        if (!value && !optional) {
          return { title: step.title, missing: true, questions };
        }
        if (!value) continue;

        questions.push({ label: field.label, value });
      }
      return { title: step.title, missing: false, questions };
    });

    if (emailSteps.some((step) => step.missing)) {
      return { success: false, error: "All required fields must be filled" };
    }

    const name = (formData[slugify("Name")] as string) || "";
    const email = (formData[slugify("Email")] as string) || "";

    const emailHtmlContent = discoveryCallEmailTemplate({
      steps: emailSteps.map(({ title, questions }) => ({ title, questions })),
    });

    const recaptchaResult = await recaptchaPromise;
    if (!recaptchaResult.success) {
      return {
        success: false,
        error: recaptchaResult.error || "reCAPTCHA verification failed",
      };
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST as string,
      port: 465,
      secure: true,
      pool: true,
      maxConnections: 2,
      auth: {
        user: process.env.SMTP_USER as string,
        pass: process.env.SMTP_PASS as string,
      },
    });

    const mailOptions: MailOptions = {
      from: `EXOS Advisory <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_SEND_TO as string,
      subject: "Website form submission - EXOS (Discovery call enquiry)",
      replyTo: email,
      html: emailHtmlContent,
    };

    const clientMailOptions: MailOptions = {
      from: `EXOS Advisory <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Your EXOS Advisory enquiry has been received",
      replyTo: process.env.SMTP_SEND_TO as string,
      html: clientConfirmationEmailTemplate({
        name,
        calendlyUrl: process.env.CALENDLY_URL || "",
      }),
    };

    await Promise.all([
      transporter.sendMail(mailOptions),
      transporter.sendMail(clientMailOptions),
    ]);

    transporter.close();

    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false, error: "Failed to send email" };
  }
}
