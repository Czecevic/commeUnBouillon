import oeufMayo from "/images/oeuf-mayonnaise.jpg";
import poireaux from "/images/poireaux.png";
import terrine from "/images/terrine.avif";
import poisson from "/images/poisson.avif";
import saucisson from "/images/saucisson sec.webp?url";
import camembert from "/images/camembert.webp?url";
import soupe from "/images/soupe.webp?url";
import meurette from "/images/meurette.webp?url";
import tradition from "/images/tradition.avif";
import bouillon from "/images/bouillon.avif";
import saucissePlat from "/images/saucisse.avif";
import saumon from "/images/saumon.webp?url";
import hampe from "/images/hampe.webp?url";
import steak from "/images/steak haché.avif";
import poulet from "/images/poulet.webp?url";
import carbonade from "/images/carbonade.webp?url";
import chocolat from "/images/chocolat.webp?url";
import crumble from "/images/crumble.webp?url";
import caramel from "/images/caramel.webp?url";
import ileFlo from "/images/ileFlo.webp?url";

export type Plat = {
  nom: string;
  prix: string;
  image: string;
};

export const platsEntree: Plat[] = [
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

export const desserts: Plat[] = [
  { nom: "Pot de crème au chocolat", prix: "3,90 €", image: chocolat },
  { nom: "Crumble aux pommes", prix: "3,90 €", image: crumble },
  { nom: "Île flottante", prix: "4,30 €", image: ileFlo },
  { nom: "Crème caramel", prix: "3,90 €", image: caramel },
  { nom: "Verrine marron/pain d'épices/café", prix: "4,90 €", image: caramel },
  { nom: "Assiette de Brie de Meaux", prix: "4,10 €", image: caramel },
];
