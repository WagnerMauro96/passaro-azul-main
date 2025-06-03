import { Container } from "@/components/layout/Container/Container";
import { useHomeDictionary } from "../../../../../locales/utils/useHomeDictionary";
import { HandShakeIcon } from "@/assets/icons/hand-shake-icon";
import { TrainingIcon } from "@/assets/icons/training-icon";
import { ValueItem } from "./ValueItem";
import { CareIcon } from "@/assets/icons/care-icon";
import { QualityIcon } from "@/assets/icons/quality-icon";
import { OperationalIcon } from "@/assets/icons/operattional-icon";

export function ValuesSection() {
  const { translate } = useHomeDictionary();

  return (
    <Container className="flex flex-col items-center gap-y-16">
      <div data-aos="fade-up" className="flex flex-col items-center gap-y-6">
        <h2 className="text-3xl lg:text-5xl leading-tight text-center text-secondary font-bold  max-w-3xl">
          {translate("about-us.our-values.title")}
        </h2>

        <p className="max-w-2xl text-gray-600 text-center">
          {translate("about-us.our-values.label")}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <ValueItem
          delay={100}
          icon={HandShakeIcon}
          label={translate("about-us.our-values.values.trust.label")}
          title={translate("about-us.our-values.values.trust.title")}
        />

        <ValueItem
          delay={200}
          icon={TrainingIcon}
          label={translate(
            "about-us.our-values.values.continuous_training.label"
          )}
          title={translate(
            "about-us.our-values.values.continuous_training.title"
          )}
        />

        <ValueItem
          delay={300}
          icon={CareIcon}
          label={translate("about-us.our-values.values.human_value.label")}
          title={translate("about-us.our-values.values.human_value.title")}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-10">
        <ValueItem
          delay={400}
          icon={QualityIcon}
          label={translate(
            "about-us.our-values.values.excellent_service.label"
          )}
          title={translate(
            "about-us.our-values.values.excellent_service.title"
          )}
        />

        <ValueItem
          delay={500}
          icon={OperationalIcon}
          label={translate(
            "about-us.our-values.values.operational_competence.label"
          )}
          title={translate(
            "about-us.our-values.values.operational_competence.title"
          )}
        />
      </div>
    </Container>
  );
}
