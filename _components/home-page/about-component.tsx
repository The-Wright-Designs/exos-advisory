import Image from "next/image";
import ButtonLink from "@/_components/ui/buttons/button-link";
import MessageTemplate from "@/_components/ui/message-template";

export default function AboutComponent() {
  return (
    <main className="w-full desktop:bg-slate">
      <div className="max-w-[1280px] mx-auto px-5 pb-15 flex flex-col gap-10 desktop:px-15 desktop:py-15 ">
        <div className="flex flex-col gap-10 desktop:grid desktop:grid-cols-[1fr_354px] desktop:gap-10">
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
              <p className="font-extralight leading-[125%] text-[26px] desktop:text-white desktop:text-[22px]">
                <span className="font-bold text-[26px] desktop:text-white desktop:text-[22px]">
                  EXOS
                </span>{" "}
                is a strategic advisory for pre- and post-exited founders,{" "}
                <span className="font-bold text-[26px] desktop:text-white desktop:text-[22px]">
                  helping you shape what comes next
                </span>{" "}
                with intention of aligning wealth with purpose and building a
                second chapter defined by both meaning and enduring value.
              </p>
            </div>
            <ButtonLink
              href="#"
              background="charcoal"
              border="citrine"
              cssClasses="hidden desktop:flex"
            >
              What is EXOS?
            </ButtonLink>
          </div>
          <div className="grid gap-10 min-[600px]:grid-cols-[1fr_314px] desktop:block">
            <div className="flex flex-col gap-[20px] desktop:border-l-[3px] desktop:border-citrine desktop:pl-[20px]">
              <MessageTemplate sentTime="00:32" messageClasses="max-w-[289px]">
                What happens to everything I&apos;ve worked for if I get the
                next chapter wrong?
              </MessageTemplate>
              <MessageTemplate sentTime="01:17" messageClasses="w-[314px]">
                Who am I without the business?
              </MessageTemplate>
              <MessageTemplate sentTime="01:19" notDelivered>
                What do I do now?
              </MessageTemplate>
            </div>
            <div className="relative aspect-video rounded-md overflow-hidden min-[600px]:aspect-auto min-[950px]:aspect-video min-[600px]:order-first desktop:hidden">
              <Image
                src="/images/home-page/9715528619e46abd6bf83d3001bd5f94820584ac.jpg"
                alt="Founder reflecting on life after business exit"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
        <ButtonLink
          href="#"
          background="charcoal"
          border="citrine"
          cssClasses="desktop:hidden min-[600px]:self-start"
        >
          What is EXOS?
        </ButtonLink>
        <div className="hidden desktop:grid desktop:grid-cols-[1fr_354px] gap-10">
          <div className="relative aspect-video rounded-md overflow-hidden">
            <Image
              src="/images/home-page/9715528619e46abd6bf83d3001bd5f94820584ac.jpg"
              alt="Founder reflecting on life after business exit"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-full rounded-md overflow-hidden">
            <Image
              src="/images/home-page/52a01a3dae19842c69313db7b59e4fe1424025fc.jpg"
              alt="Strategic advisory session for post-exit founders"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
