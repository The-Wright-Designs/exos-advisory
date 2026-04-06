import Image from "next/image";

export default function HowItWorksStepOne() {
  return (
    <section className="grid gap-10 w-full h-full tablet:grid-cols-2 desktop:grid-cols-[1fr_857px]">
      <div className="flex flex-col gap-5 w-full">
        <p className="text-subheading font-light">Step One: EXOS Discovery</p>
        <p>
          <span className="font-bold">
            Discovery begins with the EXOS Discovery Questionnaire
          </span>
          {`, a cross-pillar assessment covering emotional wellbeing, identity readiness, decision-making patterns, financial orientation, relationship dynamics, and behavioural vulnerabilities across all five domains.`}
        </p>
      </div>
      <div className="relative aspect-video w-full tablet:h-[240px] desktop:h-[381px]">
        <Image
          src="/images/about-page/f3d3251e42c402d39d7274696abc44732b168fd0.jpg"
          alt="Insight"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
}
