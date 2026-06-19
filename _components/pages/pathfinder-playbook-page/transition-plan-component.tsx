import Image from "next/image";
import generalData from "@/_data/general-data.json";
import SectionHeadingComponent from "@/_components/ui/section-heading-component";
import MessageTemplate from "@/_components/ui/message-template";

export default function TransitionPlanComponent() {
  const { transitionPlan } = generalData.thePathfinderPlaybookPage;

  return (
    <section className="grid gap-10 my-15 min-[1000px]:my-[100px] min-[1000px]:grid-cols-[1fr_475px]">
      <SectionHeadingComponent cssClasses="[&_h2]:flex [&_h2]:flex-col [&_h2]:gap-1 min-[1000px]:col-span-2">
        The Transition Plan
        <span className="text-[26px] font-light">
          The framework that converts insight into a decision
        </span>
      </SectionHeadingComponent>
      <p>
        The Transition Plan is the <strong>bespoke roadmap</strong> at the core
        of the programme. It brings together your Discovery diagnostic and your
        adviser briefs across all five pillars, and turns the breakthrough
        insight of your transition into{" "}
        <strong>a personalised, structured action plan</strong>: a framework
        that sequences the decisions ahead, so they are made in the right order
        rather than the urgent one.
      </p>
      <div className="flex flex-col gap-5 min-[1000px]:col-span-2">
        <p className="text-[26px] font-bold">The value:</p>
        <p>
          One plan, built around you, that brings the five pillars together and
          sequences what to do, and when, to unlock the transition with clarity.
        </p>
        <div className="flex flex-col gap-5 min-[1000px]:mt-5">
          {transitionPlan.checklist.map((item, index) => (
            <div key={index} className="flex gap-3 items-start">
              <Image
                src="/icons/circle-check.svg"
                alt="Check mark graphic"
                width={24}
                height={24}
                className="shrink-0"
              />
              <p>
                <strong>{item.bold}</strong>
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-5 border-t border-charcoal/25 pt-10 min-[1000px]:col-start-2 min-[1000px]:row-start-2 min-[1000px]:pt-0 min-[1000px]:border-none">
        <p className="font-bold">
          The Transition Plan answers three essential questions:
        </p>
        <MessageTemplate sentTime="07:44" isReply hideIcon>
          <ol className="list-decimal pl-5 flex flex-col">
            <li>
              <p>What is next?</p>
            </li>
            <li>
              <p>What is not yet?</p>
            </li>
            <li>
              <p>What must stabilise first?</p>
            </li>
          </ol>
        </MessageTemplate>
      </div>
    </section>
  );
}
