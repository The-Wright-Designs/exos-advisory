import classNames from "classnames";

interface Props {
  cssClasses?: string;
}

const OthersDistortComponent = ({ cssClasses }: Props) => {
  return (
    <div className={classNames("flex flex-col gap-5", cssClasses)}>
      <p className="text-subheading font-light desktop:uppercase desktop:text-[26px]">
        When one pillar shifts, the others{" "}
        <strong className="font-bold desktop:font-bold">distort</strong>
      </p>
      <ul className="list-disc pl-5 flex flex-col gap-1 desktop:hidden">
        <li>
          <strong className="font-bold">Without Structure</strong>, optionality
          becomes reactivity.
        </li>
        <li>
          <strong className="font-bold">Without Mentor perspective</strong>,
          blind spots compound.
        </li>
        <li>
          <strong className="font-bold">Without Community</strong>, advisors
          carry disproportionate influence.
        </li>
        <li>
          <strong className="font-bold">Without Financial discipline</strong>,
          capital fragments.
        </li>
        <li>
          <strong className="font-bold">Without structured guidance</strong>,
          risk appetite changes silently.
        </li>
      </ul>
      <div className="hidden desktop:flex flex-col gap-3 border-t-[3px] border-b-[3px] border-citrine py-5">
        <p>
          <strong className="font-bold">Without Structure</strong>, optionality
          becomes reactivity
        </p>
        <p>
          <strong className="font-bold">Without Mentor perspective</strong>,
          blind spots compound
        </p>
        <p>
          <strong className="font-bold">Without Community</strong>, advisors
          carry disproportionate influence
        </p>
        <p>
          <strong className="font-bold">Without Financial discipline</strong>,
          capital fragments
        </p>
        <p>
          <strong className="font-bold">Without structured guidance,</strong>{" "}
          risk appetite changes silently
        </p>
      </div>
    </div>
  );
};

export default OthersDistortComponent;
