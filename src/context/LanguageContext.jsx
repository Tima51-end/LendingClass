import { createContext, useContext } from "react";
import { translations } from "../data/translations";

const LanguageContext = createContext();

const useTranslation = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  const t = (key) => translations[language][key] || key;
  return { t, language, setLanguage };
};

export { LanguageContext, useTranslation };
