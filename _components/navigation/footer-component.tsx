import Link from "next/link";
import Image from "next/image";

const FooterComponent = () => {
  return (
    <footer className="bg-lustre border-t-2 border-charcoal/50 w-full mt-20">
      <div className="px-5 py-10 flex flex-col gap-5 items-center desktop:max-w-[1280px] desktop:mx-auto desktop:px-[60px]">
        <div className="flex gap-3 items-center">
          <p className="font-nudista text-[50px] text-charcoal">EXOS</p>
          <Image
            src="/logo/exos-logo-gradient.png"
            alt="EXOS logo"
            width={72}
            height={58}
            className="rounded-none"
          />
        </div>
        <p className="text-[16px] flex flex-col gap-1 text-center font-thin">
          Designed &amp; developed by
          <Link
            href="https://thewrightdesigns.co.za"
            target="_blank"
            rel="noopener noreferrer"
            className="text-link-blue text-[16px] desktop:hover:opacity-80 ease-in-out duration-300"
          >
            The Wright Designs
          </Link>
        </p>
        <hr className="w-[154px] border-charcoal/50" />
        <div className="flex flex-col items-center">
          <p className="text-charcoal text-center text-[16px] font-thin">
            © EXOS Advisory {new Date().getFullYear()}
          </p>
          <Link
            href="https://exos.global"
            className="text-link-blue text-center text-[16px] font-thin"
          >
            exos.global
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
