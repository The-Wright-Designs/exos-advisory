import type { Metadata } from "next";

import HowItWorksComponent from "@/_components/pages/pathfinder-playbook-page/how-it-works/how-it-works-component";
import PathfinderPlaybookComponent from "@/_components/pages/pathfinder-playbook-page/pathfinder-playbook/pathfinder-playbook-component";
import ContentWrapper from "@/_lib/utils/content-wrapper";
import TheProcessComponent from "@/_components/pages/pathfinder-playbook-page/the-process/the-process-component";

export const metadata: Metadata = {
  title: "What is EXOS | EXOS Advisory",
  keywords:
    "what is EXOS Advisory, EXOS system explained, entrepreneur exit framework, Pathfinder Playbook, post-exit transition process, how EXOS works, exit advisory system",
};

const AboutPage = () => {
  return (
    <main className="pt-15">
      <ContentWrapper>
        <PathfinderPlaybookComponent />
        <TheProcessComponent />
      </ContentWrapper>
      <HowItWorksComponent />
    </main>
  );
};

export default AboutPage;
