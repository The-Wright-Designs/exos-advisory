import ButtonLink from "@/_components/ui/buttons/button-link";
import LossOfComponent from "./loss-of-component";
import Image from "next/image";

const TheLinkBetweenComponent = () => {
  return (
    <section className="flex flex-col gap-10">
      <div className="flex flex-col gap-5">
        <p className="text-[26px] leading-[1.25]">
          The link between transition and wealth loss
        </p>
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
      <LossOfComponent />
      <ButtonLink background="citrine" border="charcoal">
        Whats is EXOS?
      </ButtonLink>
      <div className="aspect-video relative">
        <Image
          src="/images/home-page/05c1a91bd7859dc855fe59a1d1d8d193906a1659.jpg"
          alt="Exos"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default TheLinkBetweenComponent;
