import Image from "next/image";
import generalData from "@/_data/general-data.json";
import MessageTemplate from "@/_components/ui/message-template";

export default function HowItWorksStepThree() {
  const { transitionPlan } = generalData.aboutPage.howItWorks.stepThree;

  return (
    <section className="flex flex-col gap-10 w-full h-full">
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
      <div className="grid gap-10 desktop:grid-cols-2">
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

        <div className="grid gap-10 tablet:grid-cols-2 desktop:flex flex-col">
          <div className="flex flex-col gap-10 desktop:gap-5">
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
          <div className="relative aspect-video w-full desktop:aspect-auto desktop:h-full">
            <Image
              src="/images/about-page/119987e70f5205a830d94add7edd0a1306aa9b83.jpg"
              alt="Transition Plan"
              fill
              sizes="(max-width: 800px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
