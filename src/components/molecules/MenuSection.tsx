import React from "react";
import { useTranslation } from "react-i18next";

interface MenuSectionProps {
  category: string;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ category }) => {
  const { t } = useTranslation();

  // Get the menu items from the translation file
  const plats = t(`menu.${category}`, { returnObjects: true }) as Array<{
    nom: string;
    prix: string;
    image: string;
  }>;
  console.log(plats)

  return (
    <div className="menu-section">
      <ul>
        {plats.map((plat, index) => (
          <li key={index} className="menu-item">
            <img
              loading="lazy"
              src={plat.image}
              alt={plat.nom}
              className="menu-item-image"
            />
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
