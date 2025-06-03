import { Container } from "@/components/layout/Container/Container";
import { useHomeDictionary } from "../../../../../locales/utils/useHomeDictionary";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import {
  ayueLogo,
  casaNovaLogo,
  clinicaPovoasLogo,
  dilogLogo,
  elnorLogo,
  vivaLuandaLogo,
  maingais
} from "@/assets/common/clients";

export function OurClients() {
  const { translate } = useHomeDictionary();

  return (
    <Container className="flex flex-col gap-y-12">
      <div data-aos="fade-up" className="flex flex-col items-center gap-y-6">
        <h2 className="text-3xl lg:text-5xl leading-tight text-center text-secondary font-bold  max-w-3xl">
          {translate("our-clients.title")}
        </h2>

        <p className="max-w-2xl text-gray-600 text-center">
          {translate("our-clients.label")}
        </p>
      </div>

      <Marquee loop={100}>
        <Image src={dilogLogo} alt="Dilog Angola" className="w-40 ml-20" />
        <Image src={vivaLuandaLogo} alt="Viva Luanda" className="w-40 ml-20" />
        <Image
          src={casaNovaLogo}
          alt="Casa Nova Angola"
          className="w-80 ml-20"
        />
        <Image
          src={clinicaPovoasLogo}
          alt="Clinica Povoas"
          className="w-40 ml-20"
        />
        <Image src={ayueLogo} alt="Ayuê" className="w-40 ml-20" />
        <Image src={elnorLogo} alt="Elnor Pharma" className="w-40 ml-20" />
        <Image src={maingais} alt="Golf resort mangais" className="w-40 ml-20" />
      </Marquee>
    </Container>
  );
}
