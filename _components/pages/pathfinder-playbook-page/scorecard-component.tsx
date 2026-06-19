import Image from "next/image";
import circleCheck from "@/public/icons/circle-check-charcoal.svg";
import SectionHeadingComponent from "@/_components/ui/section-heading-component";

const listItems = [
  "One to two priority unlocks per 30-day cycle.",
  "Monthly governance review of what moved, what stalled, and what changes.",
  "Progress tracking against the Transition Plan.",
  "Course correction before distortion compounds.",
];

const ScorecardComponent = () => {
  return (
    <div className="flex flex-col gap-10">
      <SectionHeadingComponent cssClasses="[&_h2]:flex [&_h2]:flex-col [&_h2]:gap-1 desktop:col-span-2">
        The Scorecard
        <span className="text-[26px] font-light">and Navigational Support</span>
      </SectionHeadingComponent>

      <div className="flex flex-col gap-10 desktop:flex-row desktop:items-stretch">
        <div className="flex flex-col gap-10 desktop:flex-1">
          <p>
            The Scorecard is{" "}
            <span className="font-bold">the accountability architecture</span>.
            It is not a performance review. It is a navigational instrument.
          </p>

          <div className="border-t-3 border-b-3 border-slate py-7 flex flex-col gap-3 desktop:border-none desktop:bg-slate desktop:rounded-[6px] desktop:px-5 desktop:py-5 desktop:flex-1">
            <h4 className="font-bold desktop:text-white">The value:</h4>
            <p className="desktop:text-white">
              <span className="font-bold">
                This is where EXOS operates as your accountability partner
              </span>
              . Not a sounding board you check in with, but an active governance
              structure that holds the full picture, asks the honest question
              each month, and{" "}
              <span className="font-bold">
                ensures that what needs to move actually moves
              </span>
              .
            </p>
          </div>
        </div>

        <div className="bg-mist rounded-[6px] px-7 py-10 flex flex-col gap-5 desktop:flex-1 desktop:justify-between">
          {listItems.map((item) => (
            <div key={item} className="flex gap-3 items-start">
              <Image
                src={circleCheck}
                alt=""
                width={24}
                height={24}
                className="shrink-0"
              />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScorecardComponent;
