"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";

import navData from "@/_data/nav-data.json";
import { AlignLeft, AlignRight, Menu, X } from "lucide-react";

interface MobileHeaderProps {
  cssClasses?: string;
}

export function HeaderMobile({ cssClasses }: MobileHeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div className={classNames(cssClasses)}>
      <div className="flex w-full items-center justify-between gap-10">
        <Link
          href="/"
          className="hover:opacity-90 flex flex-col gap-3 flex-1 max-w-[241px]"
        >
          <div className="flex gap-2 items-center min-[360px]:block min-[360px]:border-b border-citrine/50 min-[360px]:pb-3">
            <Image
              src="/logo/exos-logo-gradient.png"
              alt="EXOS Logo"
              width={32}
              height={32}
              className="min-[360px]:hidden w-auto h-8"
            />
            <p className="font-nudista leading-[0.9] text-charcoal text-[32px] min-[360px]:text-[44px]">
              EXOS
            </p>
          </div>
          <div className="hidden min-[360px]:flex items-center gap-2">
            <Image
              src="/logo/exos-logo-gradient.png"
              alt="EXOS Logo"
              width={20}
              height={20}
              className="w-auto h-5"
            />
            <p className="text-[18px] font-extralight text-charcoal">
              The Exit Operating System
            </p>
          </div>
        </Link>
        <button
          onClick={() => setIsOpen(true)}
          className="ease-in-out duration-300 -m-3 p-3 desktop:hover:cursor-pointer"
          aria-label="Open menu"
        >
          <AlignRight size={32} color="#1A1B1C" />
        </button>
      </div>

      <div
        className={classNames(
          "fixed inset-0 z-50 transform bg-charcoal/97 transition-transform duration-300 ease-in-out px-5 pt-7 flex flex-col gap-10 min-[360px]:pt-13.5",
          {
            "translate-x-full": !isOpen,
          },
        )}
      >
        <button
          onClick={() => setIsOpen(false)}
          aria-label="Close menu"
          className="p-2 -m-2 self-end"
        >
          <X size={32} color="#FFFFFF" />
        </button>
        <nav>
          <ul className="grid gap-5">
            {navData.map(({ title, url }, id) => {
              return (
                <li key={id}>
                  <Link
                    href={url}
                    onClick={() => setIsOpen(false)}
                    className="text-paragraph text-white font-thin p-3 -m-3"
                  >
                    {title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}
