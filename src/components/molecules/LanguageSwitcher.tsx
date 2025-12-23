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
      <option value="fr">🇫🇷 Français</option>
      <option value="en">🇬🇧 English</option>
      <option value="es">🇪🇸 Español</option>
      <option value="zh">🇨🇳 中文</option>
      <option value="ko">🇰🇷 한국어</option>
      <option value="ja">🇯🇵 日本語</option>
    </select>
  );
};
