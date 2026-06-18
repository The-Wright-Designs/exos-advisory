import ContentWrapper from "@/_lib/utils/content-wrapper";
import HeroComponent from "@/_components/pages/home-page/hero-component";
import AboutComponent from "@/_components/pages/home-page/about-component";
import TheHiddenCostComponent from "@/_components/pages/home-page/the-hidden-cost-of-exit/the-hidden-cost-component";
import TheResultComponent from "@/_components/pages/home-page/the-result-component";
import BioComponent from "@/_components/pages/home-page/bio-component";
import ExosComponent from "@/_components/pages/home-page/exos-component";
import TestimonialsComponent from "@/_components/pages/home-page/testimonials-component";
import TheSolutionComponent from "@/_components/pages/home-page/the-solution-component";
import WhatsNextComponent from "@/_components/pages/home-page/whats-next-component";

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
        <TheSolutionComponent />
      </ContentWrapper>
      <WhatsNextComponent />
      <ContentWrapper>
        <BioComponent />
      </ContentWrapper>
      <ContentWrapper>
        <TestimonialsComponent />
      </ContentWrapper>
      <ExosComponent />
    </div>
  );
}
