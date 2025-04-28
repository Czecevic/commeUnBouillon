import React from "react";
import {
  platsEntree,
  platsPrincipal,
  desserts,
  Plat,
} from "../../data/menuData";

interface MenuSectionProps {
  title: string;
  plats: Plat[];
}

export const MenuSection: React.FC<MenuSectionProps> = ({ title, plats }) => {
  return (
    <div className="menu-section">
      <h2>{title}</h2>
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

export const MenuSelection: React.FC = () => {
  return (
    <div>
      <h1>Notre Sélection de Plats</h1>

      <MenuSection title="Entrées" plats={platsEntree} />
      <MenuSection title="Plats Principaux" plats={platsPrincipal} />
      <MenuSection title="Desserts" plats={desserts} />
    </div>
  );
};
