import SectionHeadingComponent from "@/_components/ui/section-heading-component";
import StaircaseComponent from "./staircase-component";
import TheLinkBetweenComponent from "./the-link-between-component";
import TheInvestmentTrapComponent from "./the-investment-trap-component";
import ButtonLink from "@/_components/ui/buttons/button-link";
import InfoCardsComponent from "./info-cards-component";

const TheHiddenCostComponent = () => {
  return (
    <section className="scroll-mt-10 desktop:scroll-mt-40">
      <div
        className="grid gap-15 tablet:grid-cols-[334px_1fr]"
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
        <div className="flex flex-col gap-15 desktop:gap-10">
          <TheLinkBetweenComponent />
          <TheInvestmentTrapComponent />
          <ButtonLink
            href="/pathfinder-playbook"
            background="citrine"
            border="charcoal"
            cssClasses="min-[600px]:self-start"
          >
            Book a Discovery Meeting
          </ButtonLink>
        </div>
      </div>
      <div className="hidden desktop:flex flex-col gap-5">
        <InfoCardsComponent />
        <p className="hidden text-charcoal/75 text-[18px] font-extralight italic pb-5 border-b-2 border-citrine text-center desktop:block">
          <span className="font-bold not-italic">Source:</span> UBS, Yale SOM,
          Anastasia Koroleva Media. Columbia Business School.
        </p>
      </div>
    </section>
  );
};

export default TheHiddenCostComponent;
