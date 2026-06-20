"use server";

import nodemailer from "nodemailer";
import { emailTemplate } from "@/_lib/utils/email-templates/email-template";
import { verifyRecaptchaToken } from "@/_lib/verify-recaptcha";

interface MailOptions {
  from: string;
  to: string;
  subject: string;
  replyTo: string;
  html: string;
}

export async function sendEmail(
  formData: FormData,
): Promise<{ success: boolean; error?: string }> {
  const honey = formData.get("_honey");
  const recaptchaToken = formData.get("recaptchaToken") as string;

  try {
    if (!honey || honey.toString().trim() === "") {
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

      const name = formData.get("name")?.toString() || "";
      const email = formData.get("email")?.toString() || "";
      const country = formData.get("country")?.toString() || "";
      const message = formData.get("message")?.toString() || "";

      if (!name.trim() || !email.trim() || !country.trim()) {
        return {
          success: false,
          error: "All required fields must be filled",
        };
      }

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
        subject: "Website form submission - EXOS Advisory",
        replyTo: email,
        html: emailTemplate({ name, email, country, message }),
      };

      await transporter.sendMail(mailOptions);
      return { success: true };
    } else {
      console.error("Invalid form submission due to non-empty honeypot field");
      return { success: false, error: "Spam detected" };
    }
  } catch (error) {
    console.error(error);
    return { success: false, error: "Failed to send email" };
  }
}
