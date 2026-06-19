import SectionHeadingComponent from "@/_components/ui/section-heading-component";
import ProcessFlowComponent from "./process-flow-component";

const TheProcessComponent = () => {
  return (
    <section className="flex flex-col gap-10 my-15 desktop:my-[100px]">
      <SectionHeadingComponent cssClasses="[&_h2]:flex [&_h2]:flex-col [&_h2]:gap-1">
        The Process <span className="text-[26px] font-light">In Sequence</span>
      </SectionHeadingComponent>
      <div className="flex flex-col gap-5">
        <p>
          The process runs in a clear sequence. <strong>Discovery</strong>{" "}
          builds the initial picture. <strong>The Pathfinder Playbook</strong>{" "}
          then works each of the five pillars through the same three-step loop:{" "}
          <strong>Learning Brief</strong>, then <strong>Questionnaire</strong>,
          then <strong>Pillar Brief</strong>. Once all five pillars are
          complete, <strong>Golden Thread Mapping</strong> draws them into a
          single thesis. That feeds the <strong>Transition Plan</strong>, which
          the <strong>Scorecard</strong> then keeps moving.
        </p>
        <p className="text-[26px]">
          Learnings, Reflection, Insight, Action.{" "}
          <span className="font-bold text-citrine text-[26px]">
            We call it LRIA.
          </span>
        </p>
      </div>
      <ProcessFlowComponent />
    </section>
  );
};

export default TheProcessComponent;
