import oeufMayo from "../assets/images/oeuf_mayo.jpg";
import poireaux from "../assets/images/poireaux.jpg";
import terrine from "../assets/images/terrine.jpg";
import carottes from "../assets/images/carottes.jpg";
import oeufPoche from "../assets/images/oeuf_poche.jpg";
import crevette from "../assets/images/crevette.jpg";
// import poisson from "../assets/images`";
// import saucisson from "../assets/images/Saucisse.jpg";
import camembert from "../assets/images/camembert.jpg";
import soupe from "../assets/images/soupe.jpg";
import tradition from "../assets/images/tradition.jpg";
import bouillon from "../assets/images/Bouillon.jpg";
import saucissePlat from "../assets/images/Saucisse.jpg";
import saumon from "../assets/images/Saumon.jpg";
import hampe from "../assets/images/Hampe_bœuf.jpg";
import steak from "../assets/images/steak.jpg";
import poulet from "../assets/images/poulet.jpg";
// import carbonade from "../assets/images/c";
import chocolat from "../assets/images/choco.jpg";
// import crumble from "../assets/images";
import caramel from "../assets/images/crème_brulée.jpg";
import ileFlo from "../assets/images/ileFlo.jpg";
import aubergine from "../assets/images/aubergine.jpg";
import verrine from "../assets/images/verrine.jpg";

export type Plat = {
  id?: number;
  nom: string;
  prix: string;
  image: string;
  category?: string;
};

export const platsEntree: Plat[] = [
  { nom: "Oeuf dur mayonnaise", prix: "3,10 €", image: oeufMayo },
  { nom: "Poireaux vinaigrette", prix: "3,60 €", image: poireaux },
  { nom: "Carottes râpées vinaigrette", prix: "2,90 €", image: carottes },
  { nom: "Terrine de campagne", prix: "4,20 €", image: terrine },
  { nom: "Camembert pané au miel", prix: "4,90 €", image: camembert },
  { nom: "Soupe à l’oignon", prix: "5,10 €", image: soupe },
  { nom: "Œuf poché, crème &chorizo", prix: "4,90 €", image: oeufPoche },
  { nom: "Crevettes mayonnaise", prix: "5,90 €", image: crevette },
];

export const platsPrincipal: Plat[] = [
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
  {
    nom: "Hampe de bœuf, sauce chimichurri, frites",
    prix: "11,90 €",
    image: hampe,
  },
  { nom: "Sauté de porc aux épices", prix: "12,90 €", image: hampe },
  { nom: "Parmentier de canard, salade", prix: "13,90 €", image: hampe },
  {
    nom: "Steak haché, sauce au poivre vert, frites",
    prix: "10,90 €",
    image: steak,
  },
  {
    nom: "Suprême de poulet au citron, frites",
    prix: "11,90 €",
    image: poulet,
  },
  {
    nom: "Demi aubergine rôtie [sauce tomate, fromage râpé, chimichurri], riz",
    prix: "11,90 €",
    image: aubergine,
  },
];

export const desserts: Plat[] = [
  { nom: "Pot de crème au chocolat", prix: "3,90 €", image: chocolat },
  { nom: "Île flottante", prix: "4,30 €", image: ileFlo },
  { nom: "Crème brûlée", prix: "3,90 €", image: caramel },
  {
    nom: "Verrine à la crème [Fraises fraîches]",
    prix: "4,90 €",
    image: verrine,
  },
];
