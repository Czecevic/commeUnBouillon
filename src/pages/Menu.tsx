import React from "react";
import "../index.css";
import { NavBar } from "../components/organisms/NavBar";
import { MenuSection } from "../components/molecules/MenuSection";
import { LanguageSwitcher } from "../components/molecules/LanguageSwitcher";
import { useTranslation } from "react-i18next";

export const Menu: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div>
      <header>
        <LanguageSwitcher />
      </header>
      <div className="menu">
        <h1>{t("menu.selectionTitle")}</h1>

        {/* Section Entrées */}
        <MenuSection titleKey="menu.entreesTitle" category="entrees" />

        {/* Section Plats Principaux */}
        <MenuSection titleKey="menu.platsTitle" category="plats" />

        {/* Section Desserts */}
        <MenuSection titleKey="menu.dessertsTitle" category="desserts" />
      </div>
      <NavBar />
    </div>
  );
};
