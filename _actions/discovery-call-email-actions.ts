"use server";

import nodemailer from "nodemailer";
import { discoveryCallEmailTemplate } from "@/_lib/utils/email-templates/discovery-call-email-template";
import { clientConfirmationEmailTemplate } from "@/_lib/utils/email-templates/client-confirmation-email-template";
import { verifyRecaptchaToken } from "@/_lib/verify-recaptcha";

interface MailOptions {
  from: string;
  to: string;
  subject: string;
  replyTo: string;
  html: string;
}

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

    const recaptchaResult = await verifyRecaptchaToken(recaptchaToken);
    if (!recaptchaResult.success) {
      return {
        success: false,
        error: recaptchaResult.error || "reCAPTCHA verification failed",
      };
    }

    const name = (formData["name"] as string) || "";
    const email = (formData["email"] as string) || "";
    const countryOfResidence =
      (formData["country-of-residence"] as string) || "";
    const primaryIndustry =
      (formData["primary-industry-of-most-recent-business"] as string) || "";
    const haveYouExitedABusiness =
      (formData["have-you-exited-a-business"] as string) || "";
    const currentPhase =
      (formData["which-best-describes-your-current-phase"] as string) || "";
    const currentState =
      (formData[
        "which-best-reflects-your-current-state-select-up-to-three"
      ] as string[]) || [];
    const whatPromptedYou =
      (formData["what-prompted-you-to-explore-exos-now"] as string) || "";
    const mostPressingIssue =
      (formData[
        "what-feels-most-unresolved-for-you-as-you-think-about-what-comes-next"
      ] as string) || "";
    const doesThisAlign =
      (formData["does-this-align-with-what-you-are-looking-for"] as string) ||
      "";

    if (
      !name.trim() ||
      !email.trim() ||
      !countryOfResidence.trim() ||
      !primaryIndustry.trim() ||
      !haveYouExitedABusiness.trim() ||
      !currentPhase.trim() ||
      currentState.length === 0 ||
      !whatPromptedYou.trim() ||
      !mostPressingIssue.trim() ||
      !doesThisAlign.trim()
    ) {
      return { success: false, error: "All required fields must be filled" };
    }

    const emailHtmlContent = discoveryCallEmailTemplate({
      name,
      email,
      countryOfResidence,
      primaryIndustry,
      haveYouExitedABusiness,
      howManyExits: (formData["how-many-exits"] as string) || undefined,
      timingOfMostRecentExit:
        (formData["timing-of-most-recent-exit"] as string) || undefined,
      currentPhase,
      currentState,
      whatPromptedYou,
      founderInvestorNetworks:
        (formData[
          "are-you-part-of-any-executive-founder-or-peer-networks"
        ] as string) || undefined,
      mostPressingIssue,
      doesThisAlign,
    });

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST as string,
      port: 465,
      secure: true,
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

    await transporter.sendMail(mailOptions);

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
    await transporter.sendMail(clientMailOptions);

    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false, error: "Failed to send email" };
  }
}
