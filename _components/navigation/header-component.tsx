import HeaderDesktop from "./desktop/header-desktop";
import { HeaderMobile } from "./mobile/header-mobile";

const HeaderComponent = () => {
  return (
    <header className="top-0 desktop:sticky z-20 bg-lustre border-b border-charcoal/25 shadow-sm pt-7 pb-5 px-7 desktop:py-7">
      <HeaderDesktop cssClasses="hidden desktop:block max-w-[1280px] mx-auto desktop:px-15" />
      <HeaderMobile cssClasses="desktop:hidden" />
    </header>
  );
};

export default HeaderComponent;
