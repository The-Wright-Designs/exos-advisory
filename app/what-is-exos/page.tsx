import type { Metadata } from "next";

import HowItWorksComponent from "@/_components/pages/what-is-exos-page/how-it-works/how-it-works-component";
import WhatIsExosComponent from "@/_components/pages/what-is-exos-page/what-is-exos-component";
import ContentWrapper from "@/_lib/utils/content-wrapper";

export const metadata: Metadata = {
  title: "What is EXOS | EXOS Advisory",
  keywords:
    "what is EXOS Advisory, EXOS system explained, entrepreneur exit framework, Pathfinder Playbook, post-exit transition process, how EXOS works, exit advisory system",
};

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
