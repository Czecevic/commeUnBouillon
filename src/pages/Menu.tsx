import React, { useState } from "react";
import "../index.css";
import { NavBar } from "../components/organisms/NavBar";
import { MenuSection } from "../components/molecules/MenuSection";
import { LanguageSwitcher } from "../components/molecules/LanguageSwitcher";
import { useTranslation } from "react-i18next";

export const Menu: React.FC = () => {
  const { t } = useTranslation();
  const [selected, setSelected] = useState<"entrees" | "plats" | "desserts">(
    "entrees"
  );

  return (
    <div className="page">
      <header>
        <LanguageSwitcher />
      </header>
      <div className="menu">
        <h1>{t("menu.selectionTitle")}</h1>

        <div
          className={`menu-buttons${
            selected !== "entrees" ? " with-border" : ""
          }`}
          style={{
            display: "flex",
            justifyContent: "space-around",
            margin: "1rem",
          }}
        >
          <button
            onClick={() => setSelected("entrees")}
            className={selected === "entrees" ? "active" : ""}
          >
            {t("menu.entreesTitle")}
          </button>
          <button
            onClick={() => setSelected("plats")}
            className={selected === "plats" ? "active" : ""}
          >
            {t("menu.platsTitle")}
          </button>
          <button
            onClick={() => setSelected("desserts")}
            className={selected === "desserts" ? "active" : ""}
          >
            {t("menu.dessertsTitle")}
          </button>
        </div>
        <div className="menu-line">
          <div
            className="line-indicator"
            style={{
              left:
                selected === "entrees"
                  ? "0%"
                  : selected === "plats"
                  ? "33.33%"
                  : "66.66%",
            }}
          />
        </div>

        {selected === "entrees" && <MenuSection category="entrees" />}
        {selected === "plats" && <MenuSection category="plats" />}
        {selected === "desserts" && <MenuSection category="desserts" />}
      </div>
      <NavBar />
    </div>
  );
};
