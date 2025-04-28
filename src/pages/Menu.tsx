import React from "react";
import "../index.css";
import { NavBar } from "../components/organisms/NavBar";
import { MenuSection } from "../components/molecules/MenuSection";
import { platsEntree, platsPrincipal, desserts } from "../data/menuData";

export const Menu: React.FC = () => {
  return (
    <div>
      <div className="menu">
        <h1 className="titre">Notre Carte</h1>
        <MenuSection title="Entrées" plats={platsEntree} />
        <MenuSection title="Plats" plats={platsPrincipal} />
        <MenuSection title="Desserts" plats={desserts} />
      </div>
      <NavBar />
    </div>
  );
};
