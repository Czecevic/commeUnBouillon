import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// import JSON translations
import fr from "./json/fr.json";
import en from "./json/en.json";
import it from "./json/it.json";
import es from "./json/es.json";
import zh from "./json/zh.json";
import ko from "./json/ko.json";
import ja from "./json/ja.json";
import ru from "./json/ru.json";
import pl from "./json/pl.json";
import pt from "./json/pt.json";
import de from "./json/de.json";

const resources = {
  fr: { translation: fr },
  en: { translation: en },
  it: { translation: it },
  es: { translation: es },
  zh: { translation: zh },
  ko: { translation: ko },
  ja: { translation: ja },
  ru: { translation: ru },
  pl: { translation: pl },
  pt: { translation: pt },
  de: { translation: de },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "fr",
    interpolation: { escapeValue: false },
  });

export default i18n;
