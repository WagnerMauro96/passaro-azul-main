import { Container } from "@/components/layout/Container/Container";
import { useHomeDictionary } from "../../../../locales/utils/useHomeDictionary";
import { LocationIcon } from "@/assets/icons/location-icon";
import { EmailIcon } from "@/assets/icons/email-icon";
import { PhoneIcon } from "@/assets/icons/phone-icon";

export function MapSection() {
  const { translate } = useHomeDictionary();

  return (
    <div id="contact-area" className="w-full flex flex-col gap-y-12">
      <Container data-aos="fade-right" className="flex flex-col gap-y-4">
        <h4 className="text-secondary font-bold text-3xl lg:+text-5xl">
          {translate("map.title")}
        </h4>

        {/* <p className="text-gray-600 max-w-3xl">{translate("map.label")}</p> */}
      </Container>

      <Container data-aos="fade-up">
        <div className="w-full p-4 py-8 lg:p-8 shadow-xl bg-primary rounded-2xl gap-y-6 flex flex-col items-start">
          <div className="flex items-center gap-x-2">
            <div className="w-4 flex [&>svg_*]:stroke-secondary">
              {LocationIcon}
            </div>
            <span className="text-secondary text-sm lg:text-base font-medium">
              Rua Santa Luzia, Samba, Luanda - Angola
            </span>
          </div>

          <div className="flex w-full items-center gap-x-2">
            <div className="w-4 flex [&>svg_*]:stroke-secondary">
              {EmailIcon}
            </div>
            <span className="text-secondary text-sm lg:text-base max-w-xs text-wrap font-medium">
              passaroazulseguranca@gmail.com
            </span>
          </div>

          <div className="flex items-center gap-x-2">
            <div className="w-4 flex [&>svg_*]:stroke-secondary">
              {PhoneIcon}
            </div>
            <span className="text- font-medium text-sm lg:text-base">+244 931 907 888</span>
          </div>
        </div>
      </Container>
    </div>
  );
}
