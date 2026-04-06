import HowItWorksComponent from "@/_components/pages/about-page/how-it-works/how-it-works-component";
import WhatIsExosComponent from "@/_components/pages/about-page/what-is-exos-component";
import ContentWrapper from "@/_lib/utils/content-wrapper";

const AboutPage = () => {
  return (
    <main className="pt-15">
      <ContentWrapper>
        <WhatIsExosComponent />
      </ContentWrapper>
      <HowItWorksComponent />
    </main>
  );
};

export default AboutPage;
