import ContentWrapper from "@/_lib/utils/content-wrapper";
import HeroComponent from "@/_components/pages/home-page/hero/hero-component";
import AboutComponent from "@/_components/pages/home-page/about-component";
import TheHiddenCostComponent from "@/_components/pages/home-page/the-hidden-cost-of-exit/the-hidden-cost-component";
import TheResultComponent from "@/_components/pages/home-page/the-result-component";
import BioComponent from "@/_components/pages/home-page/bio-component";
import ExosComponent from "@/_components/pages/home-page/exos-component";

export default function HomePage() {
  return (
    <div>
      <HeroComponent />
      <AboutComponent />
      <ContentWrapper cssClasses="pt-15 desktop:pt-[100px]">
        <TheHiddenCostComponent />
      </ContentWrapper>
      <TheResultComponent />
      <ContentWrapper>
        <BioComponent />
      </ContentWrapper>
      <ExosComponent />
    </div>
  );
}
