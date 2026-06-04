import Image from "next/image";
import generalData from "@/_data/general-data.json";
import MessageTemplate from "@/_components/ui/message-template";

export default function HowItWorksStepThree() {
  const { transitionPlan } = generalData.whatIsExosPage.howItWorks.stepThree;

  return (
    <section className="flex flex-col gap-10 w-full h-full">
      <div className="grid gap-10 grid-cols-[1fr_0.5fr]">
        <div className="flex flex-col gap-5">
          <p className="text-subheading font-light">
            Step Three: Transition Plan
          </p>
          <p>
            <span className="font-bold">
              An integrated plan across all five pillars
            </span>
            {` containing sequenced objectives, engagement briefs, timelines, and governance milestones and reviewed monthly.`}
          </p>
        </div>
        <div className="hidden desktop:flex gap-5 flex-col">
          <p className="font-bold">
            The Transition Plan answers three essential questions:
          </p>
          <MessageTemplate sentTime="07:44" isReply>
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
      </div>
      <div className="grid gap-10">
        <div className="flex flex-col gap-10 border-y border-charcoal/50 py-10">
          <div className="flex flex-col gap-5">
            <p className="font-bold">The Transition Plan contains:</p>
            <div className="flex flex-col gap-5">
              {transitionPlan.map((item, index) => (
                <div key={index} className="flex gap-3 items-start">
                  <Image
                    src="/icons/circle-check.svg"
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
          <p>
            Reviewed and adapted monthly. This plan is a living document, never
            static, always reflecting where the transition actually is.
          </p>
        </div>

        <div className="flex flex-col gap-10 desktop:hidden">
          <p className="font-bold">
            The Transition Plan answers three essential questions:
          </p>
          <MessageTemplate sentTime="07:44" isReply>
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
      </div>
    </section>
  );
}
