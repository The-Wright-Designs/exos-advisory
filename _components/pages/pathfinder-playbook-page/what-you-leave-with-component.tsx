import classNames from "classnames";
import SectionHeadingComponent from "@/_components/ui/section-heading-component";
import generalData from "@/_data/general-data.json";

const colorMap: Record<string, string> = {
  charcoal: "bg-charcoal",
  slate: "bg-slate",
  citrine: "bg-citrine",
};

const desktopWidths = ["100%", "92%", "84%", "76%", "68%", "60%"];

const WhatYouLeaveWithComponent = () => {
  const cards = generalData.thePathfinderPlaybookPage.whatYouLeaveWith;

  return (
    <section className="py-[60px] bg-charcoal my-15 desktop:my-[100px]">
      <div className="flex flex-col gap-10 max-w-[1280px] mx-auto px-7 tablet:px-10 min-[1360px]:px-15">
        <SectionHeadingComponent cssClasses="text-white">
          What You Leave With
        </SectionHeadingComponent>
        <div className="bg-lustre rounded-[6px] p-7 desktop:p-10">
          <div className="flex flex-col gap-5">
            {cards.map((card, index) => (
              <div
                key={index}
                className={classNames(
                  "rounded-[6px] border border-white p-5 desktop:hidden",
                  colorMap[card.color],
                )}
              >
                <p className="text-[24px] text-white">{card.text}</p>
              </div>
            ))}
            {cards.map((card, index) => (
              <div
                key={index}
                className="hidden desktop:flex items-center gap-5"
                style={{ width: desktopWidths[index] }}
              >
                <div className="shrink-0 size-[14px] rounded-full border-2 border-charcoal" />
                <div
                  className={classNames(
                    "flex-1 rounded-[6px] border border-white p-5",
                    colorMap[card.color],
                  )}
                >
                  <p className="text-[26px] text-white">{card.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouLeaveWithComponent;
