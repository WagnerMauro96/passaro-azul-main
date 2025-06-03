import Image from "next/image";
import { useHomeDictionary } from "../../../../locales/utils/useHomeDictionary";
import { MissionImage } from "@/assets/common";

export function MissionSection() {
  const { translate } = useHomeDictionary();

  return (
    <section className="w-full bg-primary bg-opacity-10 grid grid-cols-1 lg:grid-cols-2">
      <div className="col-span-1 h-72 lg:h-[32rem]  overflow-hidden relative">
        <Image
          style={{ objectPosition: "center top" }}
          src={MissionImage}
          className="w-full h-full object-cover"
          alt="Mission Image"
          layout="fill" // Garantindo que a imagem ocupe todo o espaço do container
        />
      </div>

      <div data-aos="fade-left" className="flex items-center justify-center col-span-1 p-10">
        <div className="flex flex-col gap-y-4">
          <h2 className="text-3xl lg:text-5xl leading-tight text-left text-secondary font-bold  max-w-3xl">
            {translate("about-us.mission.title")}
          </h2>

          <p className="text-gray-600 text-base lg:text-lg">
            {translate("about-us.mission.label")}
          </p>
        </div>
      </div>
    </section>
  );
}
