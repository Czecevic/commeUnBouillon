import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import oeufMayo from "/images/oeuf-mayonnaise.jpg";
import poireaux from "../src/assets/images/poireaux.jpg";
import terrine from "../src/assets/images/terrine.jpg";
import carottes from "../src/assets/images/carotte.jpg";
import oeufPoche from "../src/assets/images/oeuf_poche.jpg";
import crevette from "../src/assets/images/crevettes.jpg";
// import poisson from "../src/assets/images`";
// import saucisson from "../src/assets/images/Saucisse.jpg";
import camembert from "../src/assets/images/camembert.jpg";
import soupe from "../src/assets/images/soupe.jpg";
import tradition from "../src/assets/images/tradition.jpg";
import bouillon from "../src/assets/images/Bouillon.jpg";
import saucissePlat from "../src/assets/images/Saucisse.jpg";
import saumon from "../src/assets/images/Saumon.jpg";
import hampe from "../src/assets/images/Hampe_bœuf.jpg";
import steak from "../src/assets/images/steak.jpg";
import poulet from "../src/assets/images/poulet.jpg";
import canard from "../src/assets/images/Canard.jpg";
// import carbonade from "../src/assets/images/c";
import chocolat from "../src/assets/images/choco.jpg";
// import crumble from "../src/assets/images";
import caramel from "../src/assets/images/crème_brulée.jpg";
import ileFlo from "../src/assets/images/ileFlo.jpg";
import aubergine from "../src/assets/images/aubergine.jpg";
import verrine from "../src/assets/images/verrine.jpg";

// Traductions
const resources = {
  fr: {
    translation: {
      phone: "Par téléphone",
      address: "Adresse",
      openingHours: "Horaires d’ouverture",
      mondayToSaturday: "Lundi au Samedi",
      time: "11h45 à 22h00",
      reservationDetails: {
        title: "ℹ️ Infos importantes sur les réservations",
        items: [
          "Réservation possible <strong>par téléphone</strong> ou <strong>en ligne via TheFork</strong> <em>(service du soir uniquement)</em>.",
          "Créneaux de réservation : <br/> <strong>11h45 à 12h30</strong> et <strong>18h à 19h30</strong>.",
          "En dehors de ces horaires, <strong>présentez-vous sans réservation</strong>, nous faisons toujours notre possible pour vous trouver une table.",
          "Capacité maximale de réservation : <strong>8 personnes</strong>, sous réserve des places disponibles.",
          "<strong>Aucune réservation</strong> n’est prise par mail ou sur la messagerie du téléphone.",
          "Seules les <strong>tables au complet</strong> sont installées. Merci de patienter à l’extérieur et de vous présenter une fois que tout le groupe est arrivé.",
          "<strong>Les tables ne sont plus gardées après l'heure de réservation.</strong>",
          "Le placement est effectué <strong>en fonction de l’ancienneté des réservations.</strong> Merci de votre compréhension.",
        ],
      },
      menu: {
        selectionTitle: "La Carte",
        entreesTitle: "Entrées",
        platsTitle: "Plats Principaux",
        dessertsTitle: "Desserts",
        entrees: [
          { nom: "Oeuf dur mayonnaise", prix: "3,10 €", image: oeufMayo },
          { nom: "Poireaux vinaigrette", prix: "3,60 €", image: poireaux },
          {
            nom: "Carottes râpées vinaigrette",
            prix: "2,90 €",
            image: carottes,
          },
          { nom: "Terrine de campagne", prix: "4,20 €", image: terrine },
          { nom: "Camembert pané au miel", prix: "4,90 €", image: camembert },
          { nom: "Soupe à l’oignon", prix: "5,10 €", image: soupe },
          {
            nom: "Œuf poché, crème &chorizo",
            prix: "4,90 €",
            image: oeufPoche,
          },
          { nom: "Crevettes mayonnaise", prix: "5,90 €", image: crevette },
        ],
        plats: [
          {
            nom: "Escalope de saumon, sauce poireaux",
            prix: "13,40 €",
            image: saumon,
          },
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
          {
            nom: "Parmentier de canard, salade",
            prix: "13,90 €",
            image: canard,
          },
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
        ],
        desserts: [
          { nom: "Pot de crème au chocolat", prix: "3,90 €", image: chocolat },
          { nom: "Île flottante", prix: "4,30 €", image: ileFlo },
          { nom: "Crème brûlée", prix: "3,90 €", image: caramel },
          {
            nom: "Verrine à la crème [Fraises fraîches]",
            prix: "4,90 €",
            image: verrine,
          },
        ],
      },
      onlineReservation: {
        title: "Réserver en ligne",
        description:
          "Vous pouvez également réserver directement via TheFork en cliquant ci-dessous :",
        linkText: "Réserver sur TheFork",
      },
      home: {
        title: "Comme un Bouillon",
        subtitle: "Cuisine française traditionnelle au cœur de Paris",
        address: "📍 17 Rue de Choiseul, 75002 Paris",
        intro: {
          welcome1: "Bienvenue",
          welcome2: "chez nous 👋",
          paragraph1:
            "À deux pas de l’Opéra Garnier, en plein cœur du 2<sup>e</sup> arrondissement de Paris, <strong>Comme un Bouillon</strong> vous accueille dans un cadre chaleureux et authentique.",
          paragraph2:
            "Inspiré des célèbres bouillons parisiens, notre restaurant, ouvert depuis <strong>juin 2021</strong>, met à l’honneur la <strong>cuisine française traditionnelle</strong> : des plats généreux, simples et faits maison, à des prix tout doux.",
          paragraph3:
            "Chaque matin, nous recevons des <strong>produits frais</strong> pour vous garantir une assiette savoureuse, servie avec rapidité et bonne humeur. Que vous soyez pressé·e pour la pause déjeuner ou que vous cherchiez un repas avant une pièce de théâtre, notre équipe est là pour vous.",
          paragraph4:
            "Et parce qu’on aime faire les choses nous-mêmes, même la <strong>décoration</strong> a été pensée et fabriquée maison, pour une ambiance unique et conviviale !",
        },
      },
    },
  },
  en: {
    translation: {
      phone: "By phone",
      address: "Address",
      openingHours: "Opening hours",
      mondayToSaturday: "Monday to Saturday",
      time: "11:45 AM to 10:00 PM",
      reservationDetails: {
        title: "ℹ️ Important information about reservations",
        items: [
          "Reservations possible <strong>by phone</strong> or <strong>online via TheFork</strong> <em>(evening service only)</em>.",
          "Reservation slots: <br/> <strong>11:45 AM to 12:30 PM</strong> and <strong>6:00 PM to 7:30 PM</strong>.",
          "Outside these hours, <strong>walk-ins are welcome</strong>, we always do our best to find you a table.",
          "Maximum reservation capacity: <strong>8 people</strong>, subject to availability.",
          "<strong>No reservations</strong> are taken by email or on the phone's voicemail.",
          "Only <strong>complete parties</strong> are seated. Please wait outside and present yourself once your entire group has arrived.",
          "<strong>Tables are no longer held after the reservation time.</strong>",
          "Seating is done <strong>based on the order of reservations.</strong> Thank you for your understanding.",
        ],
      },
      menu: {
        selectionTitle: "The Menu",
        entreesTitle: "Starters",
        platsTitle: "Main Courses",
        dessertsTitle: "Desserts",
        entrees: [
          {
            nom: "Hard-boiled egg with mayonnaise",
            prix: "€3.10",
            image: oeufMayo,
          },
          { nom: "Leeks with vinaigrette", prix: "€3.60", image: poireaux },
          {
            nom: "Grated carrots with vinaigrette",
            prix: "€2.90",
            image: carottes,
          },
          { nom: "Country-style terrine", prix: "€4.20", image: terrine },
          {
            nom: "Breaded camembert with honey",
            prix: "€4.90",
            image: camembert,
          },
          { nom: "Onion soup", prix: "€5.10", image: soupe },
          {
            nom: "Poached egg, cream & chorizo",
            prix: "€4.90",
            image: oeufPoche,
          },
          { nom: "Shrimp with mayonnaise", prix: "€5.90", image: crevette },
        ],
        plats: [
          {
            nom: "Salmon escalope with leek sauce",
            prix: "€13.40",
            image: saumon,
          },
          {
            nom: "The Tradition (tartare), fries & salad",
            prix: "€11.40",
            image: tradition,
          },
          {
            nom: "Le Bouillon (tartare + tomme cheese + peppers)",
            prix: "€11.90",
            image: bouillon,
          },
          {
            nom: "Knife-cut sausage, mashed potatoes, onion sauce",
            prix: "€10.90",
            image: saucissePlat,
          },
          {
            nom: "Beef skirt steak, chimichurri sauce, fries",
            prix: "€11.90",
            image: hampe,
          },
          { nom: "Pork sauté with spices", prix: "€12.90", image: hampe },
          { nom: "Duck parmentier, salad", prix: "€13.90", image: canard },
          {
            nom: "Minced steak, green pepper sauce, fries",
            prix: "€10.90",
            image: steak,
          },
          {
            nom: "Chicken supreme with lemon, fries",
            prix: "€11.90",
            image: poulet,
          },
          {
            nom: "Half roasted eggplant [tomato sauce, grated cheese, chimichurri], rice",
            prix: "€11.90",
            image: aubergine,
          },
        ],
        desserts: [
          { nom: "Chocolate cream pot", prix: "€3.90", image: chocolat },
          { nom: "Floating island", prix: "€4.30", image: ileFlo },
          { nom: "Crème brûlée", prix: "€3.90", image: caramel },
          {
            nom: "Cream verrine [Fresh strawberries]",
            prix: "€4.90",
            image: verrine,
          },
        ],
      },
      onlineReservation: {
        title: "Book online",
        description:
          "You can also book directly via TheFork by clicking below:",
        linkText: "Book on TheFork",
      },
      home: {
        title: "Comme un Bouillon",
        subtitle: "Traditional French cuisine in the heart of Paris",
        address: "📍 17 Rue de Choiseul, 75002 Paris",
        intro: {
          welcome: "Welcome to our place 👋",
          paragraph1:
            "Just steps away from the Opéra Garnier, in the heart of Paris' 2nd arrondissement, <strong>Comme un Bouillon</strong> welcomes you in a warm and authentic setting.",
          paragraph2:
            "Inspired by the famous Parisian bouillons, our restaurant, open since <strong>June 2021</strong>, highlights <strong>traditional French cuisine</strong>: generous, simple, and homemade dishes at very affordable prices.",
          paragraph3:
            "Every morning, we receive <strong>fresh products</strong> to guarantee you a delicious plate, served quickly and with a smile. Whether you're in a hurry for lunch or looking for a meal before a theater show, our team is here for you.",
          paragraph4:
            "And because we love doing things ourselves, even the <strong>decor</strong> was designed and handmade, creating a unique and friendly atmosphere!",
        },
      },
    },
  },
  es: {
    translation: {
      phone: "Por teléfono",
      address: "Dirección",
      openingHours: "Horario de apertura",
      mondayToSaturday: "De lunes a sábado",
      time: "11:45 a 22:00",
      reservationDetails: {
        title: "ℹ️ Información importante sobre las reservas",
        items: [
          "Reservas posibles <strong>por teléfono</strong> o <strong>en línea a través de TheFork</strong> <em>(solo para el servicio de la noche)</em>.",
          "Horarios de reserva: <br/> <strong>11:45 a 12:30</strong> y <strong>18:00 a 19:30</strong>.",
          "Fuera de estos horarios, <strong>se aceptan visitas sin reserva</strong>, siempre hacemos lo posible para encontrarle una mesa.",
          "Capacidad máxima de reserva: <strong>8 personas</strong>, sujeto a disponibilidad.",
          "<strong>No se aceptan reservas</strong> por correo electrónico ni en el buzón de voz del teléfono.",
          "Solo se asignan mesas a <strong>grupos completos</strong>. Por favor, espere afuera y preséntese una vez que todo su grupo haya llegado.",
          "<strong>Las mesas no se mantienen después de la hora de la reserva.</strong>",
          "La asignación de mesas se realiza <strong>según el orden de las reservas.</strong> Gracias por su comprensión.",
        ],
      },
      menu: {
        selectionTitle: "El menú",
        entreesTitle: "Entrantes",
        platsTitle: "Platos principales",
        dessertsTitle: "Postres",
        entrees: [
          { nom: "Huevo duro con mayonesa", prix: "3,10 €", image: oeufMayo },
          { nom: "Puerros con vinagreta", prix: "3,60 €", image: poireaux },
          {
            nom: "Zanahorias ralladas con vinagreta",
            prix: "2,90 €",
            image: carottes,
          },
          { nom: "Terrina campestre", prix: "4,20 €", image: terrine },
          {
            nom: "Camembert empanado con miel",
            prix: "4,90 €",
            image: camembert,
          },
          { nom: "Sopa de cebolla", prix: "5,10 €", image: soupe },
          {
            nom: "Huevo escalfado, crema y chorizo",
            prix: "4,90 €",
            image: oeufPoche,
          },
          { nom: "Gambas con mayonesa", prix: "5,90 €", image: crevette },
        ],
        plats: [
          {
            nom: "Escalope de salmón con salsa de puerros",
            prix: "13,40 €",
            image: saumon,
          },
          {
            nom: "El Tradicional (tártaro), patatas fritas y ensalada",
            prix: "11,40 €",
            image: tradition,
          },
          {
            nom: "Le Bouillon (tártaro + queso tomme + pimientos)",
            prix: "11,90 €",
            image: bouillon,
          },
          {
            nom: "Salchicha cortada a cuchillo, puré, salsa de cebolla",
            prix: "10,90 €",
            image: saucissePlat,
          },
          {
            nom: "Entraña de ternera, salsa chimichurri, patatas fritas",
            prix: "11,90 €",
            image: hampe,
          },
          {
            nom: "Salteado de cerdo con especias",
            prix: "12,90 €",
            image: hampe,
          },
          {
            nom: "Parmentier de pato, ensalada",
            prix: "13,90 €",
            image: canard,
          },
          {
            nom: "Hamburguesa de ternera, salsa de pimienta verde, patatas fritas",
            prix: "10,90 €",
            image: steak,
          },
          {
            nom: "Suprema de pollo al limón, patatas fritas",
            prix: "11,90 €",
            image: poulet,
          },
          {
            nom: "Media berenjena asada [salsa de tomate, queso rallado, chimichurri], arroz",
            prix: "11,90 €",
            image: aubergine,
          },
        ],
        desserts: [
          { nom: "Crema de chocolate", prix: "3,90 €", image: chocolat },
          { nom: "Isla flotante", prix: "4,30 €", image: ileFlo },
          { nom: "Crème brûlée", prix: "3,90 €", image: caramel },
          {
            nom: "Vasito de crema [Fresas frescas]",
            prix: "4,90 €",
            image: verrine,
          },
        ],
      },
      onlineReservation: {
        title: "Reservar en línea",
        description:
          "También puede reservar directamente a través de TheFork haciendo clic a continuación:",
        linkText: "Reservar en TheFork",
      },
      home: {
        title: "Comme un Bouillon",
        subtitle: "Cocina francesa tradicional en el corazón de París",
        address: "📍 17 Rue de Choiseul, 75002 París",
        intro: {
          welcome: "Bienvenidos a nuestro lugar 👋",
          paragraph1:
            "A pocos pasos de la Ópera Garnier, en el corazón del 2º distrito de París, <strong>Comme un Bouillon</strong> les da la bienvenida en un ambiente chaleureux y auténtique.",
          paragraph2:
            "Inspirado en los famosos bouillons parisinos, nuestro restaurante, abierto desde <strong>junio de 2021</strong>, destaca la <strong>cocina francesa tradicional</strong>: platos generosos, simples y caseros, a precios muy asequibles.",
          paragraph3:
            "Cada mañana recibimos <strong>productos frescos</strong> para garantizarle un plato delicioso, servido rápidamente y con una sonrisa. Ya sea que tenga prisa para el almuerzo o busque una comida antes de una obra de teatro, nuestro equipo está aquí para usted.",
          paragraph4:
            "Y porque nos encanta hacer las cosas nosotros mismos, incluso la <strong>decoración</strong> fue diseñada y hecha a mano, creando un ambiente único y acogedor.",
        },
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "fr",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
