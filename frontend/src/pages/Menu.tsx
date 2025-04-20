import React, { useEffect, useState } from "react";
import "../index.css";
import { NavBar } from "../components/navbar";

type Plat = {
  id: number;
  nom: string;
  prix: string;
  image: string;
  category: string;
};

type MenuSectionProps = {
  title: string;
  plats: Plat[];
};

const PlatCard: React.FC<Plat> = ({ nom, prix, image }) => (
  <div className="plat">
    <img src={`/images/${image}`} alt={nom} className="platImage" />
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
      {plats.map((plat) => (
        <PlatCard key={plat.id} {...plat} />
      ))}
    </div>
  </section>
);

export const Menu: React.FC = () => {
  const [platsEntree, setPlatsEntree] = useState<Plat[]>([]);
  const [platsPrincipal, setPlatsPrincipal] = useState<Plat[]>([]);
  const [desserts, setDesserts] = useState<Plat[]>([]);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/menu");
        const data: Plat[] = await response.json();

        // Filtrer les plats par catégorie
        setPlatsEntree(data.filter((plat) => plat.category === "Entrées"));
        setPlatsPrincipal(data.filter((plat) => plat.category === "Plats"));
        setDesserts(data.filter((plat) => plat.category === "Desserts"));
      } catch (error) {
        console.error("Erreur lors de la récupération du menu :", error);
      }
    };

    fetchMenu();
  }, []);

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
