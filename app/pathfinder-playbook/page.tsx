import type { Metadata } from "next";

import PathfinderPlaybookComponent from "@/_components/pages/pathfinder-playbook-page/pathfinder-playbook/pathfinder-playbook-component";
import ContentWrapper from "@/_lib/utils/content-wrapper";
import TheProcessComponent from "@/_components/pages/pathfinder-playbook-page/the-process/the-process-component";
import PlaybackLoopComponent from "@/_components/pages/pathfinder-playbook-page/playback-loop-component";
import TransitionPlanComponent from "@/_components/pages/pathfinder-playbook-page/transition-plan-component";
import ScorecardComponent from "@/_components/pages/pathfinder-playbook-page/scorecard-component";
import WhatYouLeaveWithComponent from "@/_components/pages/pathfinder-playbook-page/what-you-leave-with-component";

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
        <PlaybackLoopComponent />
        <TransitionPlanComponent />
        <ScorecardComponent />
      </ContentWrapper>
      <WhatYouLeaveWithComponent />
    </main>
  );
};

export default AboutPage;
