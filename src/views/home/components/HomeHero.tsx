import { bannerImage } from "@/assets/common";
import { Container } from "@/components/layout/Container/Container";
import Image from "next/image";
import { useHomeDictionary } from "../../../../locales/utils/useHomeDictionary";
import { Button } from "@/components/shared/button/Button";

export function HomeHero() {
  const { translate } = useHomeDictionary();

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div id="banner" className="w-full h-[90vh] relative overflow-hidden">
      <div className="w-full h-full absolute top-0 left-0">
        <Image
          src={bannerImage}
          priority
          style={{
            objectPosition: "center center",
          }}
          className="w-full h-full object-cover"
          alt="Banner Image"
        />

        <div className="w-full bg-[#00000040] h-full absolute top-0 left-0" />
      </div>

      <Container className="relative z-10 flex h-full  items-center justify-center">
        <div
          data-aos="fade-up"
          className="flex flex-col items gap-y-6 items-center"
        >
          <h1 className="text-3xl lg:text-5xl leading-tight text-center text-white font-bold  max-w-3xl">
            {translate("banner.title")}
          </h1>

          <p className="text-white text-center text-base lg:text-lg  max-w-2xl">
            {translate("banner.label")}
          </p>

          <div className="flex items-center gap-x-4">
            <Button
              label={translate("banner.button")}
              className="border border-primary"
              onClick={() => scrollToSection("about-us")}
            />
            <Button
              onClick={() => scrollToSection("contact-area")}
              label={translate("banner.cntact-us")}
              className="border border-white text-white bg-transparent"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
