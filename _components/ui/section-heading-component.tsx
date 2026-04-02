import classNames from "classnames";

interface Props {
  children: React.ReactNode;
  cssClasses?: string;
}

const SectionHeadingComponent = ({ children, cssClasses }: Props) => {
  return (
    <div
      className={classNames(
        "border-b-[3px] border-citrine pb-3 w-full",
        cssClasses
      )}
    >
      <h2>{children}</h2>
    </div>
  );
};

export default SectionHeadingComponent;
