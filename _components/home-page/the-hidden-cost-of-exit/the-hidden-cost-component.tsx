import SectionHeadingComponent from "@/_components/ui/section-heading-component";
import StaircaseComponent from "./staircase-component";

const TheHiddenCostComponent = () => {
  return (
    <section className="flex flex-col gap-10">
      <SectionHeadingComponent>The Hidden Cost of Exit</SectionHeadingComponent>
      <p className="text-[26px] flex flex-col leading-[1.25]">
        <span className="text-[26px] leading-[1.25] font-semibold">
          The Entrepreneurial Exit Cycle:
        </span>{" "}
        <span className="text-[26px] leading-[1.25]">
          The Emotional Staircase
        </span>
      </p>
      <StaircaseComponent />
    </section>
  );
};

export default TheHiddenCostComponent;
