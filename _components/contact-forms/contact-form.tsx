"use client";

import { useRef, useState } from "react";
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
} from "react-google-recaptcha-v3";

import { sendEmail } from "@/_actions/send-email-actions";
import ButtonType from "@/_components/ui/buttons/button-type";
import FormInput from "@/_components/ui/forms/form-input";
import FormSelect from "@/_components/ui/forms/form-select";
import FormTextarea from "@/_components/ui/forms/form-textarea";

const COUNTRIES = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo (Congo-Brazzaville)",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czechia",
  "Democratic Republic of the Congo",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Korea",
  "North Macedonia",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Korea",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

interface FormState {
  success: boolean;
  error?: string;
}

const ContactFormInner = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const formRef = useRef<HTMLFormElement>(null);
  const [state, setState] = useState<FormState>({ success: false });
  const [savedValues, setSavedValues] = useState({
    name: "",
    email: "",
    country: "",
    message: "",
  });
  const [retryKey, setRetryKey] = useState(0);

  const handleSubmit = async (formData: FormData) => {
    const name = formData.get("name")?.toString() || "";
    const email = formData.get("email")?.toString() || "";
    const country = formData.get("country")?.toString() || "";
    const message = formData.get("message")?.toString() || "";
    setSavedValues({ name, email, country, message });

    try {
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

      const result = await sendEmail(formData);
      setState(result);
      if (!result.success) setRetryKey((k) => k + 1);
    } catch {
      setState({
        success: false,
        error: "An unexpected error occurred. Please try again.",
      });
      setRetryKey((k) => k + 1);
    }
  };

  return (
    <div>
      {state.success ? (
        <p className="text-charcoal text-center text-subheading py-15">
          Your message has been sent. We will be in touch soon.
        </p>
      ) : (
        <>
          <form
            key={retryKey}
            ref={formRef}
            action={handleSubmit}
            className="flex flex-col gap-10"
          >
            <div className="flex flex-col gap-5">
              <FormInput
                label="Name:"
                name="name"
                placeholder="Full name"
                required
                autoComplete="name"
                defaultValue={savedValues.name}
              />
              <FormInput
                label="Email:"
                name="email"
                type="email"
                placeholder="Email address"
                required
                autoComplete="email"
                defaultValue={savedValues.email}
              />
              <FormSelect
                label="Country: *"
                name="country"
                options={COUNTRIES}
                required
                defaultValue={savedValues.country}
              />
              <FormTextarea
                label="Message"
                name="message"
                placeholder="Type your message here"
                defaultValue={savedValues.message}
              />
            </div>
            <input
              type="text"
              name="_honey"
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />
            {state.error && (
              <p className="text-[#ff6b6b] text-center">{state.error}</p>
            )}
            <ButtonType
              type="submit"
              border="citrine"
              background="charcoal"
              cssClasses="min-[600px]:self-start"
              ariaLabel="Submit contact form"
            >
              Submit
            </ButtonType>
          </form>
        </>
      )}
    </div>
  );
};

const ContactForm = () => {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
    >
      <ContactFormInner />
    </GoogleReCaptchaProvider>
  );
};

export default ContactForm;
