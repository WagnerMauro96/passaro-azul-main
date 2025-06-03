import { ExtractRecursiveKeys } from "./messages";
import useTranslations from "next-translate/useTranslation";
import home from "../pt/home.json";

export type TranslationKeyPath = ExtractRecursiveKeys<typeof home>;


export function useHomeDictionary() {
  const { t: translation } = useTranslations("home");

  const translate = (
    path: TranslationKeyPath,
    props?: Record<string, string>
  ) => translation(path, props);

  return { translate };
}
