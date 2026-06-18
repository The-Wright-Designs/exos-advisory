"use client";

import { useState } from "react";
import Image from "next/image";
import classNames from "classnames";

import ButtonLink from "@/_components/ui/buttons/button-link";
import SectionHeadingComponent from "../../ui/section-heading-component";

const BIO = [
  "Brett Fleming is a multi-exit entrepreneur who built EXOS after navigating the transition of exit twice himself. He has experienced firsthand the shift from owner to manager, from operator to investor, and the unexpected loss of identity, structure and clarity that can follow a liquidity event.",
  "After his own exits, Brett made the mistake many entrepreneurs make: committing capital to a new venture before fully processing the transition. It was not a failure of intelligence, but of timing and perspective. That experience, combined with years of reflection and research into post-exit outcomes, shaped the foundation of EXOS.",
  "He understands that exit is not an endpoint, but a shift in context. What follows is a period where decisions carry greater consequence, and the order in which they are made matters. EXOS is built on this insight, helping entrepreneurs approach the transition with clarity, sequence decisions with intent, and align capital with a more considered second chapter.",
  "What he had initially understood as personal became recognisable as shared.",
  "This perspective was reinforced through deeper exploration of the research. Studies from institutions like Harvard, Yale, and UBS consistently point to the same underlying dynamic: The questions around identity, the search for renewed purpose, and the sense of disorientation were not isolated events, but recurring phases observed across entrepreneurs in transition. Importantly, these experiences were not indicators of failure, but part of a broader, and largely unsupported, shift that follows liquidity.",
  "EXOS was built in response to that gap, combining lived experience with evidence-based insight to guide entrepreneurs through this next phase. It brings clarity to what follows, supports more deliberate decision-making, and ensures that capital, time, and identity are aligned with a more considered second chapter.",
];

const BioComponent = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section
      className="border-t border-charcoal/50 pt-15 mt-15 flex flex-col gap-10 -scroll-mt-5 tablet:border-none tablet:mt-0 tablet:pt-[100px] desktop:scroll-mt-10"
      id="brett-fleming"
    >
      <SectionHeadingComponent cssClasses="[&_h2]:flex [&_h2]:flex-col [&_h2]:gap-2">
        Brett Fleming
        <span className="text-[26px] font-light text-charcoal">
          built EXOS after living the founder exit (twice)
        </span>
      </SectionHeadingComponent>

      <div className="flex flex-col gap-10 tablet:flex-row tablet:items-start tablet:gap-10">
        <div className="relative w-full aspect-square tablet:h-[400px] desktop:w-[247px] desktop:h-[268px] desktop:shrink-0">
          <Image
            src="/images/home-page/brett-fleming-exos.jpg"
            alt="Brett Fleming"
            fill
            sizes="(max-width: 800px) 100vw, (max-width: 1280px) 400px, 247px"
            className="object-cover rounded-md"
          />
        </div>

        <div className="flex flex-col gap-5 desktop:flex-1">
          <div
            className={classNames(
              "relative overflow-hidden flex flex-col gap-4",
              {
                "max-h-[320px] desktop:max-h-[230px]": !expanded,
              },
            )}
          >
            <p>{BIO[0]}</p>
            <p>{BIO[1]}</p>
            <p>{BIO[2]}</p>
            <p>{BIO[3]}</p>
            <p>{BIO[4]}</p>
            <p>{BIO[5]}</p>
            {!expanded && (
              <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-lustre to-transparent pointer-events-none" />
            )}
          </div>
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-[#0000EE] text-paragraph font-light self-start desktop:hover:cursor-pointer"
          >
            {expanded ? "Read less -" : "Read more +"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default BioComponent;
