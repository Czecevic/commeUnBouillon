import React, { useEffect, useState } from "react";
import "../index.css";
import { NavBar } from "../components/organisms/NavBar";
import { Plat } from "../../interfaces";
import { MenuSection } from "../components/molecules/MenuSection";

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
