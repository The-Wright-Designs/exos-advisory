import ButtonLink from "@/_components/ui/buttons/button-link";

export default function WhatsNextComponent() {
  return (
    <div className="grid -mx-7 items-center gap-10 bg-charcoal px-10 py-15 min-[1000px]:mx-0 min-[1000px]:rounded-md desktop:bg-transparent desktop:border-y-[3px] border-citrine desktop:py-10 desktop:rounded-none min-[1000px]:col-span-2 desktop:grid-cols-[560px_1fr] desktop:px-0 desktop:gap-y-7">
      <h2 className="text-white text-center font-nudista font-bold desktop:row-span-2 desktop:text-[90px]">{`What's next?`}</h2>
      <p className="text-white text-center text-subheading font-thin">
        That conversation starts here.
      </p>
      <ButtonLink
        href="/discovery-meeting"
        ariaLabel="Book a Discovery Meeting"
        border="citrine"
        background="citrine"
        cssClasses="min-[600px]:place-self-center"
      >
        Book a Discovery Meeting
      </ButtonLink>
    </div>
  );
}
