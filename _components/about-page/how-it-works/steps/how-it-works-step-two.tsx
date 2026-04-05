import EvolvingEntrepreteurComponent from "./step-two/evolving-entrepreneur-component";
import ThePathfinderPlaybookComponent from "./step-two/the-pathfinder-playbook-component";

export default function HowItWorksStepTwo() {
  return (
    <section className="flex flex-col gap-10 w-full h-full">
      <div className="flex flex-col gap-5">
        <p className="text-subheading font-light">
          Step Two: Pathfinder Playbook
        </p>
        <p>
          {`This is where we introduce you to `}
          <span className="font-bold">the Pathfinder Playbook</span>
          {` — the strategic framework that sits at the heart of the EXOS system. The Playbook maps the five interconnected pillars that shape a founder's transition: Structure and Purpose, Financial, Mentorship, Identity, and Community. At the centre is the Evolving Entrepreneur — a recognition that transition is not a single event but an ongoing process of growth and recalibration.`}
        </p>
      </div>
      <div className="grid gap-10 desktop:bg-white desktop:p-10 desktop:rounded-md desktop:grid-cols-[334px_1fr]">
        <EvolvingEntrepreteurComponent cssClasses="place-self-center" />
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-5">
            <p className="font-bold">
              The Core Insight: Five Interwoven Pillars
            </p>
            <p>{`Exit destabilizes five operating domains simultaneously. They are intertwined and dependent on each other. A therapist, a financial advisor, a coach, a peer network each addresses one domain. None addresses the way they compound on and distort each other. EXOS integrates and sequences across all five.`}</p>
          </div>
          <div className="flex flex-col gap-5">
            <p className="font-bold">
              When One Pillar Shifts, the Others Distort
            </p>
            <ul className="list-disc pl-7 flex flex-col gap-1">
              <li>
                <p>Without Guidance, risk appetite changes silently</p>
              </li>
              <li>
                <p>Without Structure, optionality becomes reactivity</p>
              </li>
              <li>
                <p>Without Mentor perspective, blind spots compound</p>
              </li>
              <li>
                <p>
                  Without Community, advisors carry disproportionate influence
                </p>
              </li>
              <li>
                <p>Without Financial discipline, capital fragments</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <ThePathfinderPlaybookComponent />
    </section>
  );
}
