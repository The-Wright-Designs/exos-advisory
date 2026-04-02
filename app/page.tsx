import PageWrapper from "@/_lib/utils/page-wrapper";
import HeroComponent from "@/_components/home-page/hero/hero-component";
import AboutComponent from "@/_components/home-page/hero/about-component";

export default function HomePage() {
  return (
    <div>
      <HeroComponent />
      <AboutComponent />
      <PageWrapper>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam dolorem
        magni quia magnam sit rem quod vitae velit omnis ratione distinctio,
        voluptates accusantium ut in, obcaecati alias, maxime provident
        incidunt?
      </PageWrapper>
    </div>
  );
}
