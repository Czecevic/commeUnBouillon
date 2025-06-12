import React from "react";
import { useTranslation } from "react-i18next";

export const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  return (
    <select
      value={i18n.language}
      onChange={(e) => i18n.changeLanguage(e.target.value)}
      className="language-select"
      aria-label="Select language"
    >
      <option value="fr">🇫🇷</option>
      <option value="en">🇬🇧</option>
      <option value="es">🇪🇸</option>
    </select>
  );
};
