import { Container } from "@/components/layout/Container/Container";
import { useHomeDictionary } from "../../../../../locales/utils/useHomeDictionary";
import Image from "next/image";
import { InitialImage } from "@/assets/common";
import { UsersIcon } from "@/assets/icons/users-icon";
import { ShieldIcon } from "@/assets/icons/shield-icon";

export function AboutUsSection() {
  const { translate } = useHomeDictionary();

  return (
    <Container
      id="about-us"
      className="flex flex-col items-center gap-y-8 lg:gap-y-16"
    >
      <h2
        data-aos="fade-up"
        className="text-3xl lg:text-5xl leading-tight text-center text-secondary font-bold  max-w-3xl"
      >
        {translate("about-us.title")}
      </h2>

      <div className="w-full gap-x-20 flex-col-reverse gap-y-10 lg:flex-row flex items-center">
        <div data-aos="fade-right" className="flex-1 rounded-tl-[4rem] rounded-br-[4rem] overflow-hidden hidden lg:flex h-[28rem]">
          <Image
            src={InitialImage}
            alt="Banner Image"
            className="w-full h-full object-cover"
          />
        </div>

        <div  data-aos="fade-left"className="flex flex-col max-w-xl gap-y-4">
          <h4 className="text-xl text-center lg:text-left lg:text-3xl font-bold text-primary">
            {translate("about-us.span")}
          </h4>

          <p className=" text-gray-600">{translate("about-us.label")}</p>

          <div className="flex items-center gap-x-3">
            <div className="w-6 h-6 items-center justify-center flex flex-none">
              {UsersIcon}
            </div>

            <p className=" text-gray-600">
              {translate("about-us.spans.span-1")}
            </p>
          </div>

          <div className="flex items-center gap-x-3 ">
            <div className="w-6 h-6 items-center justify-center flex flex-none">
              {ShieldIcon}
            </div>

            <p className="text-gray-600 ">
              {translate("about-us.spans.span-2")}
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
