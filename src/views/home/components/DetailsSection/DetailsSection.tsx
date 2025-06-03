import { Container } from "@/components/layout/Container/Container";
import { DetailsSectionCard } from "./DetailsSectionCard";
import { useHomeDictionary } from "../../../../../locales/utils/useHomeDictionary";

export function DetailsSection() {
  const { translate } = useHomeDictionary();
  return (
    <Container className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <DetailsSectionCard
        active
        delay={100}
        title={translate("details.card-1.title")}
        label={translate("details.card-1.label")}
      />

      <DetailsSectionCard
        delay={200}
        title={translate("details.card-2.title")}
        label={translate("details.card-2.label")}
      />

      <DetailsSectionCard
        delay={300}
        title={translate("details.card-3.title")}
        label={translate("details.card-3.label")}
      />
    </Container>
  );
}
