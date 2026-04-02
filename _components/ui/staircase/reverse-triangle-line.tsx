import classNames from "classnames";

interface ReverseTriangleLineProps {
  cssClasses?: string;
}

const ReverseTriangleLine = ({ cssClasses }: ReverseTriangleLineProps) => {
  return (
    <div className={classNames("flex flex-col items-center", cssClasses)}>
      <div className={"w-[2px] h-[88px] bg-slate"} />
      <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[12px] border-b-slate" />
    </div>
  );
};

export default ReverseTriangleLine;
