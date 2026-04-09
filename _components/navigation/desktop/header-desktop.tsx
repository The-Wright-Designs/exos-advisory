import Link from "next/link";
import Image from "next/image";
import navData from "@/_data/nav-data.json";
import classNames from "classnames";

interface DesktopHeaderProps {
  cssClasses?: string;
}

const HeaderDesktop = ({ cssClasses }: DesktopHeaderProps) => {
  return (
    <div className={classNames(cssClasses)}>
      <div className="flex justify-between">
        <Link href="/" className="hover:opacity-90">
          <div className="flex gap-3 items-center">
            <Image
              src="/logo/exos-logo-gradient.png"
              alt="EXOS Logo"
              width={40}
              height={40}
              className="w-auto h-10 rounded-none"
            />
            <h1 className="font-nudista leading-[0.9] text-charcoal text-[32px] min-[360px]:text-[44px]">
              EXOS
            </h1>
          </div>
        </Link>
        <nav className="flex gap-3 items-end">
          <ul className="flex gap-3 items-end">
            {navData.map((item) => (
              <li key={item.title} className="relative group">
                <Link
                  className={classNames(
                    item.title === "Book A Discovery Call"
                      ? "bg-citrine border-[3px] border-citrine p-1.5 rounded-md text-white font-extralight tablet:hover:bg-transparent tablet:hover:text-charcoal ease-in-out duration-500"
                      : "text-charcoal font-thin tablet:hover:opacity-90 ease-in-out duration-300",
                  )}
                  href={item.url}
                >
                  {item.title}
                </Link>
                {"submenu" in item && item.submenu && (
                  <ul className="absolute top-13 -left-[62px] min-w-max bg-lustre border-x border-b border-charcoal/25 rounded-b-md shadow-md p-3 flex flex-col gap-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-200 delay-75">
                    <div className="w-[80px] h-7 bg-lustre absolute -top-7 left-10" />
                    {item.submenu.map((sub) => (
                      <li
                        key={sub.title}
                        className="border-b border-charcoal/25 pb-2 last:pb-0 last:border-0 "
                      >
                        <Link
                          href={sub.url}
                          className="block text-[14px] font-thin text-charcoal text-center tablet:hover:opacity-90 ease-in-out duration-300"
                        >
                          {sub.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default HeaderDesktop;
