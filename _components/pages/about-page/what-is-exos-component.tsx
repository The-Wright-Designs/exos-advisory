import Image from "next/image";
import classNames from "classnames";

import SectionHeadingComponent from "@/_components/ui/section-heading-component";

const stages = [
  { label: "Stage 1", text: "Structure before optionality", bg: "bg-slate" },
  { label: "Stage 2", text: "Sequence before acceleration", bg: "bg-citrine" },
  { label: "Stage 3", text: "Clarity before capital", bg: "bg-charcoal" },
];

const WhatIsExos = () => {
  return (
    <main className="flex flex-col gap-10">
      <SectionHeadingComponent>What is EXOS?</SectionHeadingComponent>

      <div className="flex flex-col gap-4">
        <p>
          EXOS is an Exit Operating System for life after exit. During the years
          of building a company, decisions are made within a defined context,
          shaped by cadence, accountability, and interconnected priorities.
          After exit, that context disappears, but the decisions do not become
          any less consequential.
        </p>
        <p>
          EXOS replaces that context with a more deliberate one. At its centre
          is the Pathfinder Playbook, a structured approach that combines lived
          founder experience with institutional research to map the full
          landscape of the transition, surface what matters most, and bring
          coherence to decisions that would otherwise remain fragmented.
        </p>
        <p>
          EXOS is an Exit Operating System for pre- and post-exit entrepreneurs.
          At its core is the Pathfinder Playbook, a structured framework that
          sequences decisions across identity, structure, capital, and support
          to navigate the question of what is next.
        </p>
      </div>

      <div className="grid gap-10 tablet:grid-cols-2">
        <div className="flex flex-col">
          {stages.map((stage, index) => (
            <div key={stage.label}>
              <div
                className={classNames(
                  "flex flex-col gap-1.5 p-5 rounded-[6px] border border-white",
                  stage.bg,
                )}
              >
                <span className="text-[16px] font-extralight text-center text-white pb-1 border-b border-white/50">
                  {stage.label}
                </span>
                <p className="text-white font-normal text-center">
                  {stage.text}
                </p>
              </div>
              {index < stages.length - 1 && (
                <div className="flex items-center justify-center relative h-15">
                  <span className="bg-lustre border-[2px] border-citrine rounded-[6px] px-2 pt-[3px] pb-0.5 text-[12px] text-charcoal z-10 -translate-y-1.5">
                    Unlocks
                  </span>
                  <Image
                    src="/graphics/about-page/arrow-down.svg"
                    alt="down arrow"
                    width={24.85}
                    height={52}
                    className="absolute h-[52px] top-0"
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="relative w-full aspect-square min-[600px]:h-[450px] tablet:aspect-auto tablet:h-full">
          <Image
            src="/images/about-page/a57eb49ed6bffa93ed64c608e7ff1c8315ad3fc8.jpg"
            alt="EXOS"
            fill
            sizes="(max-width: 800px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </main>
  );
};

export default WhatIsExos;
