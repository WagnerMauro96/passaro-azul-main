import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { translateIcon } from "@/assets/common";
import { useLayoutDictionary } from "../../../../locales/utils/useLayoutDictionary";

export function LanguageTrigger() {
  const router = useRouter();
  const { locale, asPath } = router;
  const [isOpen, setIsOpen] = useState(false);
  const { translate } = useLayoutDictionary();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleLocaleChange = (newLocale: string) => {
    router.push(asPath, asPath, { locale: newLocale });
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-5 h-5 flex items-center justify-center"
        aria-label="Language Selector"
      >
        <Image src={translateIcon} alt="Translate Icon" />
      </button>

      {isOpen && (
        <div className="bg-white shadow-lg border p-2 rounded-lg absolute top-8 right-0">
          <button
            onClick={() => handleLocaleChange("en")}
            className={`w-full px-10 py-2 rounded-md text-sm hover:bg-gray-100 transition-all ${
              locale === "en" ? "font-bold text-secondary" : ""
            }`}
          >
            {translate("languages.en")}
          </button>
          <button
            onClick={() => handleLocaleChange("pt")}
            className={`w-full px-10 py-2 rounded-md text-sm hover:bg-gray-100 transition-all ${
              locale === "pt" ? "font-bold text-secondary" : ""
            }`}
          >
            {translate("languages.pt")}
          </button>
          <button
            onClick={() => handleLocaleChange("fr")}
            className={`w-full px-10 py-2 rounded-md text-sm hover:bg-gray-100 transition-all ${
              locale === "fr" ? "font-bold text-secondary" : ""
            }`}
          >
            {translate("languages.fr")}
          </button>
        </div>
      )}
    </div>
  );
}
