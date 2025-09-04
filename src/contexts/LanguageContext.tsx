import React, { createContext, useState } from "react";
import type { ReactNode } from "react";
import { en } from "@/locales/en";
import { ko } from "@/locales/ko";

export type Language = "en" | "ko";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export { LanguageContext };
export type { LanguageContextType };

const locales = {
  en,
  ko,
};

const getNestedValue = (obj: Record<string, unknown>, path: string): string => {
  const keys = path.split(".");
  let result: unknown = obj;

  for (const key of keys) {
    if (result && typeof result === "object" && key in result) {
      result = (result as Record<string, unknown>)[key];
    } else {
      return path;
    }
  }

  return typeof result === "string" ? result : path;
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>("ko");

  const t = (key: string): string => {
    const locale = locales[language];
    return getNestedValue(locale, key);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
