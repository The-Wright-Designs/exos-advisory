import ButtonLink from "@/_components/ui/buttons/button-link";
import LossOfComponent from "./loss-of-component";
import Image from "next/image";
import classNames from "classnames";

interface TheLinkBetweenComponentProps {
  cssClasses?: string;
}

const TheLinkBetweenComponent = ({
  cssClasses,
}: TheLinkBetweenComponentProps) => {
  return (
    <section
      className={classNames(
        "grid gap-15 desktop:grid-cols-2 desktop:gap-10",
        cssClasses,
      )}
    >
      <div className="grid gap-10 desktop:col-start-2">
        <div className="aspect-square relative tablet:h-[500px] min-[900px]:h-[580px] tablet:aspect-auto desktop:h-auto">
          <Image
            src="/images/home-page/6a67108f3174d8156d40662dc9bc96c91be76997.jpg"
            alt="Exos"
            fill
            className="object-cover"
          />
        </div>
        <div className="hidden desktop:block aspect-video relative desktop:aspect-auto">
          <Image
            src="/images/home-page/05c1a91bd7859dc855fe59a1d1d8d193906a1659.jpg"
            alt="Exos"
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col gap-5 desktop:col-span-2 desktop:order-first">
        <h4 className="text-[26px] leading-[1.25]">
          The link between transition and wealth loss
        </h4>
        <div className="flex flex-col gap-5">
          <p>
            There is a direct and well-documented{" "}
            <strong className="font-bold">link</strong> between post-exit wealth
            loss and the{" "}
            <strong className="font-bold">failure to process</strong> the{" "}
            <strong className="font-bold">emotional</strong>,{" "}
            <strong className="font-bold">identity</strong>, and{" "}
            <strong className="font-bold">structural challenges</strong> of the
            transition.
          </p>
          <p>
            Exited entrepreneurs often experience a breakdown of their personal
            compass:
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-10 desktop:row-start-2">
        <LossOfComponent />
        <ButtonLink href="/about" background="citrine" border="charcoal">
          What is EXOS?
        </ButtonLink>
      </div>
      <div className="aspect-video relative tablet:aspect-auto tablet:h-[500px] min-[900px]:h-[580px] desktop:hidden">
        <Image
          src="/images/home-page/05c1a91bd7859dc855fe59a1d1d8d193906a1659.jpg"
          alt="Exos"
          fill
          className="object-cover tablet:object-right desktop:object-center"
        />
      </div>
    </section>
  );
};

export default TheLinkBetweenComponent;
