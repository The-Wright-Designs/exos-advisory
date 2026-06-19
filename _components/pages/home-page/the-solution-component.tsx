import Image from "next/image";
import classNames from "classnames";

import SectionHeadingComponent from "@/_components/ui/section-heading-component";
import ButtonLink from "@/_components/ui/buttons/button-link";

const stages = [
  { label: "Stage 1", text: "Structure before optionality", bg: "bg-slate" },
  { label: "Stage 2", text: "Sequence before acceleration", bg: "bg-citrine" },
  { label: "Stage 3", text: "Clarity before capital", bg: "bg-charcoal" },
];

const TheSolutionComponent = () => {
  return (
    <section className="flex flex-col gap-10 mt-15 desktop:mt-[100px]">
      <SectionHeadingComponent>EXOS: The Solution</SectionHeadingComponent>
      <div className="grid gap-10 desktop:grid-cols-2">
        <div className="flex flex-col gap-5">
          <p>
            EXOS is{" "}
            <strong className="font-bold">
              an Exit Operating System for life after exit
            </strong>
            . During the years of building a company, decisions are made within
            a defined context shaped by cadence, accountability, and
            interconnected priorities. After exit, that context disappears, but
            the decisions do not become any less consequential.
          </p>
          <p>
            EXOS replaces that context with a more deliberate one.{" "}
            <strong className="font-bold">
              At its core is the Pathfinder Playbook
            </strong>
            , a structured approach that combines lived entrepreneur experience
            with institutional research to map the full landscape of the
            transition, surface what matters most, and bring coherence to
            decisions that would otherwise remain fragmented.{" "}
            <strong className="font-bold">
              It provides a framework for pre and post-exit entrepreneurs
            </strong>{" "}
            to sequence decisions across identity, structure, capital, and
            support, and bring clarity to what comes next.
          </p>
          <p>
            Inside every pillar it runs the same engine,{" "}
            <strong className="font-bold text-citrine">LRIA</strong>:{" "}
            <strong className="font-bold">Learnings</strong> from those who have
            walked the path, <strong className="font-bold">Reflection</strong>{" "}
            on what they mean for you, the{" "}
            <strong className="font-bold">Insight</strong> you reach yourself,
            and the <strong className="font-bold">Action</strong> that converts
            that insight into a decision
          </p>
          <ButtonLink
            href="/what-is-exos"
            background="citrine"
            border="charcoal"
            cssClasses="hidden desktop:flex self-start mt-5"
          >
            See inside the Pathfinder Playbook
          </ButtonLink>
        </div>

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
                    src="/graphics/pathfinder-playbook-page/arrow-down.svg"
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

        <ButtonLink
          href="/what-is-exos"
          background="citrine"
          border="charcoal"
          cssClasses="min-[600px]:self-center desktop:hidden"
        >
          See inside the Pathfinder Playbook
        </ButtonLink>
      </div>
    </section>
  );
};

export default TheSolutionComponent;
