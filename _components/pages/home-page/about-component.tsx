import ButtonLink from "@/_components/ui/buttons/button-link";
import MessageTemplate from "@/_components/ui/message-template";

export default function AboutComponent() {
  return (
    <main className="w-full scroll-mt-20 desktop:bg-slate" id="about">
      <div className="max-w-[1280px] mx-auto px-7 flex flex-col gap-10 desktop:px-15 desktop:py-15 ">
        <div className="flex flex-col gap-10 tablet:grid grid-cols-[1fr_354px] desktop:gap-10">
          <div className="flex flex-col gap-10 tablet:items-start">
            <div className="flex flex-col gap-5">
              <p className="font-extralight leading-[125%] text-[26px] desktop:text-white desktop:text-[22px]">
                Most entrepreneurs spend decades building toward an exit, yet{" "}
                <span className="font-bold text-[26px] desktop:text-white desktop:text-[22px]">
                  very few prepare for what follows
                </span>
                . When the business is no longer there to define pace,
                priorities, and identity, the transition becomes less about
                capital and more about clarity.
              </p>
              <p className="font-extralight leading-[125%] text-[26px] tablet:hidden min-[1000px]:block desktop:text-white desktop:text-[22px]">
                <span className="font-bold text-[26px] desktop:text-white desktop:text-[22px]">
                  EXOS
                </span>{" "}
                is a strategic advisory for pre- and post-exited entrepreneurs,{" "}
                <span className="font-bold text-[26px] desktop:text-white desktop:text-[22px]">
                  helping you shape what comes next
                </span>{" "}
                with the intention of aligning wealth with purpose and building
                a second chapter defined by both meaning and enduring value.
              </p>
            </div>
            <ButtonLink
              href="/pathfinder-playbook"
              background="charcoal"
              border="citrine"
              cssClasses="hidden desktop:flex"
            >
              Book a Discovery Meeting
            </ButtonLink>
          </div>
          <div className="flex flex-col gap-[20px] desktop:border-l-[3px] desktop:border-citrine desktop:pl-[20px]">
            <MessageTemplate
              sentTime="00:32"
              unread
              messageClasses="max-w-[289px]"
            >
              What happens to everything I have worked for if I get the next
              chapter wrong?
            </MessageTemplate>
            <MessageTemplate
              unread
              sentTime="01:17"
              messageClasses="max-w-[314px]"
            >
              Who am I without the business?
            </MessageTemplate>
            <MessageTemplate sentTime="01:19" notDelivered>
              What do I do now?
            </MessageTemplate>
          </div>
        </div>{" "}
        <p className="hidden tablet:block font-extralight leading-[125%] text-[26px] min-[1000px]:hidden">
          <span className="font-bold text-[26px] desktop:text-white desktop:text-[22px]">
            EXOS
          </span>{" "}
          is a strategic advisory for pre- and post-exited entrepreneurs,{" "}
          <span className="font-bold text-[26px] desktop:text-white desktop:text-[22px]">
            helping you shape what comes next
          </span>{" "}
          with the intention of aligning wealth with purpose and building a
          second chapter defined by both meaning and enduring value.
        </p>
        <ButtonLink
          href="/pathfinder-playbook"
          background="charcoal"
          border="citrine"
          cssClasses="desktop:hidden min-[600px]:self-start"
        >
          Book a Discovery Meeting
        </ButtonLink>
      </div>
    </main>
  );
}
