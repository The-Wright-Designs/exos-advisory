import classNames from "classnames";
import Image from "next/image";

interface Props {
  cssClasses?: string;
  backgroundSlate?: boolean;
  children: React.ReactNode;
  slateArrow?: boolean;
  index: number;
}

const BubbleComponent = ({
  cssClasses,
  backgroundSlate,
  children,
  slateArrow,
  index,
}: Props) => {
  return (
    <div
      className={classNames(
        "flex items-center justify-center p-2 rounded-[6px]",
        {
          "bg-slate/25": backgroundSlate,
          "bg-citrine/75": !backgroundSlate,
        },
        cssClasses,
      )}
    >
      <p className="text-[13px] font-extralight leading-[1.25] text-center">
        {children}
      </p>
      <Image
        src={
          slateArrow
            ? "/graphics/slate-arrow-left-top.png"
            : "/graphics/citrine-arrow-bottom-left.png"
        }
        alt="Arrow"
        width={slateArrow ? 43 : 46}
        height={slateArrow ? 45 : 41}
        className={classNames("absolute", {
          "-bottom-15 -left-1": index === 1,
          "-bottom-14 left-3": index === 5,
          "-bottom-1 -right-15": index === 3 || index === 7,
        })}
      />
    </div>
  );
};

export default BubbleComponent;
