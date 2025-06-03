import Image from "next/image";
import { useHomeDictionary } from "../../../../../locales/utils/useHomeDictionary";
import {
  FifthImage,
  FirstImag,
  FourthImage,
  SeventhImage,
  SixthImage,
  ThirdImage,
} from "@/assets/common";

import { MobileGallery } from "./MobileGallery";

export function GallerySection() {
  const { translate } = useHomeDictionary();

  return (
    <section id="portfolio" className="w-full flex flex-col gap-y-12">
      <div
        data-aos="fade-up"
        className="flex px-4 flex-col items-center gap-y-6"
      >
        <h2 className="text-3xl lg:text-5xl leading-tight text-center text-secondary font-bold  max-w-3xl">
          {translate("portfolio.title")}
        </h2>

        <p className="max-w-2xl text-gray-600 text-center">
          {translate("portfolio.label")}
        </p>
      </div>

      <div className="lg:hidden">
        <MobileGallery />
      </div>

      <div className="w-full hidden lg:block">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2">
          <div className="col-span- grid grid-cols-1 lg:grid-cols-2">
            <div className="col-span-1 h-[25rem] overflow-hidden">
              <Image
                src={FifthImage}
                className="object-cover hover:scale-110 transition-all grayscale hover:grayscale-0 w-full h-full"
                alt="Image"
              />
            </div>

            <div className="col-span-1 h-[25rem] overflow-hidden">
              <Image
                src={FirstImag}
                className="object-cover hover:scale-110 transition-all grayscale hover:grayscale-0 w-full h-full"
                alt="Image"
              />
            </div>
          </div>

          <div className="col-span-1 h-[25rem] overflow-hidden">
            <Image
              style={{ objectPosition: "center -10px" }}
              src={ThirdImage}
              className="object-cover hover:scale-110 transition-all grayscale hover:grayscale-0 w-full h-full"
              alt="Image"
            />
          </div>
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-2">
          <div className="col-span-1 h-[25rem] overflow-hidden">
            <Image
              src={SeventhImage}
              style={{ objectPosition: "center -10px" }}
              className="object-cover hover:scale-110 transition-all grayscale hover:grayscale-0 w-full h-full"
              alt="Image"
            />
          </div>

          <div className="col-span-1 grid grid-cols-1 lg:grid-cols-2">
            <div className="col-span-1 h-[25rem] overflow-hidden">
              <Image
                src={FourthImage}
                className="object-cover hover:scale-110 transition-all grayscale hover:grayscale-0 w-full h-full"
                alt="Image"
              />
            </div>

            <div className="col-span-1 h-[25rem] overflow-hidden">
              <Image
                src={SixthImage}
                className="object-cover hover:scale-110 transition-all grayscale hover:grayscale-0 w-full h-full"
                alt="Image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
