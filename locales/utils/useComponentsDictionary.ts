import { ExtractRecursiveKeys } from "./messages";
import useTranslations from "next-translate/useTranslation";
import components from "../pt/components.json";

export type TranslationKeyPath = ExtractRecursiveKeys<typeof components>;

export function useComponentsDictionary() {
  const { t: translation } = useTranslations("components");

  const translate = (
    path: TranslationKeyPath,
    props?: Record<string, string>
  ) => translation(path, props);

  return { translate };
}
