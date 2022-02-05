import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { langres } from "./langres";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(initReactI18next)
  .use(Backend)
  .use(LanguageDetector)
  .init({
    fallbackLng: "en",
    debug: true,
    resources: langres,

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
