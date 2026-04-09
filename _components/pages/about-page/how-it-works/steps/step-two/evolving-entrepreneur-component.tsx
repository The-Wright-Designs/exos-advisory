"use client";

import classNames from "classnames";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

interface EvolvingEntrepreneurComponentProps {
  cssClasses?: string;
}

const nodes = [
  {
    label: "Mentor",
    description:
      "3. Developmental focus — Reintroduces constructive challenge through lived reality through experience-sharing",
    color: "#b7b269",
    pulseSpeed: "3.2s",
    closedPosition: "top-5",
    openPosition: "top-0",
    wrapperClasses: "flex items-start justify-center",
  },
  {
    label: "Identity",
    description:
      "4. Support for mental health, Help with processing identity, legacy, loss, and emotional weight.",
    color: "#99493e",
    pulseSpeed: "2.7s",
    closedPosition: "left-5",
    openPosition: "left-0",
    wrapperClasses: "flex items-center justify-start",
  },
  {
    label: "Financial",
    description: "2. Wealth preservation and growth: Financial strategy.",
    color: "#562428",
    pulseSpeed: "3.6s",
    closedPosition: "right-5",
    openPosition: "right-0",
    wrapperClasses: "flex items-center justify-end",
  },
  {
    label: "Structure & Purpose",
    description:
      "1. Personal and professional planning, values, purpose, structure",
    color: "#2c4b2d",
    pulseSpeed: "2.9s",
    closedPosition: "bottom-5",
    openPosition: "bottom-0",
    wrapperClasses: "flex items-end justify-center",
  },
];

const gridOrder: (number | "center" | null)[] = [
  null,
  0,
  null,
  1,
  "center",
  2,
  null,
  3,
  null,
];

const EvolvingEntrepreneurComponent = ({
  cssClasses,
}: EvolvingEntrepreneurComponentProps) => {
  const [openNodeIndex, setOpenNodeIndex] = useState<number | null>(null);
  const [zElevatedIndex, setZElevatedIndex] = useState<number | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        openNodeIndex !== null &&
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setOpenNodeIndex(null);
        setTimeout(() => setZElevatedIndex(null), 500);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [openNodeIndex]);

  const handleClick = (index: number) => {
    if (openNodeIndex === index) {
      setOpenNodeIndex(null);
      setTimeout(() => setZElevatedIndex(null), 500);
    } else {
      setOpenNodeIndex(index);
      setZElevatedIndex(index);
    }
  };

  return (
    <div ref={wrapperRef} className={classNames("relative", cssClasses)}>
      <Image
        src="/graphics/about-page/8907f2ce0df650b1978b8f747eab9bcbac35f248.png"
        alt="Evolving entrepreneur graphic"
        width={344}
        height={344}
        className="object-contain"
      />
      <div className="absolute inset-0 grid grid-rows-3 grid-cols-3 p-[6%]">
        {gridOrder.map((cell, i) => {
          if (cell === null) return <div key={i} />;

          if (cell === "center") {
            return (
              <div key={i} className="flex items-center justify-center">
                <div className="bg-[#562428] rounded-full size-[72px] flex items-center justify-center">
                  <h4 className="text-[10px] font-medium text-white text-center">
                    Evolving entrepreneur
                  </h4>
                </div>
              </div>
            );
          }

          const nodeIndex = cell as number;
          const node = nodes[nodeIndex];
          const isOpen = openNodeIndex === nodeIndex;
          const isElevated = zElevatedIndex === nodeIndex;

          return (
            <div key={i} className={node.wrapperClasses}>
              <div
                className={classNames(
                  "absolute rounded-full flex flex-col items-center justify-center ease-in-out duration-500 tablet:hover:cursor-pointer",
                  isOpen
                    ? `size-[344px] ${node.openPosition} gap-2 p-10`
                    : `size-[72px] ${node.closedPosition}`,
                  isElevated ? "z-10" : "",
                  !isOpen && "tablet:hover:opacity-90",
                )}
                style={{
                  backgroundColor: node.color,
                  animation: isOpen
                    ? "none"
                    : `pulse-scale ${node.pulseSpeed} ease-in-out infinite`,
                }}
                onClick={() => handleClick(nodeIndex)}
              >
                <h4
                  className={classNames(
                    "text-center ease-in-out duration-150 delay-150",
                    isOpen
                      ? "text-white text-subheading"
                      : "text-[10px] font-medium text-white",
                  )}
                >
                  {node.label}
                </h4>
                <p
                  className={classNames(
                    "font-normal text-white text-center ease-in-out overflow-hidden",
                    isOpen
                      ? "max-h-40 scale-y-100 delay-200 duration-300"
                      : "max-h-0 scale-y-0 duration-75",
                    "origin-top",
                  )}
                >
                  {node.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <p className="absolute top-[3px] left-1/2 -translate-x-1/2 text-[11px] text-white">
        Community
      </p>
      <p className="absolute bottom-[3px] left-1/2 -translate-x-1/2 text-[11px] text-white">
        Community
      </p>
    </div>
  );
};

export default EvolvingEntrepreneurComponent;
