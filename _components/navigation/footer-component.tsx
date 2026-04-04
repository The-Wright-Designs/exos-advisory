import Link from "next/link";
import Image from "next/image";

import navData from "@/_data/nav-data.json";
import classNames from "classnames";

const FooterComponent = () => {
  return (
    <footer className="bg-lustre w-full mt-20 border-t-2 border-charcoal/50 desktop:border-t">
      <div className="px-5 py-10 grid gap-5 items-center desktop:max-w-[1280px] desktop:mx-auto desktop:pt-15 desktop:pb-7 desktop:grid-cols-2 desktop:px-15">
        <ul className="hidden desktop:flex flex-col">
          {navData.map(({ title, url }, index) => (
            <li className={classNames("items-start", index !== 0 && "-mt-1")}>
              <Link
                key={index}
                href={url}
                className="text-charcoal text-[14px] font-extralight hover:opacity-80 ease-in-out duration-300"
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-5 items-center desktop:items-end desktop:gap-3">
          <div className="flex gap-3 items-center">
            <h5 className="font-nudista text-[50px] text-charcoal font-semibold">
              EXOS
            </h5>
            <Image
              src="/logo/exos-logo-gradient.png"
              alt="EXOS logo"
              width={54}
              height={44}
              className="rounded-none"
            />
          </div>
          <p className="text-[16px] flex flex-col text-center font-thin desktop:text-right desktop:text-[14px]">
            Designed &amp; developed by
            <Link
              href="https://thewrightdesigns.co.za"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link-blue text-[16px] desktop:hover:opacity-80 ease-in-out duration-300 desktop:text-[14px]"
            >
              The Wright Designs
            </Link>
          </p>
        </div>
        <hr className="w-[154px] place-self-center border-charcoal/50 desktop:hidden" />
        <div className="flex flex-col items-center desktop:flex-row desktop:gap-1 desktop:col-span-2 desktop:justify-center">
          <p className="text-charcoal text-center text-[16px] font-thin desktop:text-[14px]">
            © EXOS Advisory {new Date().getFullYear()}
          </p>
          <span className="hidden desktop:block">|</span>
          <Link
            href="https://exos.global"
            className="text-link-blue text-center text-[16px] font-thin desktop:hover:opacity-80 ease-in-out duration-300 desktop:text-[14px]"
          >
            exos.global
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
