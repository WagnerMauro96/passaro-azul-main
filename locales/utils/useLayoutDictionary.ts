import { ExtractRecursiveKeys } from "./messages";
import useTranslations from "next-translate/useTranslation";
import home from "../pt/layout.json";

export type TranslationKeyPath = ExtractRecursiveKeys<typeof home>;


export function useLayoutDictionary() {
  const { t: translation } = useTranslations("layout");

  const translate = (
    path: TranslationKeyPath,
    props?: Record<string, string>
  ) => translation(path, props);

  return { translate };
}
