import ButtonLink from "@/_components/ui/buttons/button-link";
import classNames from "classnames";
import TheInvestmentTrapComponent from "./the-investment-trap-component";

interface TheLinkBetweenComponentProps {
  cssClasses?: string;
}

const TheLinkBetweenComponent = ({
  cssClasses,
}: TheLinkBetweenComponentProps) => {
  return (
    <section
      className={classNames(
        "flex flex-col gap-5 pt-15 border-t border-t-charcoal/25 tablet:pt-0 tablet:border-none desktop:col-span-2 desktop:order-first",
        cssClasses,
      )}
    >
      <h4 className="text-[26px] leading-[1.25]">
        The link between transition and wealth loss
      </h4>
      <div className="flex flex-col gap-5">
        <p>
          There is a direct and well-documented <strong>link</strong> between
          post-exit wealth loss and the <strong>failure to process</strong> the{" "}
          <strong>emotional</strong>, <strong>identity</strong>, and{" "}
          <strong>structural challenges</strong> of the transition.
        </p>
        <p>
          Exited entrepreneurs often experience a breakdown of their personal
          compass:
        </p>
      </div>
    </section>
  );
};

export default TheLinkBetweenComponent;
