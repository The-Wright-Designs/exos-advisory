import classNames from "classnames";
import { ReactNode } from "react";

interface Props {
  toLeft?: boolean;
  slateBorder?: boolean;
  stairNumber: string;
  children: ReactNode;
  cssClasses?: string;
  hasTail?: boolean;
}

export default function SingleStairComponent({
  toLeft,
  slateBorder,
  stairNumber,
  children,
  cssClasses,
  hasTail,
}: Props) {
  return (
    <div
      className={classNames(
        "relative flex items-center justify-center p-[10px] font-medium border-b-2 border-solid size-[83px] min-[388px]:size-[112px]",
        {
          "border-l-2": !toLeft,
          "border-r-2": toLeft,
          "border-citrine": !slateBorder,
          "border-slate": slateBorder,
        },
        cssClasses,
      )}
    >
      <p className="text-center font-normal text-[12px] min-[388px]:text-paragraph">
        {children}
      </p>
      <div
        className={classNames(
          "absolute bottom-0 flex items-center justify-center p-1 size-[22px] min-[388px]:size-[30px]",
          {
            "left-0": !toLeft,
            "right-0": toLeft,
          },
        )}
      >
        <p className="font-bold text-citrine text-[16px] min-[388px]:text-[24px] w-full">
          {stairNumber}.
        </p>
      </div>
      {hasTail && (
        <div
          className={classNames(
            "w-0.5 h-9 absolute -bottom-9",
            slateBorder ? "bg-slate left-0" : "bg-citrine right-0",
          )}
        />
      )}
    </div>
  );
}
