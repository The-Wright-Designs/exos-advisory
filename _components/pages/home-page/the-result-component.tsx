import Image from "next/image";
import classNames from "classnames";
import SectionHeadingComponent from "@/_components/ui/section-heading-component";
import ButtonLink from "@/_components/ui/buttons/button-link";

const items = [
  {
    title: "Overconfidence",
    description: "based on past success.",
    bg: "bg-mist",
    text: "text-charcoal",
    width: "w-full min-w-[240px] min-[375px]:w-[60%] tablet:w-[76%]",
  },
  {
    title: "Saying yes too often",
    description: "due to guilt, pressure, or ego.",
    bg: "bg-citrine",
    text: "text-white",
    width: "w-full min-w-[240px] min-[375px]:w-[72.5%] tablet:w-[84%]",
  },
  {
    title: "Emotional investing",
    description: "to prove relevance or fill a void.",
    bg: "bg-white",
    text: "text-charcoal",
    width: "w-full min-[375px]:w-[85%] tablet:w-[92%]",
  },
  {
    title: "Premature capital allocation",
    description: "before objectives and strategy are fully aligned.",
    bg: "bg-charcoal",
    text: "text-white",
    width: "w-full",
  },
];

export default function TheResultComponent() {
  return (
    <section
      className="mt-15 w-full scroll-mt-10 tablet:bg-slate tablet:py-15 desktop:scroll-mt-40"
      id="the-result"
    >
      <div className="max-w-[1280px] mx-auto flex flex-col gap-10 px-7 tablet:px-10 desktop:px-15">
        <SectionHeadingComponent cssClasses="tablet:text-white">
          The Result?
        </SectionHeadingComponent>
        <div className="flex flex-col gap-10 w-full">
          <div className="grid gap-10 tablet:grid-cols-[320px_1fr]">
            <div className="flex flex-col gap-5 w-full tablet:gap-7">
              {items.map(({ title, description, bg, text, width }) => (
                <div
                  key={title}
                  className={classNames(
                    bg,
                    text,
                    width,
                    "flex flex-col gap-0.5 px-5 py-4 rounded-md tablet:py-5",
                  )}
                >
                  <p className="font-semibold text-[24px]">{title}</p>
                  <p className="font-extralight">{description}</p>
                </div>
              ))}
            </div>
            <div className="relative h-[433px] w-full tablet:h-full">
              <Image
                src="/images/home-page/c80fd5e8ba68b01a260a9f35254d23499d59a405.jpg"
                alt="Person jumping into water from a dock"
                fill
                sizes="(max-width: 1280px) 100vw, 70vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="grid gap-10 tablet:grid-cols-[1fr_245px] tablet:items-start tablet:p-10 tablet:border-y-[2px] tablet:border-white">
            <ButtonLink
              href="/about"
              background="charcoal"
              border="citrine"
              cssClasses="tablet:order-last"
            >
              What is EXOS?
            </ButtonLink>
            <div className="flex flex-col gap-[10px] items-center text-center w-full tablet:items-start desktop:gap-1">
              <p className="italic tablet:text-white tablet:text-left desktop:text-[26px] desktop:font-thin">
                &ldquo;People have been here before. The problem is real and
                normal. And you can learn from how they navigated it.&rdquo;
              </p>
              <p className="tablet:text-white tablet:text-left desktop:text-[26px]">
                - EXOS client
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
