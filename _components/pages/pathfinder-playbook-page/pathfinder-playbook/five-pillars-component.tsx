import classNames from "classnames";

interface Props {
  cssClasses?: string;
}

const pillars = [
  {
    label: "Structure and Purpose",
    subtext: "Purpose, values, and structure",
    bg: "bg-slate",
    tabletOrder: "tablet:order-1",
  },
  {
    label: "Financial",
    subtext: "Wealth preservation and growth",
    bg: "bg-citrine",
    tabletOrder: "tablet:order-2",
  },
  {
    label: "Mentorship",
    subtext: "Guidance and constructive challenge",
    bg: "bg-charcoal",
    tabletOrder: "tablet:order-3",
  },
  {
    label: "Identity",
    subtext: "Identity, meaning, and legacy",
    bg: "bg-citrine",
    tabletOrder: "tablet:order-5",
  },
  {
    label: "Community",
    subtext: "Peers who have been there",
    bg: "bg-slate",
    tabletOrder: "tablet:order-4",
  },
];

const FivePillarsComponent = ({ cssClasses }: Props) => {
  return (
    <div className={classNames("flex flex-col gap-5", cssClasses)}>
      <p className="text-subheading desktop:text-[26px]">
        <strong className="font-bold">The five pillars</strong>, and why they
        are interdependent
      </p>
      <div className="flex flex-col gap-5 tablet:flex-row tablet:flex-wrap tablet:justify-center desktop:flex-col desktop:items-start">
        {pillars.map((pillar) => (
          <div
            key={pillar.label}
            className={classNames(
              "flex flex-col gap-1.5 px-5 py-4 tablet:w-[calc(50%-10px)] desktop:w-auto desktop:flex-row desktop:gap-5 desktop:items-center desktop:py-7 rounded-[6px] border border-white",
              pillar.bg,
              pillar.tabletOrder,
            )}
          >
            <span className="text-[18px] font-normal text-center text-white pb-1.5 border-b border-white/50 desktop:text-[22px] desktop:pb-0 desktop:border-b-0 desktop:border-r desktop:pr-5">
              {pillar.label}
            </span>
            <p className="text-white font-extralight text-[16px] text-center desktop:text-[18px]">
              {pillar.subtext}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FivePillarsComponent;
