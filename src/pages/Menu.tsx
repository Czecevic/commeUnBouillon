import React from "react";
import { platsEntree, platsPrincipal, desserts, Plat } from "../data/menuData";
import "../index.css";
import { NavBar } from "../components/navbar";

type MenuSectionProps = {
  title: string;
  plats: Plat[];
};

const PlatCard: React.FC<Plat> = ({ nom, prix, image }) => (
  <div className="plat">
    <img src={image} alt={nom} className="platImage" />
    <div className="platText">
      <h3>{nom}</h3>
      <p>{prix}</p>
    </div>
  </div>
);

const MenuSection: React.FC<MenuSectionProps> = ({ title, plats }) => (
  <section className="menu-section">
    <h2>{title}</h2>
    <div className="plat-list">
      {plats.map((plat, index) => (
        <PlatCard key={index} {...plat} />
      ))}
    </div>
  </section>
);

export const Menu: React.FC = () => (
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
