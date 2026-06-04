import Image from "next/image";

export default function HowItWorksStepOne() {
  return (
    <section className="grid gap-10 w-full h-full">
      <div className="flex flex-col gap-5 w-full">
        <p className="text-subheading font-light">Step One: EXOS Discovery</p>
        <p>
          <span className="font-bold">
            Discovery begins with the EXOS Discovery Questionnaire
          </span>
          {`, a cross-pillar assessment covering emotional wellbeing, identity readiness, decision-making patterns, financial orientation, relationship dynamics, and behavioural vulnerabilities across all five domains.`}
        </p>
      </div>
    </section>
  );
}
