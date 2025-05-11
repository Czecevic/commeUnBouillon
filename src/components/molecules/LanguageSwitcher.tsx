import React from "react";
import { useTranslation } from "react-i18next";

export const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="languageSwitcher">
      <button onClick={() => changeLanguage("fr")}>🇫🇷</button>
      <button onClick={() => changeLanguage("en")}>🇬🇧</button>
      <button onClick={() => changeLanguage("es")}>🇪🇸</button>
    </div>
  );
};
