"use client";

import classNames from "classnames";
import Image from "next/image";
import { useState, useRef, useCallback } from "react";

interface EvolvingEntrepreneurComponentProps {
  cssClasses?: string;
}

const nodes = [
  {
    label: "Mentor",
    description:
      "3. Developmental focus — Reintroducing constructive challenge and lived perspective from those who have navigated this transition",
    color: "#b7b269",
    pulseSpeed: "3.2s",
    closedPosition: "top-5",
    openPosition: "top-0",
    wrapperClasses: "flex items-start justify-center",
  },
  {
    label: "Identity",
    description:
      "4. Support for mental health, help with processing identity, legacy, loss, and emotional weight.",
    color: "#99493e",
    pulseSpeed: "2.7s",
    closedPosition: "left-5",
    openPosition: "left-0",
    wrapperClasses: "flex items-center justify-start",
  },
  {
    label: "Financial",
    description:
      "2. Wealth preservation, capital strategy, and alignment between financial decisions and personal direction",
    color: "#562428",
    pulseSpeed: "3.6s",
    closedPosition: "right-5",
    openPosition: "right-0",
    wrapperClasses: "flex items-center justify-end",
  },
  {
    label: "Structure & Purpose",
    description:
      "1. Rebuilding the operational framework for daily life, decision-making, values, and purpose",
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
  const zTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isTouchRef = useRef(false);

  const openNode = useCallback((index: number) => {
    if (zTimeoutRef.current) {
      clearTimeout(zTimeoutRef.current);
      zTimeoutRef.current = null;
    }
    setOpenNodeIndex(index);
    setZElevatedIndex(index);
  }, []);

  const closeNode = useCallback(() => {
    setOpenNodeIndex(null);
    zTimeoutRef.current = setTimeout(() => {
      setZElevatedIndex(null);
      zTimeoutRef.current = null;
    }, 500);
  }, []);

  const handleMouseEnter = useCallback(
    (index: number) => {
      if (isTouchRef.current) return;
      openNode(index);
    },
    [openNode],
  );

  const handleMouseLeave = useCallback(() => {
    if (isTouchRef.current) return;
    closeNode();
  }, [closeNode]);

  const handleTouchStart = useCallback(
    (index: number) => {
      isTouchRef.current = true;
      if (openNodeIndex === index) {
        closeNode();
      } else {
        openNode(index);
      }
    },
    [openNodeIndex, openNode, closeNode],
  );

  return (
    <div className={classNames("relative", cssClasses)}>
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
                  isElevated && "z-10",
                  !isOpen && "tablet:hover:opacity-70",
                )}
                style={{
                  backgroundColor: node.color,
                  animation: isOpen
                    ? "none"
                    : `pulse-scale ${node.pulseSpeed} ease-in-out infinite`,
                }}
                onMouseEnter={() => handleMouseEnter(nodeIndex)}
                onMouseLeave={handleMouseLeave}
                onTouchStart={() => handleTouchStart(nodeIndex)}
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
