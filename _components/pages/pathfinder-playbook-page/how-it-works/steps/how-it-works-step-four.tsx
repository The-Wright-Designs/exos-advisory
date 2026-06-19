import Image from "next/image";
import generalData from "@/_data/general-data.json";
import WhatsNextComponent from "./step-four/whats-next-component";
import HowWeWorkTogetherComponent from "../../how-we-work-together-component";

export default function HowItWorksStepFour() {
  const { bulletPoints } = generalData.whatIsExosPage.howItWorks.stepFour;

  return (
    <section className="grid gap-15 w-full h-full">
      <div className="grid gap-10 desktop:grid-cols-2">
        <div className="grid gap-10">
          <div className="flex flex-col gap-5">
            <h4 className="text-subheading font-light desktop:text-white">
              Step Four: Scorecard & Navigational Support
            </h4>
            <p className="desktop:text-white">
              This forms the accountability architecture. It is not a
              performance review. It is a navigational instrument. This is where
              EXOS operates as your accountability partner, not a sounding board
              you check in with, but an active governance structure that holds
              the full picture, asks the honest question each month, and ensures
              that what needs to move actually moves.
            </p>
          </div>
          <ul className="flex flex-col gap-3 list-disc pl-5">
            {bulletPoints.map((item, index) => (
              <li key={index} className="desktop:text-white">
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative hidden desktop:block">
          <Image
            src="/images/pathfinder-playbook-page/bd911f2e4614ea9c2b3b6b442c97a64f0170ae92.jpg"
            alt="Scorecard & Navigational Support"
            fill
            sizes="50vw"
            className="object-cover"
          />
        </div>
      </div>
      <div className="grid gap-15 min-[1000px]:grid-cols-2">
        <div className="relative aspect-video w-full min-[1000px]:aspect-auto desktop:hidden">
          <Image
            src="/images/pathfinder-playbook-page/bd911f2e4614ea9c2b3b6b442c97a64f0170ae92.jpg"
            alt="Scorecard & Navigational Support"
            fill
            sizes="(max-width: 1000px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <HowWeWorkTogetherComponent cssClasses="min-[1000px]:p-10 min-[1000px]:bg-lustre min-[1000px]:rounded-md min-[1000px]:col-span-2" />
        <WhatsNextComponent />
      </div>
    </section>
  );
}
