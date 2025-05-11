import React from "react";
import { useTranslation } from "react-i18next";

interface MenuSectionProps {
  titleKey: string;
  category: string;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  titleKey,
  category,
}) => {
  const { t } = useTranslation();

  // Get the menu items from the translation file
  const plats = t(`menu.${category}`, { returnObjects: true }) as Array<{
    nom: string;
    prix: string;
    image: string;
  }>;

  return (
    <div className="menu-section">
      <h2>{t(titleKey)}</h2>
      <ul>
        {plats.map((plat, index) => (
          <li key={index} className="menu-item">
            <img src={plat.image} alt={plat.nom} className="menu-item-image" />
            <div className="menu-item-details">
              <h3>{plat.nom}</h3>
              <p>{plat.prix}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
