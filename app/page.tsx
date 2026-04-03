import PageWrapper from "@/_lib/utils/page-wrapper";
import HeroComponent from "@/_components/home-page/hero/hero-component";
import AboutComponent from "@/_components/home-page/about-component";
import TheHiddenCostComponent from "@/_components/home-page/the-hidden-cost-of-exit/the-hidden-cost-component";
import TheResultComponent from "@/_components/home-page/the-result-component";
import BioComponent from "@/_components/home-page/bio-component";

export default function HomePage() {
  return (
    <div>
      <HeroComponent />
      <AboutComponent />
      <PageWrapper cssClasses="pt-15 desktop:pt-[100px]">
        <TheHiddenCostComponent />
      </PageWrapper>
      <TheResultComponent />
      <PageWrapper>
        <BioComponent />
      </PageWrapper>
    </div>
  );
}
