import oeufMayo from "../assets/oeuf-mayonnaise.jpg";
import poireaux from "../assets/poireaux.png";
import terrine from "../assets/terrine.avif";
import poisson from "../assets/poisson.avif";
import saucisson from "../assets/saucisson sec.webp";
import camembert from "../assets/camembert.webp";
import soupe from "../assets/soupe.webp";
import meurette from "../assets/meurette.webp";
import tradition from "../assets/tradition.avif";
import bouillon from "../assets/bouillon.avif";
import saucissePlat from "../assets/saucisse.avif";
import saumon from "../assets/saumon.webp";
import hampe from "../assets/hampe.webp";
import steak from "../assets/steak haché.avif";
import poulet from "../assets/poulet.webp";
import carbonade from "../assets/carbonade.webp";
import chocolat from "../assets/chocolat.webp";
import crumble from "../assets/crumble.webp";
import caramel from "../assets/caramel.webp";
import ileFlo from "../assets/ileFlo.webp";

import "../index.css";
import { NavBar } from "../components/navbar";

type Plat = {
  nom: string;
  prix: string;
  image: string;
};

type MenuSectionProps = {
  title: string;
  plats: Plat[];
};

const platsEntree: Plat[] = [
  { nom: "Oeuf dur mayonnaise", prix: "3,10 €", image: oeufMayo },
  { nom: "Poireaux vinaigrette", prix: "3,60 €", image: poireaux },
  { nom: "Carottes râpées vinaigrette", prix: "2,90 €", image: poireaux },
  { nom: "Rillettes de poisson", prix: "4,40 €", image: poisson },
  { nom: "Terrine de campagne", prix: "4,20 €", image: terrine },
  { nom: "Saucisson sec", prix: "3,70 €", image: saucisson },
  { nom: "Camembert pané au miel", prix: "4,90 €", image: camembert },
  { nom: "Oeuf en meurette", prix: "5,90 €", image: meurette },
  { nom: "Soupe à l’oignon", prix: "5,10 €", image: soupe },
];

const platsPrincipal: Plat[] = [
  { nom: "Escalope de saumon, sauce poireaux", prix: "13,40 €", image: saumon },
  {
    nom: "Le tradition (tartare), frites & salade",
    prix: "11,40 €",
    image: tradition,
  },
  {
    nom: "Le Bouillon (tartare + tomme + poivrons)",
    prix: "11,90 €",
    image: bouillon,
  },
  {
    nom: "Saucisse au couteau, purée, sauce oignons",
    prix: "10,90 €",
    image: saucissePlat,
  },
  { nom: "Hampe de bœuf, sauce bleu, frites", prix: "11,90 €", image: hampe },
  { nom: "Sauté de porc aux épices", prix: "12,90 €", image: hampe },
  { nom: "Parmentier de canard, salade", prix: "13,90 €", image: hampe },
  { nom: "Steak mayo curry, frites", prix: "10,90 €", image: steak },
  { nom: "Poulet, crème de maïs, purée", prix: "11,90 €", image: poulet },
  { nom: "Carbonade flamande, frites", prix: "12,90 €", image: carbonade },
  {
    nom: "Coquillettes et crumble de légumes",
    prix: "11,90 €",
    image: carbonade,
  },
];

const desserts: Plat[] = [
  { nom: "Pot de crème au chocolat", prix: "3,90 €", image: chocolat },
  { nom: "Crumble aux pommes", prix: "3,90 €", image: crumble },
  { nom: "Île flottante", prix: "4,30 €", image: ileFlo },
  { nom: "Crème caramel", prix: "3,90 €", image: caramel },
  { nom: "Verrine marron/pain d'épices/café", prix: "4,90 €", image: caramel },
  { nom: "Assiette de Brie de Meaux", prix: "4,10 €", image: caramel },
];

const MenuSection: React.FC<MenuSectionProps> = ({ title, plats }) => (
  <section className="menu-section">
    <h2>{title}</h2>
    <div className="plat-list">
      {plats.map((plat, index) => (
        <div key={index} className="plat">
          <img src={plat.image} alt={plat.nom} className="platImage" />
          <div className="platText">
            <h3>{plat.nom}</h3>
            <p>{plat.prix}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

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
