const WhatsNextComponent = () => {
  return (
    <section className="bg-mist">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-5 py-15 w-full px-7 mt-15 tablet:px-10 desktop:mt-[100px] min-[1360px]:px-15">
        <div className="flex flex-col gap-10 items-start pb-4 border-b border-charcoal/25 w-full desktop:flex-row desktop:gap-10">
          <p className="text-[32px]">
            Every entrepreneur asks the same question after an exit:
          </p>
          <h4 className="uppercase leading-[100%] font-semibold text-[60px] min-[375px]:text-[84px] desktop:text-[112px] desktop:shrink-0">
            What&apos;s next?
          </h4>
        </div>
        <p>
          <span className="font-bold">
            EXOS is the framework that answers it
          </span>
          , helping you decide how your skills and abilities are put to work in
          the next chapter, so capital follows clarity.
        </p>
      </div>
    </section>
  );
};

export default WhatsNextComponent;
