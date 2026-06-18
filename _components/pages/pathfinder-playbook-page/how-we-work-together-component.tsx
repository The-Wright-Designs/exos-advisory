import Image from "next/image";
import classNames from "classnames";
import SectionHeadingComponent from "@/_components/ui/section-heading-component";

interface HowWeWorkTogetherProps {
  cssClasses?: string;
}

const cards = [
  {
    icon: "/icons/virtual.svg",
    title: "Virtual",
    description:
      "The full engagement, from Discovery through to a completed Transition Plan and Scorecard, delivered one-on-one online across a four to six week cycle, with ongoing advisory support beyond.",
    bg: "bg-mist",
    titleColor: "text-charcoal",
    descriptionColor: "text-charcoal",
  },
  {
    icon: "/icons/in-person.svg",
    title: "In-person immersion",
    description:
      "A two-day engagement in a private setting that accelerates Discovery and the opening phases of the Pathfinder Playbook. Remaining sessions and ongoing support are delivered virtually.",
    bg: "bg-slate",
    titleColor: "text-white",
    descriptionColor: "text-white",
  },
  {
    icon: "/icons/hybrid.svg",
    title: "Hybrid",
    description:
      "In-person and virtual sessions combined across the engagement, with face-to-face meetings at key inflection points in the transition.",
    bg: "bg-citrine",
    titleColor: "text-white",
    descriptionColor: "text-white",
  },
];

const HowWeWorkTogetherComponent = ({ cssClasses }: HowWeWorkTogetherProps) => {
  return (
    <section
      className={classNames(
        "flex flex-col gap-10 min-[1000px]:gap-5",
        cssClasses,
      )}
    >
      <SectionHeadingComponent>How We Work Together</SectionHeadingComponent>
      <p>
        The EXOS methodology is constant. How it is delivered adapts to you.
      </p>
      <div className="flex flex-col gap-10 desktop:grid desktop:grid-cols-3">
        {cards.map(
          ({ icon, title, description, bg, titleColor, descriptionColor }) => (
            <div
              key={title}
              className={classNames("flex flex-col gap-5 rounded-md p-7", bg)}
            >
              <div className="flex items-center gap-3">
                <Image src={icon} alt="" width={24} height={24} />
                <h3
                  className={classNames("text-[24px] font-normal", titleColor)}
                >
                  {title}
                </h3>
              </div>
              <p className={descriptionColor}>{description}</p>
            </div>
          ),
        )}
      </div>
      <p>
        The right format depends on your situation, your geography, and your
        pace. That conversation begins in the Discovery Meeting.
      </p>
    </section>
  );
};

export default HowWeWorkTogetherComponent;
