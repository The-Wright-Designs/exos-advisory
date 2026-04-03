"use client";

import classNames from "classnames";
import { useState, useEffect, useRef } from "react";

interface Props {
  percentage: string;
  children: React.ReactNode;
  percentagePositionRight?: boolean;
  cssClasses?: string;
  orangeBackground?: boolean;
  charcoalBackground?: boolean;
  mistBackground?: boolean;
}

export default function InfoCardComponent({
  percentage,
  children,
  percentagePositionRight,
  cssClasses,
  orangeBackground,
  charcoalBackground,
  mistBackground,
}: Props) {
  const target = parseInt(percentage, 10);
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const duration = 1750;
        const startTime = performance.now();

        const tick = (now: number) => {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          setCount(Math.floor(progress * target));
          if (progress < 1) requestAnimationFrame(tick);
        };

        requestAnimationFrame(tick);
      },
      { threshold: 1 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div
      ref={ref}
      className={classNames(
        "grid place-items-center gap-3 p-5 rounded-[6px] border-2 overflow-hidden",
        {
          "grid-cols-[101.75px_1fr]": percentagePositionRight,
          "grid-cols-[1fr_101.75px]": !percentagePositionRight,
          "bg-citrine border-charcoal/50": orangeBackground,
          "bg-charcoal border-citrine/85": charcoalBackground,
          "bg-mist border-charcoal/50": mistBackground,
        },
        cssClasses,
      )}
    >
      <p
        className={classNames(
          "flex-1 text-[16px] min-[388px]:text-paragraph font-extralight leading-[1.25]",
          {
            "order-last": percentagePositionRight,
            "text-right": percentagePositionRight,
            "text-left": !percentagePositionRight,
            "text-white": orangeBackground || charcoalBackground,
            "text-charcoal": mistBackground,
          },
        )}
      >
        {children}
      </p>
      <div
        className={classNames("flex w-full items-start self-stretch pt-1", {
          "border-r-2 pr-3": percentagePositionRight,
          "border-l-2 pl-3": !percentagePositionRight,
          "border-white": orangeBackground,
          "border-citrine/85": charcoalBackground,
          "border-charcoal": mistBackground,
        })}
      >
        <p
          className={classNames(
            "text-[32px] min-[388px]:text-[40px] font-bold whitespace-nowrap leading-none",
            {
              "text-white": orangeBackground || charcoalBackground,
              "text-charcoal": mistBackground,
            },
          )}
        >
          {count}%
        </p>
      </div>
    </div>
  );
}
