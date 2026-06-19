import ButtonLink from "@/_components/ui/buttons/button-link";

export default function ExosComponent() {
  return (
    <section className="bg-mist w-full mt-15 desktop:mt-[100px] -mb-20">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-10 items-center py-15 px-7 tablet:px-10 desktop:px-15">
        <p className="text-[32px] font-extralight text-charcoal text-center">
          EXOS was built so founders do not have to navigate that transition
          alone.
        </p>
        <ButtonLink
          href="/discovery-meeting"
          background="charcoal"
          border="citrine"
          ariaLabel="Book a Discovery Meeting"
        >
          Book a Discovery Meeting
        </ButtonLink>
      </div>
    </section>
  );
}
