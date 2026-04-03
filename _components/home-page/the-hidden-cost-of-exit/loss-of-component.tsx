import classNames from "classnames";

const items = [
  { title: "Identity", description: "Who am I without the business?" },
  {
    title: "Purpose",
    description: "What do I do now that I have achieved the exit?",
  },
  {
    title: "Community",
    description: "Where is my team, my boardroom, my daily rhythm?",
  },
];

export default function LossOfComponent() {
  return (
    <article
      className={classNames(
        "bg-charcoal rounded-[6px] grid grid-cols-[45px_1fr] gap-5 px-5 py-10 overflow-hidden",
      )}
    >
      <div className={classNames("w-[45px] min-h-[240px] relative")}>
        <h4
          className={classNames(
            "text-lustre text-heading font-normal font-nudista uppercase -rotate-90 whitespace-nowrap absolute bottom-[87px] -left-[84px]",
          )}
        >
          Loss of...
        </h4>
      </div>
      <div
        className={classNames(
          "pl-5 border-l-2 border-citrine flex flex-col justify-center gap-5",
        )}
      >
        {items.map(({ title, description }) => (
          <div key={title} className={classNames("flex flex-col gap-2")}>
            <p className={classNames("text-lustre text-[20px] font-bold")}>
              {title}
            </p>
            <p className={classNames("text-lustre font-extralight")}>
              {description}
            </p>
          </div>
        ))}
      </div>
    </article>
  );
}
