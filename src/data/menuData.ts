import oeufMayo from "../assets/images/oeuf_mayo.jpg";
import poireaux from "../assets/images/poireaux.jpg";
import terrine from "../assets/images/terrine.jpg";
import carottes from "../assets/images/carottes.jpg";
import oeufPoche from "../assets/images/oeuf_poche.jpg";
// import crevette from "../assets/images/crevette.jpg";
// import poisson from "../assets/images`";
// import saucisson from "../assets/images/Saucisse.jpg";
import fromage from "../assets/images/fromage.webp";
import tommeDeSavoie from "../assets/images/tomme_de_savoie.jpg";
import camembert from "../assets/images/camembert.jpg";
import soupe from "../assets/images/soupe.jpg";
import tradition from "../assets/images/tradition.jpg";
import bouillon from "../assets/images/Bouillon.jpg";
import saucissePlat from "../assets/images/Saucisse.jpg";
import saumon from "../assets/images/Saumon.jpg";
import hampe from "../assets/images/Hampe_bœuf.jpg";
import steak from "../assets/images/steak.jpg";
import poulet from "../assets/images/poulet.jpg";
import carbonade from "../assets/images/carbonade.jpg";
import chocolat from "../assets/images/choco.jpg";
// import crumble from "../assets/images";
import caramel from "../assets/images/crème_brulée.jpg";
import ileFlo from "../assets/images/ileFlo.jpg";
import aubergine from "../assets/images/aubergine.jpg";
import verrine from "../assets/images/verrine.jpg";
import rilletteDeSaumon from "../assets/images/rillette_de_saumon.jpg";
import SaucissonSecMaison from "../assets/images/SaucissonSecMaison.jpg";
import mousseFoieVolaille from "../assets/images/mousse_foie_volaille.jpg";

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
  { nom: "Rillettes de saumon", prix: "4,60 €", image: rilletteDeSaumon },
  { nom: "Terrine de campagne", prix: "4,20 €", image: terrine },
  { nom: "Saucisson sec", prix: "4,20 €", image: SaucissonSecMaison },
  // { nom: "Chorizo grillé", prix: "3,90 €", image: SaucissonSecMaison },
  { nom: "Quart de camembert pané au miel", prix: "4,90 €", image: camembert },
  { nom: "Œuf poché, crème de Maroilles AOP", prix: "4,90 €", image: oeufPoche },
  { nom: "Mousse de foie de volaille", prix: "4,10 €", image: mousseFoieVolaille },
  { nom: "Soupe à l’oignon", prix: "5,10 €", image: soupe },
  
];

export const platsPrincipal: Plat[] = [
  { nom: "Escalope de saumon, crème au chorizo, riz", prix: "13,40 €", image: saumon },
  {
    nom: "Le tradition (tartare), frites & salade",
    prix: "11,60 €",
    image: tradition,
  },
  {
    nom: "Le Bouillon (tartare + tomme + poivrons)",
    prix: "12,10 €",
    image: bouillon,
  },
  {
    nom: "Saucisse au couteau, sauce au Maroilles AOP, purée ",
    prix: "10,90 €",
    image: saucissePlat,
  },
  {
    nom: "Hampe de bœuf, sauce blue d'Auvergne AOP, frites",
    prix: "11,90 €",
    image: hampe,
  },
  { nom: "blanquette de veau, riz", prix: "14,10 €", image: hampe },
  { nom: "Andouillette pur porc, sauce moutarde, frites", prix: "11,90 €", image: hampe },
  {
    nom: "Steak haché, sauce au poivre vert, frites",
    prix: "10,90 €",
    image: steak,
  },
  {
    nom: "Suprême de poulet à l'estragon, sauce moutarde, purée",
    prix: "12,90 €",
    image: carbonade,
  },
  {
    nom: "Carbonade flamande, frites",
    prix: "12,90 €",
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
  { nom: "Crumble aux pommes", prix: "3,90 €", image: chocolat },
  { nom: "Île flottante", prix: "4,30 €", image: ileFlo },
  { nom: "Crème brûlée", prix: "4,10 €", image: caramel },
  {
    nom: "Verrine marron, pain d'épice, café",
    prix: "4,90 €",
    image: verrine,
  },
  {
    nom: "AOP Brie de Meaux",
    prix: "4,10 €",
    image: fromage,
  },
  {
    nom: "IGP Tomme de Savoie",
    prix: "3,90 €",
    image: tommeDeSavoie,
  },
  
];
