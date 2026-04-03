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
            <p className="font-nudista leading-[0.9] text-charcoal text-[32px] min-[360px]:text-[44px]">
              EXOS
            </p>
          </div>
        </Link>
        <nav className="flex gap-3 items-end">
          {navData.map((item) => (
            <Link
              key={item.title}
              className="text-charcoal font-thin desktop:hover:text-blue"
              href={item.url}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default HeaderDesktop;
