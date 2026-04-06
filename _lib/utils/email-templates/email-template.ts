interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
  formType: "advisory" | "contact";
}

const titles: Record<string, string> = {
  advisory: "One-on-One Advisory Form Submission",
  contact: "General Contact Form Submission",
};

export const emailTemplate = ({
  name,
  email,
  message,
  formType,
}: EmailTemplateProps) => {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>EXOS Advisory - ${titles[formType]}</title>
    <style>
      .container { max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif; }
      .header { background-color: #E3A04B; color: white; padding: 1rem; }
      .content { padding: 1rem; }
      .field { margin-bottom: 0.5rem; }
      .label { font-weight: 500; }
      .value { font-weight: 200; font-style: italic; color: #333; }
      .section-title { font-size: 1.1rem; margin-top: 1.5rem; margin-bottom: 0.5rem; color: #E3A04B; }
      .footer { margin-top: 2rem; padding-top: 1rem; border-top: 1px solid #eee; font-size: 0.9rem; color: #666; }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h1>EXOS Advisory</h1>
      </div>

      <div class="content">
        <h2>${titles[formType]}</h2>

        <div class="field">
          <span class="label">Name:</span>
          <span class="value">${name}</span>
        </div>

        <div class="field">
          <span class="label">Email:</span>
          <span class="value">${email}</span>
        </div>

        <div class="field">
          <span class="label">Message:</span>
          <br />
          <span class="value">${message}</span>
        </div>
      </div>
    </div>
  </body>
</html>`;
};
