import React, { createContext, useContext, useState, ReactNode } from "react";
import { en } from "../locales/en";
import { ko } from "../locales/ko";

export type Language = "en" | "ko";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

const locales = {
  en,
  ko,
};

const getNestedValue = (obj: any, path: string): string => {
  return path.split(".").reduce((current, key) => current?.[key], obj) || path;
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

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
