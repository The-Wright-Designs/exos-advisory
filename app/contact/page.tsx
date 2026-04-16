import type { Metadata } from "next";

import ContentWrapper from "@/_lib/utils/content-wrapper";
import SectionHeadingComponent from "@/_components/ui/section-heading-component";
import ContactForm from "@/_components/contact-forms/contact-form";

export const metadata: Metadata = {
  title: "Contact | EXOS Advisory",
  keywords:
    "contact EXOS Advisory, entrepreneur exit enquiry, get in touch EXOS, post-exit support contact, pre-exit planning enquiry",
};

const ContactPage = () => {
  return (
    <ContentWrapper cssClasses="flex flex-col gap-10 pt-15">
      <div className="flex flex-col gap-10">
        <SectionHeadingComponent>Contact</SectionHeadingComponent>
        <div className="flex flex-col gap-5">
          <p>
            If you have any questions regarding EXOS, or would like to
            understand how EXOS works in practice, please get in touch.
          </p>
          <p>
            This may relate to pre-exit planning, post-exit transition, or
            simply understanding whether the approach is appropriate for your
            current situation.
          </p>
          <p>Complete the form below and we will respond directly.</p>
        </div>
      </div>
      <ContactForm heading="Get In Touch" formType="contact" />
    </ContentWrapper>
  );
};

export default ContactPage;
