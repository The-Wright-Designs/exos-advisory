import SectionHeadingComponent from "../../ui/section-heading-component";

export default function ExosComponent() {
  return (
    <section className="bg-mist px-7 tablet:px-0">
      <div className="grid gap-10 max-w-[1280px] py-15 mt-15 tablet:p-15 desktop:mx-auto desktop:mt-[100px]">
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
              {`. A proven framework`}
              <span className="font-bold">{` from someone who has lived it`}</span>
              .
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
      </div>
    </section>
  );
}
