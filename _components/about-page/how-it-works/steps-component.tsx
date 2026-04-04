import ContentWrapper from "@/_lib/utils/content-wrapper";
import HowItWorksStepOne from "./steps/how-it-works-step-one";
import HowItWorksStepTwo from "./steps/how-it-works-step-two";

const StepsComponent = () => {
  return (
    <section className="mt-10 grid gap-15 desktop:mt-15">
      <ContentWrapper>
        <HowItWorksStepOne />
      </ContentWrapper>
      <div className="desktop:bg-mist desktop:p-15">
        <div className="max-w-[1280px] mx-auto px-7 desktop:px-15">
          <HowItWorksStepTwo />
        </div>
      </div>
    </section>
  );
};

export default StepsComponent;
