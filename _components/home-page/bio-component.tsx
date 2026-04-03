"use client";

import { useState } from "react";
import Image from "next/image";
import classNames from "classnames";

import ButtonLink from "@/_components/ui/buttons/button-link";
import SectionHeadingComponent from "../ui/section-heading-component";

const BIO = [
  "I am a multi-exit entrepreneur and founder who built EXOS after navigating the transition of exit twice myself.",
  "I have experienced firsthand the shift from owner to manager, from operator to investor and the unexpected loss of identity, structure and clarity that can follow a liquidity event.",
  "After my own exits, I made the mistake many founders make: committing capital to a new venture before fully processing the transition. It was not a failure of intelligence, but of timing and perspective. That experience, combined with years of reflection and research into post-exit outcomes, shaped the foundation of EXOS.",
  "I understand that exit is not an endpoint, but a shift in context. What follows is a period where decisions carry greater consequence, and the order in which they are made matters. EXOS is built on this insight, helping founders approach the transition with clarity, sequence decisions with intent, and align capital with a more considered second chapter.",
  "What I had initially understood as personal became recognisable as shared.",
  "This perspective was reinforced through deeper exploration of the research. Studies from institutions like Harvard, Yale, and Columbia consistently point to the same underlying dynamic: The questions around identity, the search for renewed purpose, and the sense of disorientation were not isolated events, but recurring phases observed across founders in transition. Importantly, these experiences were not indicators of failure, but part of a broader, and largely unsupported, shift that follows liquidity.",
  "EXOS was built in response to that gap, combining lived experience with evidence-based insight to guide founders through this next phase. It brings clarity to what follows, supports more deliberate decision-making, and ensures that capital, time, and identity are aligned with a more considered second chapter.",
];

const BioComponent = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="border-t border-charcoal/50 pt-15 mt-15 flex flex-col gap-10 tablet:border-none tablet:mt-0 tablet:pt-[100px]">
      <SectionHeadingComponent cssClasses="[&_h2]:flex [&_h2]:flex-col [&_h2]:gap-2">
        Brett Fleming
        <span className="text-[26px] font-light text-charcoal">
          built EXOS after living the founder exit (twice)
        </span>
      </SectionHeadingComponent>

      <div className="grid gap-10 tablet:grid-cols-[400px_1fr] min-[900px]:grid-cols-[400px_1fr] min-[1000px]:grid-cols-[350px_1fr] desktop:grid-cols-2">
        <div className="flex flex-col gap-10">
          <div className="relative w-full aspect-square tablet:aspect-auto tablet:h-full desktop:aspect-square">
            <Image
              src="/images/home-page/brett-fleming-exos"
              alt="Brett Fleming"
              fill
              className="object-cover"
            />
          </div>
          <div className="hidden desktop:flex flex-col gap-5 items-start">
            <p className="text-[32px] font-extralight text-charcoal w-full">
              EXOS was built so founders do not have to navigate that transition
              alone.
            </p>
            <ButtonLink
              href="#contact-form"
              background="charcoal"
              border="citrine"
              ariaLabel="Book a Discovery Meeting"
            >
              Book a Discovery Meeting
            </ButtonLink>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div
            className={classNames(
              "relative overflow-hidden flex flex-col gap-4",
              {
                "max-h-[320px] tablet:max-h-none": !expanded,
              },
            )}
          >
            <p>{BIO[0]}</p>
            <p>{BIO[1]}</p>
            <p>{BIO[2]}</p>
            <p className="tablet:hidden min-[900px]:block">{BIO[3]}</p>
            <p className="tablet:hidden min-[1000px]:block">{BIO[4]}</p>
            <p className="tablet:hidden desktop:block">{BIO[5]}</p>
            <p className="tablet:hidden desktop:block">{BIO[6]}</p>
            {!expanded && (
              <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-lustre to-transparent pointer-events-none tablet:hidden" />
            )}
          </div>
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-[#0000EE] text-paragraph font-light self-start tablet:hidden"
          >
            {expanded ? "Read less -" : "Read more +"}
          </button>
        </div>
      </div>
      <div className="hidden tablet:flex flex-col gap-4 -mt-5 desktop:hidden">
        <p className="min-[900px]:hidden">{BIO[3]}</p>
        <p className="min-[1000px]:hidden">{BIO[4]}</p>
        <p>{BIO[5]}</p>
        <p>{BIO[6]}</p>
      </div>

      <div className="border-y-[3px] border-citrine py-10 flex flex-col gap-5 items-center desktop:hidden">
        <p className="text-[26px] font-normal text-charcoal w-full tablet:text-center">
          EXOS was built so founders do not have to navigate that transition
          alone.
        </p>
        <ButtonLink
          href="#contact-form"
          background="charcoal"
          border="citrine"
          ariaLabel="Book a Discovery Meeting"
          cssClasses="w-full tablet:w-auto"
        >
          Book a Discovery Meeting
        </ButtonLink>
      </div>

      <div className="relative w-full h-[340px] tablet:hidden">
        <Image
          src="/images/home-page/46689bad6df6e5c1b9cffee8ff5499522c6e8f99.jpg"
          alt="EXOS"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default BioComponent;
