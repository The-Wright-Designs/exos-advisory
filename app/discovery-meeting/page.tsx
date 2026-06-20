import type { Metadata } from "next";

import ContentWrapper from "@/_lib/utils/content-wrapper";
import SectionHeadingComponent from "@/_components/ui/section-heading-component";
import ContactForm from "@/_components/contact-forms/contact-form";

export const metadata: Metadata = {
  title: "Book a Discovery Meeting | EXOS Advisory",
  keywords:
    "book discovery meeting EXOS, entrepreneur exit consultation, post-exit discovery call, structured exit support, EXOS Advisory meeting",
};

const DiscoveryMeetingPage = () => {
  return (
    <ContentWrapper cssClasses="flex flex-col gap-10 pt-15">
      <SectionHeadingComponent>Book a Discovery Meeting</SectionHeadingComponent>
      <ContactForm />
    </ContentWrapper>
  );
};

export default DiscoveryMeetingPage;
