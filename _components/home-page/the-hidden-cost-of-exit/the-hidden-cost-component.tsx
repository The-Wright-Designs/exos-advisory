import SectionHeadingComponent from "@/_components/ui/section-heading-component";
import StaircaseComponent from "./staircase-component";
import TheLinkBetweenComponent from "./the-link-between-component";
import TheInvestmentTrapComponent from "./the-investment-trap-component";

const TheHiddenCostComponent = () => {
  return (
    <section
      className="grid gap-15 scroll-mt-10 tablet:grid-cols-[334px_1fr] desktop:scroll-mt-40"
      id="the-hidden-cost"
    >
      <SectionHeadingComponent cssClasses="hidden col-span-2 tablet:block">
        The Hidden Cost of Exit
      </SectionHeadingComponent>
      <div className="flex flex-col gap-10">
        <SectionHeadingComponent cssClasses="tablet:hidden">
          The Hidden Cost of Exit
        </SectionHeadingComponent>
        <p className="text-[26px] flex flex-col leading-[1.25]">
          <span className="text-[26px] leading-[1.25] font-semibold">
            The Entrepreneurial Exit Cycle:
          </span>{" "}
          <span className="text-[26px] leading-[1.25]">
            The Emotional Staircase
          </span>
        </p>
        <StaircaseComponent />
      </div>
      <div className="flex flex-col gap-15 desktop:border-t desktop:border-charcoal/50 desktop:pt-10 desktop:border-none desktop:bg-mist desktop:p-15 desktop:rounded-md desktop:gap-10">
        <TheLinkBetweenComponent />
        <hr className="block text-charcoal/50 tablet:hidden desktop:block" />
        <TheInvestmentTrapComponent cssClasses="tablet:hidden desktop:flex" />
      </div>
      <TheInvestmentTrapComponent cssClasses="hidden col-span-2 tablet:flex desktop:hidden" />
    </section>
  );
};

export default TheHiddenCostComponent;
