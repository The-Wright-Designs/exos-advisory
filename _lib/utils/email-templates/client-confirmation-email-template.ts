interface ClientConfirmationEmailTemplateProps {
  name: string;
  calendlyUrl: string;
}

export const clientConfirmationEmailTemplate = ({
  name,
  calendlyUrl,
}: ClientConfirmationEmailTemplateProps): string => {
  const firstName = name.split(" ")[0];

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Your EXOS Advisory enquiry has been received</title>
</head>
<body style="margin:0;padding:0;background-color:#EAE4E1;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#EAE4E1;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;">

          <tr>
            <td style="background-color:#1A1B1C;padding:32px 40px;">
              <table cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="vertical-align:middle;">
                    <img
                      src="https://real-brides.s3.eu-south-2.amazonaws.com/exos-logo-gradient.png"
                      alt="EXOS Advisory"
                      width="120"
                      style="display:block;border:0;outline:none;"
                    />
                  </td>
                  <td style="vertical-align:middle;padding-left:20px;">
                    <h1 style="margin:0;font-size:22px;font-weight:700;color:#FBFBFB;white-space:nowrap;">EXOS Advisory</h1>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td style="background-color:#FBFBFB;padding:48px 40px;">
              <p style="margin:0 0 8px 0;font-size:11px;letter-spacing:3px;text-transform:uppercase;color:#9097AA;">
                Discovery Call Request
              </p>
              <h1 style="margin:0 0 24px 0;font-size:28px;font-weight:700;line-height:1.2;color:#1A1B1C;">
                Thank you, ${firstName}.
              </h1>
              <p style="margin:0 0 16px 0;font-size:16px;line-height:1.7;color:#1A1B1C;font-weight:300;">
                Your submission has been received.
              </p>
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:36px;">
                <tr>
                  <td style="border-top:1px solid #EAE4E1;"></td>
                </tr>
              </table>
              <p style="margin:0 0 36px 0;font-size:16px;line-height:1.7;color:#1A1B1C;font-weight:300;">
                EXOS works with a select number of entrepreneurs navigating pre and post exit transition. Each enquiry is carefully reviewed to understand your current position and determine whether there is a strong fit for an EXOS engagement.
              </p>
              <p style="margin:0 0 36px 0;font-size:16px;line-height:1.7;color:#1A1B1C;font-weight:300;">
                A member of the EXOS team will revert to you following review of your submission.
              </p>
            </td>
          </tr>

          <tr>
            <td style="background-color:#EAE4E1;padding:24px 40px;border-top:1px solid #C3C6C8;">
              <p style="margin:0 0 6px 0;font-size:12px;color:#9097AA;line-height:1.5;">
                EXOS Advisory &middot; A strategic advisory for pre- and post-exited entrepreneurs
              </p>
              <p style="margin:0;font-size:11px;color:#C3C6C8;line-height:1.5;">
                You're receiving this email because you submitted a discovery call enquiry on the EXOS Advisory website. This is an automated confirmation — please do not reply to this email.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
};

/*               ${
                calendlyUrl
                  ? `<table cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="background-color:#E3A04B;border-radius:2px;">
                    <a
                      href="${calendlyUrl}"
                      style="display:inline-block;padding:14px 32px;font-size:13px;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:#1A1B1C;text-decoration:none;"
                    >
                      Book a Discovery Call
                    </a>
                  </td>
                </tr>
              </table>`
                  : ""
              } */
