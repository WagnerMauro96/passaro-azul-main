import { AboutUsSection } from "./components/AboutUs/AboutUsSection";
import { ContactSection } from "./components/ContactSection/ContactSection";
import { DetailsSection } from "./components/DetailsSection/DetailsSection";
import { GallerySection } from "./components/GallerySection/GallerySection";
import { MapSection } from "./components/MapSection";
import { MissionSection } from "./components/MissionSection";
import { OurClients } from "./components/OurClients/OurClients";
import { ServicesSection } from "./components/ServicesSection/ServicesSection";
import { ValuesSection } from "./components/ValuesSection/ValuesSection";
import { VisionSection } from "./components/VisionSection";
import dynamic from "next/dynamic";

const HomeHero = dynamic(
  () => import("./components/HomeHero").then((component) => component.HomeHero),
  { ssr: false }
);

export function HomeView() {
  return (
    <>
      <HomeHero />
      <div className="w-full flex flex-col gap-y-16 lg:gap-y-[130px] mt-12 lg:mt-[100px] mb-40">
        <DetailsSection />
        <AboutUsSection />
        <div>
          <MissionSection />
          <VisionSection />
        </div>
        <ValuesSection />
        <GallerySection />
        <ServicesSection />
        <OurClients />
        <MapSection />
        <ContactSection />
      </div>
    </>
  );
}
