import SectionHeadingComponent from "@/_components/ui/section-heading-component";
import TheProcessComponent from "./the-process-component";

const HowItWorksComponent = () => {
  return (
    <section className="mt-10 px-7 tablet:p-15 tablet:bg-charcoal desktop:px-0 desktop:mt-[100px]">
      <div className="border-t max-w-[1280px] mx-auto border-charcoal/50 pt-10 grid gap-10 tablet:border-none tablet:pt-0">
        <SectionHeadingComponent cssClasses="[&_h2]:flex [&_h2]:flex-col [&_h2]:gap-1 tablet:[&_h2]:text-white">
          How It Works <span>The EXOS Process</span>
        </SectionHeadingComponent>
        <div className="grid gap-10 pb-10 border-b border-charcoal/50 tablet:border-none tablet:pb-0 tablet:grid-cols-2 tablet:gap-20 min-[1000px]:grid-cols-[300px_1fr] desktop:grid-cols-[412px_1fr]">
          <TheProcessComponent />
          <p className="tablet:font-thin tablet:text-white">
            <strong>Exit removes the operating system</strong> that once made
            your decisions coherent. The board meeting. The team. The quarterly
            cadence. The integrated framework that connected urgency, identity,
            capital, and accountability: gone. Most founders replace none of it.{" "}
            <strong>
              The cost compounds quietly, for years, before it becomes visible.
            </strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksComponent;
