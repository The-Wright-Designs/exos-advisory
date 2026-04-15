import classNames from "classnames";
import Image from "next/image";
import generalData from "@/_data/general-data.json";

const { thePathfinderPlaybook } = generalData.whatIsExosPage.howItWorks.stepTwo;

export default function ThePathfinderPlaybookComponent() {
  return (
    <section className="pt-10 border-t border-charcoal/50">
      {/* mobile version */}
      <div className="flex flex-col gap-10 desktop:hidden">
        <div className="flex flex-col gap-5">
          <h4 className="text-[26px] font-normal">
            The Pathfinder Playbook process in each pillar
          </h4>
          <div className="bg-charcoal border-2 border-citrine rounded-md px-7 py-10 flex flex-col gap-5">
            {thePathfinderPlaybook.map((item, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={classNames("flex gap-3", {
                    "flex-row": isLeft,
                    "flex-row-reverse": !isLeft,
                    "border-b border-slate/50 pb-5":
                      index !== thePathfinderPlaybook.length - 1,
                  })}
                >
                  <div
                    className={classNames(
                      "border-white shrink-0 flex items-start justify-end",
                      {
                        "border-r-2 pr-3": isLeft,
                        "border-l-2 pl-3": !isLeft,
                      },
                    )}
                  >
                    <p className="text-citrine text-[52px] font-bold leading-none">
                      {index + 1}
                    </p>
                  </div>
                  <div
                    className={classNames("flex flex-col gap-2.5", {
                      "text-left": isLeft,
                      "text-right": !isLeft,
                    })}
                  >
                    <p className="text-white font-normal">{item.title}</p>
                    <p className="text-white font-thin whitespace-pre-wrap">
                      {item.paragraph}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="relative aspect-video tablet:h-[550px] tablet:aspect-auto">
          <Image
            src="/images/about-page/988128d3f9ff5311ff10e3a6847be39f11d0611b.jpg"
            alt="The Pathfinder Playbook"
            fill
            sizes="100vw"
            className="w-full object-cover"
          />
        </div>
      </div>
      {/* desktop version */}
      <div className="hidden desktop:flex flex-col gap-10">
        <h4 className="text-[26px] font-normal">
          The Pathfinder Playbook process in each pillar
        </h4>
        <div className="relative rounded-md overflow-hidden p-15">
          <Image
            src="/images/about-page/988128d3f9ff5311ff10e3a6847be39f11d0611b.jpg"
            alt="The Pathfinder Playbook"
            fill
            sizes="1280px"
            className="object-cover scale-x-[-1]"
          />
          <div
            className="absolute inset-0 rounded-md"
            style={{
              background:
                "linear-gradient(to right, #C3C6C8 0%, rgba(195,198,200,0.5) 53%, transparent 70%)",
            }}
          />
          <div className="relative z-10 grid grid-cols-[2fr_1.25fr]">
            <div className="grid grid-cols-2 gap-7 w-full">
              {thePathfinderPlaybook.map((item, index) => {
                const isDark = index === 0 || index === 3;
                return (
                  <div
                    key={index}
                    className={classNames(
                      "flex flex-col gap-5 p-7 rounded-md",
                      {
                        "bg-charcoal/95": isDark,
                        "bg-slate/95": !isDark,
                      },
                    )}
                  >
                    <p className="text-citrine text-[80px] font-bold leading-none">
                      {index + 1}
                    </p>
                    <div className="flex flex-col gap-2.5">
                      <p className="text-white font-normal">{item.title}</p>
                      <p className="text-white font-extralight whitespace-pre-wrap">
                        {item.paragraph}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
