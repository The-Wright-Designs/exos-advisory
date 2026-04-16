import type { Metadata } from "next";

import ContentWrapper from "@/_lib/utils/content-wrapper";
import SectionHeadingComponent from "@/_components/ui/section-heading-component";
import ContactForm from "@/_components/contact-forms/contact-form";

export const metadata: Metadata = {
  title: "One-On-One Advisory | EXOS Advisory",
  keywords:
    "one-on-one entrepreneur advisory, confidential exit advisory, founder transition support, pre-exit planning, post-exit advisory, entrepreneur coaching alternative, EXOS Advisory",
};

const AdvisoryPage = () => {
  return (
    <ContentWrapper cssClasses="flex flex-col gap-10 pt-15">
      <main className="flex flex-col gap-10">
        <SectionHeadingComponent>One-On-One Advisory</SectionHeadingComponent>
        <p>
          We work one-on-one with founders and entrepreneurs on a confidential
          advisory basis, focusing on the personal impact of pre- and post-exit
          transition. If you are navigating that shift, or beginning to feel it
          on the horizon, we would welcome the opportunity to talk.
        </p>
      </main>
      <ContactForm heading="Book a Discussion" formType="advisory" />
    </ContentWrapper>
  );
};

export default AdvisoryPage;
