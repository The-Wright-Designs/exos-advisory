import type { Metadata } from "next";

import HowItWorksComponent from "@/_components/pages/pathfinder-playbook-page/how-it-works/how-it-works-component";

export const metadata: Metadata = {
  title: "What is EXOS | EXOS Advisory",
  keywords:
    "what is EXOS Advisory, EXOS system explained, entrepreneur exit framework, Pathfinder Playbook, post-exit transition process, how EXOS works, exit advisory system",
};

const AboutPage = () => {
  return (
    <main className="pt-15">
      <HowItWorksComponent />
    </main>
  );
};

export default AboutPage;
