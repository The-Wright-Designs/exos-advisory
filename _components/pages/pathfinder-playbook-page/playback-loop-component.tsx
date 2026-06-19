import classNames from "classnames";
import generalData from "@/_data/general-data.json";
import SectionHeadingComponent from "@/_components/ui/section-heading-component";

const { playbackLoop } = generalData.thePathfinderPlaybookPage;

const TitleWithItalicSuffix = ({ title }: { title: string }) => {
  const idx = title.indexOf("(");
  if (idx === -1) return <>{title}</>;
  return (
    <>
      {title.slice(0, idx)}
      <em className="font-extralight">{title.slice(idx)}</em>
    </>
  );
};

export default function PlaybackLoopComponent() {
  return (
    <section className="pt-10 border-t border-charcoal/50 flex flex-col gap-10">
      <SectionHeadingComponent cssClasses="[&_h2]:flex [&_h2]:flex-col [&_h2]:gap-1">
        <span className="text-heading">
          The Playbook Loop:{" "}
          <span className="text-citrine text-heading">LRIA</span>
        </span>
        <span className="text-[26px] font-light">In Detail</span>
      </SectionHeadingComponent>
      {/* mobile version */}
      <div className="flex flex-col gap-10 tablet:hidden">
        <div className="bg-mist border-[3px] border-charcoal rounded-md px-7 py-10 flex flex-col gap-5">
          {playbackLoop.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div key={index} className="flex flex-col gap-5">
                <div
                  className={classNames("flex gap-3 items-stretch", {
                    "flex-row": isLeft,
                    "flex-row-reverse": !isLeft,
                  })}
                >
                  <div
                    className={classNames(
                      "border-charcoal flex flex-col justify-between w-12 items-center",
                      {
                        "border-r-2 pr-3": isLeft,
                        "border-l-2 pl-3": !isLeft,
                      },
                    )}
                  >
                    <p className="text-citrine text-[52px] font-bold leading-none -translate-y-1.5">
                      {item.label[0]}
                    </p>
                    <div
                      className={classNames(
                        "flex items-center justify-center",
                        {
                          "-rotate-90": isLeft,
                          "rotate-90": !isLeft,
                          "-translate-y-6.5": index === 0 || index === 1,
                          "-translate-y-4": index === 2,
                          "-translate-y-3.5": index === 3,
                        },
                      )}
                    >
                      <p className="bg-slate text-white text-[14px] font-extralight whitespace-nowrap px-2 py-1 rounded-md">
                        {item.label}
                      </p>
                    </div>
                  </div>
                  <div
                    className={classNames("flex flex-col gap-2.5 flex-1", {
                      "text-left": isLeft,
                      "text-right": !isLeft,
                    })}
                  >
                    <p className="font-normal">
                      <TitleWithItalicSuffix title={item.title} />
                    </p>
                    <p className="whitespace-pre-wrap">{item.paragraph}</p>
                  </div>
                </div>
                {index !== playbackLoop.length - 1 && (
                  <div className="h-px bg-charcoal/30 w-full" />
                )}
              </div>
            );
          })}
        </div>
      </div>
      {/* desktop version */}
      <div className="hidden gap-10 tablet:grid grid-cols-2 desktop:grid-cols-4">
        {playbackLoop.map((item, index) => {
          const isDark = index % 2 === 0;
          return (
            <div
              key={index}
              className={classNames(
                "flex-1 flex flex-col gap-5 p-7 rounded-md",
                {
                  "bg-charcoal": isDark,
                  "bg-slate": !isDark,
                },
              )}
            >
              <div className="flex items-start justify-between pb-5 border-b border-lustre">
                <p className="text-citrine text-[72px] font-bold leading-none -mt-1">
                  {item.label[0]}
                </p>
                <div className="bg-mist flex items-center justify-center px-2.5 py-1.5 rounded-md">
                  <p className="text-charcoal text-[16px]">{item.label}</p>
                </div>
              </div>
              <div className="flex flex-col gap-2.5">
                <p className="text-white font-normal">
                  <TitleWithItalicSuffix title={item.title} />
                </p>
                <p className="text-white whitespace-pre-wrap">
                  {item.paragraph}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
