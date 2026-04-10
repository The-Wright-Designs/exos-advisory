interface DiscoveryCallEmailTemplateProps {
  name: string;
  email: string;
  countryOfResidence: string;
  primaryIndustry: string;
  haveYouExitedABusiness: string;
  howManyExits?: string;
  timingOfMostRecentExit?: string;
  currentPhase: string;
  currentState: string[];
  whatPromptedYou: string;
  founderInvestorNetworks?: string;
  mostPressingIssue: string;
  doesThisAlign: string;
}

export const discoveryCallEmailTemplate = ({
  name,
  email,
  countryOfResidence,
  primaryIndustry,
  haveYouExitedABusiness,
  howManyExits,
  timingOfMostRecentExit,
  currentPhase,
  currentState,
  whatPromptedYou,
  founderInvestorNetworks,
  mostPressingIssue,
  doesThisAlign,
}: DiscoveryCallEmailTemplateProps) => {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>EXOS Advisory - Discovery Call Enquiry</title>
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
        <h2>Discovery Call Enquiry</h2>

        <p class="section-title">Background</p>

        <div class="field">
          <span class="label">Name:</span>
          <span class="value">${name}</span>
        </div>

        <div class="field">
          <span class="label">Email:</span>
          <span class="value">${email}</span>
        </div>

        <div class="field">
          <span class="label">Country of Residence:</span>
          <span class="value">${countryOfResidence}</span>
        </div>

        <div class="field">
          <span class="label">Primary Industry of Most Recent Business:</span>
          <span class="value">${primaryIndustry}</span>
        </div>

        <p class="section-title">Exit Context</p>

        <div class="field">
          <span class="label">Have you exited a business?</span>
          <span class="value">${haveYouExitedABusiness}</span>
        </div>

        ${
          howManyExits
            ? `<div class="field">
          <span class="label">How many exits?</span>
          <span class="value">${howManyExits}</span>
        </div>`
            : ""
        }

        ${
          timingOfMostRecentExit
            ? `<div class="field">
          <span class="label">Timing of most recent exit:</span>
          <span class="value">${timingOfMostRecentExit}</span>
        </div>`
            : ""
        }

        <p class="section-title">Current Position</p>

        <div class="field">
          <span class="label">Which best describes your current phase?</span>
          <span class="value">${currentPhase}</span>
        </div>

        <p class="section-title">Decision Readiness</p>

        <div class="field">
          <span class="label">Which best reflects your current state?</span>
          <span class="value">${currentState.join(", ")}</span>
        </div>

        <p class="section-title">Trigger & Support</p>

        <div class="field">
          <span class="label">What prompted you to explore EXOS now?</span>
          <br />
          <span class="value">${whatPromptedYou}</span>
        </div>

        ${
          founderInvestorNetworks
            ? `<div class="field">
          <span class="label">Founder or investor networks:</span>
          <span class="value">${founderInvestorNetworks}</span>
        </div>`
            : ""
        }

        <p class="section-title">Core Constraint</p>

        <div class="field">
          <span class="label">Most pressing issue:</span>
          <br />
          <span class="value">${mostPressingIssue}</span>
        </div>

        <p class="section-title">Confirmation</p>

        <div class="field">
          <span class="label">Does this align with what you are looking for?</span>
          <span class="value">${doesThisAlign}</span>
        </div>
      </div>
    </div>
  </body>
</html>`;
};
