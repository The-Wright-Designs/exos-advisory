import Image from "next/image";

export default function HeroComponent() {
  return (
    <div className="relative w-full pb-[60px] max-w-[1280px] mx-auto desktop:pb-0">
      <div className="relative w-full pb-[90px] tablet:pb-[60px] desktop:pb-0 desktop:grid grid-cols-[452px_1fr]">
        <div className="relative w-full h-[600px] tablet:h-[700px] desktop:h-full">
          <Image
            src="/images/home-page/51dc1c10d4f2d7d231839209f5eab5d67437d6bd.jpg"
            alt="Exos Advisory - The Exit operating system"
            fill
            className="object-cover rounded-none"
          />
        </div>
        <div className="absolute bottom-2 grid place-items-center w-full px-5 desktop:relative desktop:bottom-0 desktop:bg-citrine desktop:place-items-start desktop:p-15 overflow-hidden">
          <Image
            src="/logo/exos-logo-black.png"
            alt="EXOS Advisory logo"
            width={1246}
            height={1005}
            className="hidden desktop:block absolute rounded-none top-0 -left-[220px] min-w-[1246px] h-auto opacity-[2.5%]"
          />
          <div className="bg-citrine max-w-[310px] rounded-[6px] drop-shadow-md p-5 grid place-items-center tablet:max-w-[620px] tablet:h-auto tablet:p-10 desktop:drop-shadow-none desktop:p-0 desktop:block desktop:max-w-max desktop:bg-transparent desktop:z-10">
            <div className="text-center flex flex-col tablet:gap-2 desktop:text-left desktop:gap-5">
              <h3 className="leading-[175%] desktop:grid desktop:leading-normal">
                <span className="text-[40px] font-bold desktop:text-[108px] desktop:font-light desktop:leading-[110%]">
                  You
                </span>{" "}
                <span className="text-[40px] font-bold desktop:text-[108px] desktop:font-light desktop:leading-[110%]">
                  exited
                </span>{" "}
                <span className="text-[40px] font-bold desktop:text-[108px] desktop:font-light desktop:leading-[110%]">
                  your
                </span>{" "}
                <span className="text-[40px] font-bold desktop:text-[108px] desktop:font-light desktop:leading-[110%]">
                  business.
                </span>
              </h3>
              <span className="text-white text-[40px] font-bold leading-[110%] desktop:font-medium desktop:text-[64px] font-nudista-hero desktop:pt-10 desktop:border-t-[3px] border-charcoal desktop:min-w-[708px]">
                What comes next?
              </span>
            </div>
          </div>
          <Image
            src="/logo/exos-logo-black.png"
            alt="EXOS Advisory logo"
            width={295}
            height={238}
            className="hidden desktop:block rounded-none absolute top-15 right-15 z-10"
          />
        </div>
      </div>
    </div>
  );
}
