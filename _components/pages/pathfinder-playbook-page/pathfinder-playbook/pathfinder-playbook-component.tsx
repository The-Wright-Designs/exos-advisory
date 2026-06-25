import SectionHeadingComponent from "@/_components/ui/section-heading-component";
import EvolvingEntrepreneurComponent from "@/_components/pages/pathfinder-playbook-page/evolving-entrepreneur-component";
import classNames from "classnames";
import FivePillarsComponent from "./five-pillars-component";
import OthersDistortComponent from "./others-distort-component";

interface Props {
  cssClasses?: string;
}

const PathfinderPlaybookComponent = ({ cssClasses }: Props) => {
  return (
    <main className="flex flex-col gap-15">
      <div
        className={classNames(
          "flex flex-col items-center gap-15 desktop:grid grid-cols-[1fr_466px] desktop:items-start",
          cssClasses,
        )}
      >
        <div className="flex flex-col gap-10">
          <SectionHeadingComponent cssClasses="[&_h2]:flex [&_h2]:flex-col [&_h2]:gap-1">
            The Pathfinder Playbook{" "}
            <span className="text-[26px]">How the Playbook works</span>
          </SectionHeadingComponent>
          <p className="text-[24px]">
            <strong>Everything in EXOS runs on the Playbook.</strong> It is the
            framework that maps the five interconnected pillars of an
            entrepreneur&apos;s transition:{" "}
            <strong>
              Structure and Purpose, Financial, Mentorship, Identity, and
              Community.
            </strong>{" "}
            At its centre is the Evolving Entrepreneur, a recognition that
            transition is not a single event but an ongoing process of growth
            and recalibration. <strong>The Playbook</strong> is the lens through
            which{" "}
            <strong>every session and every decision is structured</strong>, so
            that no pillar is worked in isolation and the insight from each
            connects into a coherent whole.
          </p>
        </div>
        <EvolvingEntrepreneurComponent />
      </div>
      <div className="grid gap-15 desktop:grid-cols-[1fr_466px] desktop:border-t border-charcoal/25 desktop:pt-15">
        <FivePillarsComponent />
        <OthersDistortComponent />
      </div>
    </main>
  );
};

export default PathfinderPlaybookComponent;
