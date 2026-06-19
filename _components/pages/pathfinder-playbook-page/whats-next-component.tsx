import ButtonLink from "@/_components/ui/buttons/button-link";

export default function WhatsNextComponent() {
  return (
    <section className="bg-charcoal mt-15 desktop:py-15 desktop:mt-[100px]">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-10 items-center border-y-[3px] border-citrine py-15 px-7 tablet:px-10 min-[1360px]:px-15 desktop:flex-row desktop:py-10">
        <h2 className="text-white text-center text-[48px] font-bold desktop:text-left desktop:text-[90px] desktop:flex-1">{`What's next?`}</h2>
        <div className="flex flex-col gap-10 items-center w-full desktop:flex-1">
          <p className="text-white text-center text-subheading desktop:text-paragraph">
            EXOS helps you answer that question with structure clarity and
            direction.
          </p>
          <ButtonLink
            href="/discovery-meeting"
            ariaLabel="Book a Discovery Meeting"
            border="citrine"
            background="citrine"
            cssClasses="w-full min-[600px]:w-auto"
          >
            Book a Discovery Meeting
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
