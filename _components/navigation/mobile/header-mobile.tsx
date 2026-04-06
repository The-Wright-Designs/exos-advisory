"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";

import navData from "@/_data/nav-data.json";
import { AlignRight, X } from "lucide-react";

interface MobileHeaderProps {
  cssClasses?: string;
}

export function HeaderMobile({ cssClasses }: MobileHeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      setOpenIndex(null);
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div className={classNames(cssClasses)}>
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
            className="min-[360px]:hidden w-auto h-8 rounded-none"
          />
          <h1 className="font-nudista leading-[0.9] text-charcoal text-[32px] min-[360px]:text-[44px]">
            EXOS
          </h1>
        </div>
        <div className="hidden min-[360px]:flex items-center gap-2">
          <Image
            src="/logo/exos-logo-gradient.png"
            alt="EXOS Logo"
            width={20}
            height={20}
            className="w-auto h-5 rounded-none"
          />
          <h2 className="text-[18px] font-extralight text-charcoal">
            The Exit Operating System
          </h2>
        </div>
      </Link>

      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bg-lustre/95 top-14 right-4 z-40 ease-in-out duration-300 -m-3 -mr-4 p-3 pr-4 rounded-l-md desktop:hover:cursor-pointer"
          aria-label="Open menu"
        >
          <AlignRight size={32} color="#1A1B1C" />
        </button>
      )}

      <div
        className={classNames(
          "fixed inset-0 z-50 transform bg-charcoal/97 transition-transform duration-300 ease-in-out px-7 pt-7 flex flex-col gap-7 min-[360px]:pt-16 min-[360px]:gap-5",
          {
            "translate-x-full": !isOpen,
          },
        )}
      >
        <button
          onClick={() => setIsOpen(false)}
          aria-label="Close menu"
          className="p-2 -m-2 self-end -translate-y-2"
        >
          <X size={32} color="#FFFFFF" />
        </button>
        <nav>
          <ul className="grid">
            {navData.map(({ title, url, submenu }, id) => {
              return (
                <li
                  key={id}
                  className={classNames("py-3", {
                    "border-b border-white": id !== navData.length - 1,
                  })}
                >
                  {submenu ? (
                    <>
                      <button
                        className="text-paragraph text-white font-thin w-full flex justify-between items-center desktop:hover:cursor-pointer"
                        onClick={() =>
                          setOpenIndex(openIndex === id ? null : id)
                        }
                      >
                        {title}
                        <span className="text-white">
                          {openIndex === id ? "−" : "+"}
                        </span>
                      </button>
                      <ul
                        className={classNames(
                          "flex flex-col gap-1 pl-4 overflow-hidden transition-all delay-75 duration-300 ease-in-out",
                          openIndex === id ? "max-h-[500px] mt-2" : "max-h-0",
                        )}
                      >
                        {submenu.map((item, i) => (
                          <li key={i}>
                            <Link
                              href={item.url}
                              className="text-[1rem] text-white font-thin block py-1"
                              onClick={() => setIsOpen(false)}
                            >
                              {item.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link
                      href={url}
                      onClick={() => setIsOpen(false)}
                      className="text-paragraph text-white font-thin py-0.5 block"
                    >
                      {title}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}
