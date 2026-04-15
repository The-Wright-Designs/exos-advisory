import ContentWrapper from "@/_lib/utils/content-wrapper";
import SectionHeadingComponent from "@/_components/ui/section-heading-component";
import EnquiryForm from "@/_components/contact-forms/enquiry-form/enquiry-form";

const DiscoveryMeetingPage = () => {
  return (
    <ContentWrapper cssClasses="flex flex-col gap-10 pt-15">
      <div className="flex flex-col gap-10">
        <SectionHeadingComponent>
          Book a Discovery Meeting
        </SectionHeadingComponent>
        <div className="flex flex-col gap-5">
          <p>
            If transition is on your mind and you would like to explore what
            structured support looks like, we would welcome the opportunity to
            speak with you.
          </p>
          <p>
            Please complete this short enquiry so we can get a better
            understanding of where you are and what matters most to you right
            now. Your responses help us prepare for the Discovery Conversation
            and establish whether it is the right fit for both sides.
          </p>
          <p>
            It takes less than five minutes, and once submitted, you will be
            directed to book a time that suits you.
          </p>
        </div>
      </div>
      <EnquiryForm />
    </ContentWrapper>
  );
};

export default DiscoveryMeetingPage;
