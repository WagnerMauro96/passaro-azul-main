import { Container } from "@/components/layout/Container/Container";
import { useHomeDictionary } from "../../../../../locales/utils/useHomeDictionary";
import { ServiceItem } from "./ServiceItem";
import { ShieldIcon } from "@/assets/icons/shield-icon";
import { QualityIcon } from "@/assets/icons/quality-icon";
import { EventIcon } from "@/assets/icons/event-icon";
import { NetSecurityIcon } from "@/assets/icons/net-security-icon";
import { ConsoltingIcon } from "@/assets/icons/consolting-icon";
import { PatrolIcon } from "@/assets/icons/patrol-icon";
import { SecurityCentral } from "@/assets/icons/security-central";

export function ServicesSection() {
  const { translate } = useHomeDictionary();

  return (
    <Container id="services" className="flex flex-col items-center gap-y-16">
      <div data-aos="fade-up" className="flex flex-col items-center gap-y-6">
        <h2 className="text-3xl lg:text-5xl leading-tight text-center text-secondary font-bold  max-w-3xl">
          {translate("about-us.our-services.title")}
        </h2>

        <p className="max-w-2xl text-gray-600 text-center">
          {translate("about-us.our-services.label")}
        </p>
      </div>

      <div className="shadow-lg grid grid-cols-1 lg:grid-cols-4 gap-8 gap-y-10 p-8">
        <ServiceItem
          title={translate("about-us.our-services.security_services.title")}
          icon={ShieldIcon}
          label={translate("about-us.our-services.security_services.label")}
        />
        <ServiceItem
          title={translate("about-us.our-services.personalized_security.title")}
          icon={QualityIcon}
          label={translate("about-us.our-services.personalized_security.label")}
        />
        <ServiceItem
          title={translate("about-us.our-services.event_security.title")}
          icon={EventIcon}
          label={translate("about-us.our-services.event_security.label")}
        />
        <ServiceItem
          title={translate("about-us.our-services.electronic_security.title")}
          icon={NetSecurityIcon}
          label={translate("about-us.our-services.electronic_security.label")}
        />
        <ServiceItem
          title={translate("about-us.our-services.security_consulting.title")}
          icon={ConsoltingIcon}
          label={translate("about-us.our-services.security_consulting.label")}
        />
        <ServiceItem
          title={translate("about-us.our-services.security_central.title")}
          icon={SecurityCentral}
          label={translate("about-us.our-services.security_central.label")}
        />
        <ServiceItem
          title={translate("about-us.our-services.patrol_services.title")}
          icon={PatrolIcon}
          label={translate("about-us.our-services.patrol_services.label")}
        />
      </div>
    </Container>
  );
}
