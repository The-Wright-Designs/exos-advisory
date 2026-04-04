import Image from "next/image";

const TheProcessComponent = () => {
  return (
    <div className="grid gap-3 min-[375px]:grid-cols-[28px_1fr]">
      <div className="min-[375px]:w-[28px] min-[375px]:h-[205px relative">
        <h4 className="text-heading font-normal text-[28px] uppercase min-[375px]:-rotate-90 min-[375px]:whitespace-nowrap min-[375px]:absolute min-[375px]:-left-23 min-[375px]:bottom-[87px] tablet:text-white">
          The Process:
        </h4>
      </div>
      <div className="flex flex-col pt-10 gap-5 w-[244px] border-t-[3px] border-slate min-[375px]:pt-0 min-[375px]:w-[279px] min-[375px]:pl-10 min-[375px]:border-l-[3px] min-[375px]:border-t-0">
        <div className="relative">
          <p className="tablet:text-white">Recognition</p>
          <Image
            src="/graphics/about-page/arrow-1.svg"
            alt="Arrow graphic"
            width={32}
            height={32}
            className="absolute size-7.5 top-7 left-7"
          />
        </div>
        <div className="relative">
          <p className="place-self-center tablet:text-white">Normalisation</p>
          <Image
            src="/graphics/about-page/arrow-2.svg"
            alt="Arrow graphic"
            width={32}
            height={32}
            className="absolute size-7.5 top-2.5 right-7"
          />
        </div>
        <div className="relative">
          <p className="place-self-end tablet:text-white">Authority</p>
          <Image
            src="/graphics/about-page/arrow-3.svg"
            alt="Arrow graphic"
            width={32}
            height={32}
            className="absolute size-11 top-1 right-19"
          />
        </div>
        <div className="relative">
          <p className="place-self-center tablet:text-white">Solution</p>
          <Image
            src="/graphics/about-page/arrow-4.svg"
            alt="Arrow graphic"
            width={32}
            height={32}
            className="absolute size-13 top-4 left-15"
          />
        </div>
        <div className="relative">
          <p className="tablet:text-white">Action</p>
        </div>
      </div>
    </div>
  );
};

export default TheProcessComponent;
