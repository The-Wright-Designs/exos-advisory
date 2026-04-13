import Image from "next/image";
import SectionHeadingComponent from "../../ui/section-heading-component";

export default function ExosComponent() {
  return (
    <section className="tablet:bg-mist px-7 tablet:px-0">
      <div className="grid gap-10 max-w-[1280px] border-t border-charcoal/50 pt-15 mt-15 tablet:border-none tablet:p-15 min-[1000px]:grid-cols-2 desktop:mx-auto desktop:mt-[100px]">
        <div className="flex flex-col gap-10 w-full">
          <SectionHeadingComponent cssClasses="[&_h2]:flex [&_h2]:flex-col [&_h2]:gap-1">
            EXOS:
            <span className="text-[26px] font-extralight">
              Built by an entrepreneur, for entrepreneurs
            </span>
          </SectionHeadingComponent>
          <div className="grid gap-10">
            <p className="text-[26px] [&_span]:text-[26px]">
              <span className="font-bold">Not a theory</span>
              {`, a proven framework `}
              <span className="font-normal">from</span>
              <span className="font-bold">{` someone who's lived it`}</span>.
            </p>
            <p>
              EXOS is an Exit Operating System for pre- and post-exit
              entrepreneurs. At its core is the Pathfinder Playbook, a
              structured framework that sequences decisions across identity,
              structure, capital, and support to navigate the question of what
              is next.
            </p>
          </div>
        </div>
        <div className="hidden relative w-full h-full min-[1000px]:block">
          <Image
            src="/images/home-page/46689bad6df6e5c1b9cffee8ff5499522c6e8f99.jpg"
            alt="EXOS"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
