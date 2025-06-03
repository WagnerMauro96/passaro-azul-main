import Image from "next/image";
import { useHomeDictionary } from "../../../../locales/utils/useHomeDictionary";
import { VisionImage } from "@/assets/common";

export function VisionSection() {
  const { translate } = useHomeDictionary();

  return (
    <section className="w-full bg-primary bg-opacity-10 flex flex-col-reverse lg:grid grid-cols-1 lg:grid-cols-2">
      <div data-aos="fade-right" className="flex items-center justify-center col-span-1 p-10">
        <div className="flex flex-col gap-y-4">
          <h2 className="text-3xl lg:text-5xl leading-tight text-left text-secondary font-bold  max-w-3xl">
            {translate("about-us.vision.title")}
          </h2>

          <p className=" text-gray-600 text-base lg:text-lg">
            {translate("about-us.vision.label")}
          </p>
        </div>
      </div>

      <div className="col-span-1 h-72 lg:h-[32rem]  overflow-hidden">
        <Image
          style={{ objectPosition: "center -10px" }}
          src={VisionImage}
          className="w-full h-full object-cover"
          alt="Mission Image"
        />
      </div>
    </section>
  );
}
