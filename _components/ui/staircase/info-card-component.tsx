import classNames from "classnames";

interface Props {
  percentage: string;
  children: React.ReactNode;
  percentagePositionRight?: boolean;
  cssClasses?: string;
  orangeBackground?: boolean;
  charcoalBackground?: boolean;
  mistBackground?: boolean;
}

export default function InfoCardComponent({
  percentage,
  children,
  percentagePositionRight,
  cssClasses,
  orangeBackground,
  charcoalBackground,
  mistBackground,
}: Props) {
  return (
    <div
      className={classNames(
        "flex items-center gap-3 p-5 rounded-[6px] border-2 overflow-hidden",
        {
          "flex-row-reverse": percentagePositionRight,
          "bg-citrine border-charcoal/50": orangeBackground,
          "bg-charcoal border-citrine/85": charcoalBackground,
          "bg-mist border-charcoal/50": mistBackground,
        },
        cssClasses,
      )}
    >
      <p
        className={classNames(
          "flex-1 text-[16px] min-[388px]:text-paragraph font-extralight leading-[1.25]",
          {
            "text-right": percentagePositionRight,
            "text-left": !percentagePositionRight,
            "text-white": orangeBackground || charcoalBackground,
            "text-charcoal": mistBackground,
          },
        )}
      >
        {children}
      </p>
      <div
        className={classNames("flex items-start self-stretch pt-1", {
          "border-r-2 pr-3": percentagePositionRight,
          "border-l-2 pl-3": !percentagePositionRight,
          "border-white": orangeBackground,
          "border-citrine/85": charcoalBackground,
          "border-charcoal": mistBackground,
        })}
      >
        <p
          className={classNames(
            "text-[32px] min-[388px]:text-[40px] font-bold whitespace-nowrap leading-none",
            {
              "text-white": orangeBackground || charcoalBackground,
              "text-charcoal": mistBackground,
            },
          )}
        >
          {percentage}
        </p>
      </div>
    </div>
  );
}
