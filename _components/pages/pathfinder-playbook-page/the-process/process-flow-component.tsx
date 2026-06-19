import Image from "next/image";
import arrowDown from "@/public/graphics/pathfinder-playbook-page/arrow-down-small.svg";
import classNames from "classnames";

const Arrow = ({ rotate }: { rotate?: boolean }) => (
  <Image
    src={arrowDown}
    alt="Arrow graphic"
    width={15}
    height={29}
    className={classNames(
      "pb-1.5",
      rotate && "tablet:rotate-270 tablet:shrink-0",
    )}
  />
);

const ProcessFlowComponent = () => {
  return (
    <div className="flex flex-col items-center desktop:px-15">
      <div className="relative bg-charcoal flex gap-5 items-center justify-center px-5 py-4 rounded-[6px] w-full max-w-[800px]">
        <p className="font-bold text-citrine text-[40px] shrink-0 tablet:absolute tablet:left-10">
          1.
        </p>
        <div className="flex flex-col gap-1.5 tablet:items-center">
          <p className="text-white text-[26px] font-normal">
            Discovery Diagnostic
          </p>
          <p className="text-white text-[16px]">
            Builds the initial picture of your transition
          </p>
        </div>
      </div>

      <Arrow />

      <div className="relative border-3 border-citrine flex flex-col gap-5 items-center justify-center px-5 py-7 rounded-[6px] w-full tablet:px-10">
        <div className="flex gap-5 items-center w-full justify-center">
          <p className="font-bold text-citrine text-[40px] shrink-0 tablet:absolute left-10">
            2.
          </p>
          <div className="flex flex-col gap-1.5 tablet:items-center">
            <p className="text-[26px] font-normal">
              The Pathfinder Playbook:{" "}
              <span className="font-bold text-citrine text-[26px]">LRIA</span>
            </p>
            <p className="text-[16px]">
              The same loop runs for each of the five pillars
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-10 w-full tablet:gap-5">
          <div className="flex flex-col items-center tablet:flex-row tablet:gap-3">
            <div className="bg-slate flex flex-col gap-1.5 items-center justify-center px-5 py-4 rounded-[6px] text-center w-full">
              <p className="text-white text-[20px]">Learning Brief</p>
              <p className="text-white text-[16px]">Learn from others</p>
            </div>
            <Arrow rotate />
            <div className="bg-slate flex flex-col gap-1.5 items-center justify-center px-5 py-4 rounded-[6px] text-center w-full">
              <p className="text-white text-[20px]">Questionnaire</p>
              <p className="text-white text-[16px]">Your candid reflection</p>
            </div>
            <Arrow rotate />
            <div className="bg-slate flex flex-col gap-1.5 items-center justify-center px-5 py-4 rounded-[6px] text-center w-full">
              <p className="text-white text-[20px]">Pillar Brief</p>
              <p className="text-white text-[16px]">Advisor-ready</p>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="border border-dashed border-slate flex items-center justify-center px-5 py-4 rounded-[6px] w-full">
              <p className="text-slate text-[18px] text-center">
                Repeated for each of the five pillars (x5)
              </p>
            </div>
            <Arrow />
            <div className="bg-citrine flex flex-col gap-1.5 items-center justify-center px-5 py-4 rounded-[6px] text-center w-full">
              <p className="text-charcoal text-[26px] font-normal">
                Golden Thread Mapping
              </p>
              <p className="text-charcoal text-[16px]">
                Synthesises the five pillars into one theses
              </p>
            </div>
          </div>
        </div>
      </div>

      <Arrow />

      <div className="relative bg-charcoal flex gap-5 items-center px-5 py-4 justify-center rounded-[6px] w-full max-w-[700px]">
        <p className="font-bold text-citrine text-[40px] shrink-0 tablet:absolute tablet:left-10">
          3.
        </p>
        <div className="flex flex-col gap-1.5 tablet:items-center">
          <p className="text-white text-[26px]">Transition Plan</p>
          <p className="text-white text-[16px]">
            Integrates all five pillars into one plan, reviewed monthly
          </p>
        </div>
      </div>

      <Arrow />

      <div className="relative bg-charcoal flex gap-5 items-center px-5 py-4 justify-center rounded-[6px] w-full min-[600px]:px-15 tablet:max-w-[600px] tablet:px-[100px]">
        <p className="font-bold text-citrine text-[40px] shrink-0 tablet:absolute tablet:left-10">
          4.
        </p>
        <div className="flex flex-col gap-1.5 tablet:items-center">
          <p className="text-white text-[26px]">Scorecard</p>
          <p className="text-white text-[16px] tablet:text-center">
            Keeps the plan moving: One to two unlock each month, with EXOS as
            your accountability partner
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProcessFlowComponent;
