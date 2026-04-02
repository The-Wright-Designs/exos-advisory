import SectionHeadingComponent from "@/_components/ui/section-heading-component";
import StaircaseComponent from "./staircase-component";
import TheLinkBetweenComponent from "./the-link-between-component";
import Image from "next/image";

const TheHiddenCostComponent = () => {
  return (
    <section className="flex flex-col gap-15">
      <div className="flex flex-col gap-10">
        <SectionHeadingComponent>
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
      <div className="aspect-square relative">
        <Image
          src="/images/home-page/6a67108f3174d8156d40662dc9bc96c91be76997.jpg"
          alt="Exos"
          fill
          className="object-cover"
        />
      </div>
      <TheLinkBetweenComponent />
    </section>
  );
};

export default TheHiddenCostComponent;
