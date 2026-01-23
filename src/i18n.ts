import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Harmonisation des imports d'images
import oeufMayo from "./assets/img/oeufMayo.jpeg";
import poireaux from "./assets/img/poireau.jpeg";
import terrine from "./assets/img/terrine.jpeg";
import carottes from "./assets/img/carotte.jpeg";
import oeufPoche from "./assets/img/oeufPoche.jpeg";
import chorizo from "./assets/img/chorizo.jpeg";
import fromage from "./assets/img/brieFromage.jpeg";
import tommeDeSavoie from "./assets/img/tomDeSavoie.jpeg";
import camembert from "./assets/img/camembert.jpeg";
import soupe from "./assets/img/soupe_a_loignon.jpeg";
import tradition from "./assets/img/tradition.jpeg";
import bouillon from "./assets/img/bouillon.jpeg";
import saucissePlat from "./assets/img/saucisse.jpeg";
import saumon from "./assets/img/poisson.jpeg";
import hampe from "./assets/img/hampe.jpeg";
import steak from "./assets/img/steakFrites.jpeg";
import poulet from "./assets/img/poulet.jpeg";
import carbonade from "./assets/img/carbonade.jpeg";
import chocolat from "./assets/img/chocolat.jpeg";
import caramel from "./assets/img/caramel.jpeg";
import ileFlo from "./assets/img/ileFlo.jpeg";
import aubergine from "./assets/img/aubergine.jpeg";
import verrine from "./assets/img/verrine.jpeg";
// escargot
import mousseFoieVolaille from "./assets/img/saumon.jpeg";
import SaucissonSecMaison from "./assets/img/saucisson_sec.jpeg";
import rilletteDeSaumon from "./assets/img/mousseFoieVolaille.jpeg";
import andouillette from "./assets/img/andouille.jpeg";
import crumble from "./assets/img/crumble.jpeg";
import veau from "./assets/img/veau.jpeg";

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
          {
            nom: "Rillettes de saumon",
            prix: "4,60 €",
            image: rilletteDeSaumon,
          },
          { nom: "Terrine de campagne", prix: "4,30 €", image: terrine },
          { nom: "Saucisson sec", prix: "3,60 €", image: SaucissonSecMaison },
          { nom: "Chorizo grillé", prix: "3,90 €", image: chorizo },
          {
            nom: "Quart de camembert pané au miel",
            prix: "4,90 €",
            image: camembert,
          },
          {
            nom: "Œuf poché, crème de Maroilles AOP",
            prix: "4,90 €",
            image: oeufPoche,
          },
          {
            nom: "Mousse de foie de volaille",
            prix: "4,10 €",
            image: mousseFoieVolaille,
          },
          { nom: "Soupe à l’oignon", prix: "5,10 €", image: soupe },
        ],
        plats: [
          {
            nom: "Saumon, crème aux herbes, pâtes",
            prix: "€13,40€",
            image: saumon,
          },
          {
            nom: "Le tradition (boeuf haché cru préparé), frites & salade",
            prix: "11,60 €",
            image: tradition,
          },
          {
            nom: "Le Bouillon (boeuf haché cru préparé + tomme + poivrons)",
            prix: "12,10 €",
            image: bouillon,
          },
          {
            nom: "Saucisse au couteau, sauce au Maroilles AOP, purée ",
            prix: "10,90 €",
            image: saucissePlat,
          },
          {
            nom: "Hampe de bœuf, sauce chimichurri, frites",
            prix: "11,90 €",
            image: hampe,
          },
          { nom: "Parmentier de canard, riz", prix: "13,90 €", image: veau },
          {
            nom: "Andouillette pur porc, sauce moutarde, frites",
            prix: "11,90 €",
            image: andouillette,
          },
          {
            nom: "Steak haché, sauce au poivre vert, frites",
            prix: "10,90 €",
            image: steak,
          },
          {
            nom: "Poulet coco curry, riz",
            prix: "12,90 €",
            image: poulet,
          },
          {
            nom: "Boeuf bourguinon, purée",
            prix: "13,10 €",
            image: carbonade,
          },
          {
            nom: "Pâtes à la tomate [fromage râpé]",
            prix: "10,90 €",
            image: aubergine,
          },
        ],
        desserts: [
          { nom: "Pot de crème au chocolat", prix: "3,90 €", image: chocolat },
          { nom: "Crumble aux pommes", prix: "3,90 €", image: crumble },
          { nom: "Île flottante", prix: "4,30 €", image: ileFlo },
          { nom: "Crème brûlée", prix: "4,10 €", image: caramel },
          {
            nom: "Riz au lait",
            prix: "4,20 €",
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
            prix: "3.10 €",
            image: oeufMayo,
          },
          { nom: "Leeks with vinaigrette", prix: "3,60 €", image: poireaux },
          {
            nom: "Grated carrots with vinaigrette",
            prix: "2,90 €",
            image: carottes,
          },
          { nom: "Salmon rillettes", prix: "4,60 €", image: rilletteDeSaumon },
          { nom: "Country-style terrine", prix: "4,30 €", image: terrine },
          { nom: "Dry sausage", prix: "3,60 €", image: SaucissonSecMaison },
          {
            nom: "Breaded camembert with honey",
            prix: "4,90 €",
            image: camembert,
          },
          {
            nom: "Poached egg, Maroilles AOP cream",
            prix: "4,90 €",
            image: oeufPoche,
          },
          {
            nom: "Chicken liver mousse",
            prix: "4,10 €",
            image: mousseFoieVolaille,
          },
          { nom: "Onion soup", prix: "5,10 €", image: soupe },
        ],
        plats: [
          {
            nom: "Salmon, herb cream, pasta",
            prix: "13,40 €",
            image: saumon,
          },
          {
            nom: "The Tradition (raw ground beef), fries & salad",
            prix: "11,60 €",
            image: tradition,
          },
          {
            nom: "Le Bouillon (raw ground beef + tomme + peppers)",
            prix: "12,10 €",
            image: bouillon,
          },
          {
            nom: "Knife-cut sausage, Maroilles AOP sauce, mashed potatoes",
            prix: "10,90 €",
            image: saucissePlat,
          },
          {
            nom: "Beef skirt steak, chimichurri sauce, fries",
            prix: "11,90 €",
            image: hampe,
          },
          { nom: "Duck parmentier, rice", prix: "13,90 €", image: veau },
          {
            nom: "Pure pork andouillette, mustard sauce, fries",
            prix: "11,90 €",
            image: andouillette,
          },
          {
            nom: "Minced steak, green pepper sauce, fries",
            prix: "10,90 €",
            image: steak,
          },
          {
            nom: "Chicken curry and rice",
            prix: "12,90 €",
            image: poulet,
          },
          {
            nom: "beef bourguignon, mashed potatoes",
            prix: "13,10 €",
            image: carbonade,
          },
          {
            nom: "Pasta with tomato sauce [grated cheese]",
            prix: "10,90 €",
            image: aubergine,
          },
        ],
        desserts: [
          { nom: "Chocolate cream pot", prix: "3,90 €", image: chocolat },
          { nom: "Apple crumble", prix: "3,90 €", image: crumble },
          { nom: "Floating island", prix: "4,30 €", image: ileFlo },
          { nom: "Crème brûlée", prix: "4,10 €", image: caramel },
          {
            nom: "Rice pudding",
            prix: "4,20 €",
            image: verrine,
          },
          { nom: "AOP Brie de Meaux", prix: "4,10 €", image: fromage },
          { nom: "IGP Tomme de Savoie", prix: "3,90 €", image: tommeDeSavoie },
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
          {
            nom: "Rillettes de salmón",
            prix: "4,60 €",
            image: rilletteDeSaumon,
          },
          { nom: "Terrina campestre", prix: "4,30 €", image: terrine },
          { nom: "Salchichón seco", prix: "4,20 €", image: SaucissonSecMaison },
          {
            nom: "Cuarto de camembert empanado con miel",
            prix: "4,90 €",
            image: camembert,
          },
          {
            nom: "Huevo escalfado, crema de Maroilles AOP",
            prix: "4,90 €",
            image: oeufPoche,
          },
          {
            nom: "Mousse de hígado de ave",
            prix: "4,10 €",
            image: mousseFoieVolaille,
          },
          { nom: "Sopa de cebolla", prix: "5,10 €", image: soupe },
        ],
        plats: [
          {
            nom: "Salmón, crema de hierbas, pasta",
            prix: "13,40 €",
            image: saumon,
          },
          {
            nom: "El Tradicional (carne picada cruda preparada), patatas fritas y ensalada",
            prix: "11,60 €",
            image: tradition,
          },
          {
            nom: "Le Bouillon (carne picada cruda preparada + tomme + pimientos)",
            prix: "12,10 €",
            image: bouillon,
          },
          {
            nom: "Salchicha cortada a cuchillo, salsa chimichurri, puré",
            prix: "10,90 €",
            image: saucissePlat,
          },
          {
            nom: "Entraña de ternera, salsa blue d'Auvergne AOP, patatas fritas",
            prix: "11,90 €",
            image: hampe,
          },
          { nom: "Pato parmentier, arroz", prix: "13,90 €", image: veau },
          {
            nom: "Andouillette de cerdo puro, salsa de mostaza, patatas fritas",
            prix: "11,90 €",
            image: andouillette,
          },
          {
            nom: "Hamburguesa de ternera, salsa de pimienta verde, patatas fritas",
            prix: "10,90 €",
            image: steak,
          },
          {
            nom: "Pollo al curry con arroz",
            prix: "12,90 €",
            image: poulet,
          },
          {
            nom: "boeuf bourguignon, puré de patatas",
            prix: "13,10 €",
            image: carbonade,
          },
          {
            nom: "Pasta con tomate [queso rallado]",
            prix: "10,90 €",
            image: aubergine,
          },
        ],
        desserts: [
          { nom: "Crema de chocolate", prix: "3,90 €", image: chocolat },
          { nom: "Crumble de manzana", prix: "3,90 €", image: crumble },
          { nom: "Isla flotante", prix: "4,30 €", image: ileFlo },
          { nom: "Crème brûlée", prix: "4,10 €", image: caramel },
          {
            nom: "Arroz con leche",
            prix: "4,20 €",
            image: verrine,
          },
          { nom: "AOP Brie de Meaux", prix: "4,10 €", image: fromage },
          { nom: "IGP Tomme de Savoie", prix: "3,90 €", image: tommeDeSavoie },
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
            "A pocos pasos de la Ópera Garnier, en el corazón del 2º distrito de París, <strong>Comme un Bouillon</strong> les da la bienvenida en un ambiente chaleureux et authentique.",
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
  zh: {
    translation: {
      phone: "电话预约",
      address: "地址",
      openingHours: "营业时间",
      mondayToSaturday: "周一至周六",
      time: "11:45 至 22:00",
      reservationDetails: {
        title: "ℹ️ 关于预订的重要信息",
        items: [
          "可通过<strong>电话</strong>或<strong>通过 TheFork 在线</strong>预订<em>（仅限晚间服务）</em>。",
          "预订时段：<br/> <strong>11:45 至 12:30</strong> 和 <strong>18:00 至 19:30</strong>。",
          "在这些时间之外，欢迎<strong>未预约到店</strong>，我们会尽力为您安排座位。",
          "最大预订人数：<strong>8 人</strong>，视座位情况而定。",
          "<strong>不接受</strong>通过电子邮件或电话语音信箱进行预订。",
          "仅为<strong>整桌</strong>安排座位。请在外等待并在全员到齐后入内。",
          "<strong>预订时间过后不再保留桌位。</strong>",
          "座位分配按<strong>预订先后顺序</strong>进行。感谢您的理解。",
        ],
      },
      menu: {
        selectionTitle: "菜单",
        entreesTitle: "前菜",
        platsTitle: "主菜",
        dessertsTitle: "甜点",
        entrees: [
          { nom: "熟鸡蛋配蛋黄酱", prix: "3,10 €", image: oeufMayo },
          { nom: "韭葱配油醋汁", prix: "3,60 €", image: poireaux },
          { nom: "胡萝卜丝配油醋汁", prix: "2,90 €", image: carottes },
          { nom: "三文鱼酱", prix: "4,60 €", image: rilletteDeSaumon },
          { nom: "乡村肉冻", prix: "4,30 €", image: terrine },
          { nom: "干腊肠", prix: "4,20 €", image: SaucissonSecMaison },
          { nom: "炸卡门贝尔（配蜂蜜）", prix: "4,90 €", image: camembert },
          {
            nom: "荷包蛋配Maroilles AOP奶油",
            prix: "4,90 €",
            image: oeufPoche,
          },
          { nom: "禽肝慕斯", prix: "4,10 €", image: mousseFoieVolaille },
          { nom: "洋葱汤", prix: "5,10 €", image: soupe },
        ],
        plats: [
          { nom: "三文鱼，香草奶油，意面", prix: "13,40 €", image: saumon },
          {
            nom: "传统（调味生牛肉），薯条与沙拉",
            prix: "11,60 €",
            image: tradition,
          },
          {
            nom: "Le Bouillon（调味生牛肉 + 汤姆奶酪 + 甜椒）",
            prix: "12,10 €",
            image: bouillon,
          },
          {
            nom: "手切香肠，Maroilles AOP酱，土豆泥",
            prix: "10,90 €",
            image: saucissePlat,
          },
          { nom: "牛腩，香草酱，薯条", prix: "11,90 €", image: hampe },
          { nom: "鸭肉馅饼，米饭", prix: "13,90 €", image: veau },
          {
            nom: "安杜耶特（猪肠香肠），芥末酱，薯条",
            prix: "11,90 €",
            image: andouillette,
          },
          { nom: "碎牛肉饼，青胡椒酱，薯条", prix: "10,90 €", image: steak },
          { nom: "椰香咖喱鸡配米饭", prix: "12,90 €", image: poulet },
          { nom: "勃艮第炖牛肉，土豆泥", prix: "13,10 €", image: carbonade },
          {
            nom: "番茄意面[磨碎的奶酪]",
            prix: "10,90 €",
            image: aubergine,
          },
        ],
        desserts: [
          { nom: "巧克力奶冻", prix: "3,90 €", image: chocolat },
          { nom: "苹果脆", prix: "3,90 €", image: crumble },
          { nom: "浮岛（法式甜点）", prix: "4,30 €", image: ileFlo },
          { nom: "焦糖布丁", prix: "4,10 €", image: caramel },
          { nom: "米布丁", prix: "4,20 €", image: verrine },
          { nom: "AOP 梅多布里干酪", prix: "4,10 €", image: fromage },
          { nom: "IGP 萨瓦奶酪", prix: "3,90 €", image: tommeDeSavoie },
        ],
      },
      onlineReservation: {
        title: "在线预订",
        description: "您也可以通过 TheFork 点击下方直接预订：",
        linkText: "在 TheFork 预订",
      },
      home: {
        title: "Comme un Bouillon",
        subtitle: "巴黎心脏地带的传统法式料理",
        address: "📍 17 Rue de Choiseul, 75002 Paris",
        intro: {
          welcome: "欢迎光临 👋",
          paragraph1:
            "距歌剧院加尼叶仅几步之遥，位于巴黎第二区中心，<strong>Comme un Bouillon</strong>在温馨而正宗的环境中欢迎您。",
          paragraph2:
            "受著名巴黎bouillons的启发，我们的餐厅自 <strong>2021年6月</strong> 开业，致力于呈现 <strong>传统法式料理</strong>：丰盛、简单且自制的菜肴，价格亲民。",
          paragraph3:
            "每天早上我们收到 <strong>新鲜食材</strong>，确保为您提供美味的菜肴，快速上菜并带着笑容。无论您赶时间午餐或想在看戏前用餐，我们的团队都会为您服务。",
          paragraph4:
            "我们喜欢亲力亲为，连 <strong>装饰</strong> 都是我们设计并手工制作，营造独特且友好的氛围！",
        },
      },
    },
  },
  ko: {
    translation: {
      phone: "전화로",
      address: "주소",
      openingHours: "영업 시간",
      mondayToSaturday: "월요일~토요일",
      time: "11:45 - 22:00",
      reservationDetails: {
        title: "ℹ️ 예약에 대한 중요 안내",
        items: [
          "예약은 <strong>전화</strong> 또는 <strong>TheFork를 통한 온라인</strong>으로 가능합니다 <em>(저녁 영업만 해당)</em>.",
          "예약 시간대: <br/> <strong>11:45~12:30</strong> 및 <strong>18:00~19:30</strong>.",
          "이 시간 외에는 <strong>예약 없이 방문</strong>하셔도 됩니다. 가능한 한 자리를 찾아드리겠습니다.",
          "최대 예약 인원: <strong>8명</strong>, 좌석 상황에 따라 달라질 수 있습니다.",
          "<strong>이메일 또는 전화 음성사서함으로는 예약을 받지 않습니다.</strong>",
          "좌석은 <strong>완전한 단체</strong>만 배정됩니다. 그룹 전체가 도착할 때까지 밖에서 기다려 주세요.",
          "<strong>예약 시간 이후에는 테이블을 보류하지 않습니다.</strong>",
          "좌석 배정은 <strong>예약 순서</strong>로 진행됩니다. 양해 부탁드립니다.",
        ],
      },
      menu: {
        selectionTitle: "메뉴",
        entreesTitle: "전채",
        platsTitle: "메인 요리",
        dessertsTitle: "디저트",
        entrees: [
          {
            nom: "마요네즈를 곁들인 삶은 달걀",
            prix: "3,10 €",
            image: oeufMayo,
          },
          { nom: "리크(대파) 비네그레트", prix: "3,60 €", image: poireaux },
          { nom: "갈은 당근 비네그레트", prix: "2,90 €", image: carottes },
          { nom: "연어 릴레트", prix: "4,60 €", image: rilletteDeSaumon },
          { nom: "컨트리 테린", prix: "4,30 €", image: terrine },
          { nom: "건조 소시지", prix: "4,20 €", image: SaucissonSecMaison },
          {
            nom: "꿀을 곁들인 빵가루 튀김 까망베르 1/4",
            prix: "4,90 €",
            image: camembert,
          },
          { nom: "수란, Maroilles AOP 크림", prix: "4,90 €", image: oeufPoche },
          { nom: "가금류 간 무스", prix: "4,10 €", image: mousseFoieVolaille },
          { nom: "양파 수프", prix: "5,10 €", image: soupe },
        ],
        plats: [
          {
            nom: "연어, 허브 크림, 파스타",
            prix: "13,40 €",
            image: saumon,
          },
          {
            nom: "트라디셔널(조리된 생 다진 소고기), 감자튀김 & 샐러드",
            prix: "11,60 €",
            image: tradition,
          },
          {
            nom: "Le Bouillon (조리된 생 다진 소고기 + 톰 치즈 + 피망)",
            prix: "12,10 €",
            image: bouillon,
          },
          {
            nom: "칼로 썬 소시지, Maroilles AOP 소스, 으깬 감자",
            prix: "10,90 €",
            image: saucissePlat,
          },
          {
            nom: "함프(소고기 부위), 치미추리 소스, 감자튀김",
            prix: "11,90 €",
            image: hampe,
          },
          { nom: "오리 파르망티에, 밥", prix: "13,90 €", image: veau },
          {
            nom: "안두예트(돼지 소시지), 머스타드 소스, 감자튀김",
            prix: "11,90 €",
            image: andouillette,
          },
          {
            nom: "다진 소고기 스테이크, 그린 페퍼 소스, 감자튀김",
            prix: "10,90 €",
            image: steak,
          },
          {
            nom: "코코넛 커리 치킨과 밥",
            prix: "12,90 €",
            image: poulet,
          },
          {
            nom: "부르고뉴식 소고기, 감자 퓨레",
            prix: "13,10 €",
            image: carbonade,
          },
          {
            nom: "토마토 파스타 [간 치즈]",
            prix: "10,90 €",
            image: aubergine,
          },
        ],
        desserts: [
          { nom: "초콜릿 크림", prix: "3,90 €", image: chocolat },
          { nom: "사과 크럼블", prix: "3,90 €", image: crumble },
          {
            nom: "일드 플로탕트(떠있는 섬 디저트)",
            prix: "4,30 €",
            image: ileFlo,
          },
          { nom: "크렘 브뤼레", prix: "4,10 €", image: caramel },
          { nom: "우유밥", prix: "4,20 €", image: verrine },
          {
            nom: "AOP 브리 드 모(Brie de Meaux)",
            prix: "4,10 €",
            image: fromage,
          },
          {
            nom: "IGP 톰 드 사부아(Tomme de Savoie)",
            prix: "3,90 €",
            image: tommeDeSavoie,
          },
        ],
      },
      onlineReservation: {
        title: "온라인 예약",
        description:
          "아래 버튼을 클릭하면 TheFork에서 직접 예약할 수 있습니다：",
        linkText: "TheFork에서 예약",
      },
      home: {
        title: "Comme un Bouillon",
        subtitle: "파리 중심부의 전통 프랑스 요리",
        address: "📍 17 Rue de Choiseul, 75002 Paris",
        intro: {
          welcome: "환영합니다 👋",
          paragraph1:
            "오페라 가르니에에서 몇 걸음 떨어진, 파리 2구 중심부에 위치한 <strong>Comme un Bouillon</strong>에서 따뜻하고 정통한 분위기로 여러분을 맞이합니다.",
          paragraph2:
            "유명한 파리의 부이용에서 영감을 받은 저희 레스토랑은 <strong>2021년 6월</strong> 개업하여 <strong>전통 프랑스 요리</strong>를 선보입니다：풍성하고 단순하며 수제 요리를 합리적인 가격에 제공합니다。",
          paragraph3:
            "매일 아침 <strong>신선한 재료</strong>를 받아 맛있는 요리를 빠르게 웃음과 함께 제공합니다。점심에 급하신 분이나 공연 전 식사를 원하시는 분들도 환영합니다。",
          paragraph4:
            "저희는 직접 만드는 것을 좋아합니다。심지어 <strong>장식</strong>도 직접 디자인하고 수작업으로 제작하여 독특하고 친근한 분위기를 만들어 냈습니다！",
        },
      },
    },
  },
  ja: {
    translation: {
      phone: "お電話で",
      address: "住所",
      openingHours: "営業時間",
      mondayToSaturday: "月〜土",
      time: "11:45〜22:00",
      reservationDetails: {
        title: "ℹ️ 予約に関する重要なお知らせ",
        items: [
          "ご予約は<strong>お電話</strong>または<strong>TheForkのオンライン</strong>で可能です <em>（ディナーのみ）</em>。",
          "予約時間帯：<br/> <strong>11:45〜12:30</strong> および <strong>18:00〜19:30</strong>。",
          "上記時間外は、<strong>直接ご来店</strong>いただいても大丈夫です。できる限りお席をご用意します。",
          "最大予約人数：<strong>8名</strong>、空席状況により異なります。",
          "<strong>メールまたは留守番電話では予約を受け付けておりません。</strong>",
          "お席は<strong>グループ全員が揃っている場合のみ</strong>ご案内します。全員が到着するまで外でお待ちください。",
          "<strong>予約時間を過ぎるとお席は確保されません。</strong>",
          "お席は<strong>予約の先着順</strong>でご案内します。ご理解ください。",
        ],
      },
      menu: {
        selectionTitle: "メニュー",
        entreesTitle: "前菜",
        platsTitle: "メインディッシュ",
        dessertsTitle: "デザート",
        entrees: [
          { nom: "ゆで卵 マヨネーズ添え", prix: "3,10 €", image: oeufMayo },
          {
            nom: "リーク（長ねぎ）のビネグレット",
            prix: "3,60 €",
            image: poireaux,
          },
          { nom: "細切り人参のビネグレット", prix: "2,90 €", image: carottes },
          {
            nom: "サーモンのリエット",
            prix: "4,60 €",
            image: rilletteDeSaumon,
          },
          { nom: "カントリーテリーヌ", prix: "4,30 €", image: terrine },
          {
            nom: "サルチチョン（乾燥ソーセージ）",
            prix: "4,20 €",
            image: SaucissonSecMaison,
          },
          {
            nom: "カマンベールのパン粉揚げ（蜂蜜添え）",
            prix: "4,90 €",
            image: camembert,
          },
          {
            nom: "ポーチドエッグ、Maroilles AOPクリーム",
            prix: "4,90 €",
            image: oeufPoche,
          },
          { nom: "鶏レバームース", prix: "4,10 €", image: mousseFoieVolaille },
          { nom: "オニオングラタンスープ", prix: "5,10 €", image: soupe },
        ],
        plats: [
          {
            nom: "サーモン、ハーブクリーム、パスタ",
            prix: "13,40 €",
            image: saumon,
          },
          {
            nom: "トラディショナル（調理した生ひき肉）、フライドポテト＆サラダ",
            prix: "11,60 €",
            image: tradition,
          },
          {
            nom: "Le Bouillon（調理した生ひき肉 + トムチーズ + ピーマン）",
            prix: "12,10 €",
            image: bouillon,
          },
          {
            nom: "ナイフで切ったソーセージ、Maroilles AOPソース、マッシュポテト",
            prix: "10,90 €",
            image: saucissePlat,
          },
          {
            nom: "ハンプ（牛肉の塊）、チミチュリソース、フライドポテト",
            prix: "11,90 €",
            image: hampe,
          },
          {
            nom: "鴨のパルマンティエ、ご飯",
            prix: "13,90 €",
            image: veau,
          },
          {
            nom: "アンドゥイエット（豚の腸詰）、マスタードソース、フライドポテト",
            prix: "11,90 €",
            image: andouillette,
          },
          {
            nom: "挽き肉ステーキ、グリーンペッパーソース、フライドポテト",
            prix: "10,90 €",
            image: steak,
          },
          {
            nom: "ココナッツカレーチキンとライス",
            prix: "12,90 €",
            image: poulet,
          },
          {
            nom: "ビーフ・ブルギニョン、マッシュポテト",
            prix: "13,10 €",
            image: carbonade,
          },
          {
            nom: "トマトパスタ [粉チーズ]",
            prix: "10,90 €",
            image: aubergine,
          },
        ],
        desserts: [
          { nom: "チョコレートクリーム", prix: "3,90 €", image: chocolat },
          { nom: "アップルクランブル", prix: "3,90 €", image: crumble },
          { nom: "浮島（イル・フロッタント）", prix: "4,30 €", image: ileFlo },
          { nom: "クレームブリュレ", prix: "4,10 €", image: caramel },
          {
            nom: "ライスプディング",
            prix: "4,20 €",
            image: verrine,
          },
          { nom: "AOP ブリー・ド・モー", prix: "4,10 €", image: fromage },
          {
            nom: "IGP トム・ド・サヴォワ",
            prix: "3,90 €",
            image: tommeDeSavoie,
          },
        ],
      },
      onlineReservation: {
        title: "オンライン予約",
        description: "以下をクリックすると TheFork で直接予約できます：",
        linkText: "TheForkで予約",
      },
      home: {
        title: "Comme un Bouillon",
        subtitle: "パリ中心部の伝統的なフランス料理",
        address: "📍 17 Rue de Choiseul, 75002 Paris",
        intro: {
          welcome: "ようこそ 👋",
          paragraph1:
            "オペラ・ガルニエから徒歩圏内、パリ2区の中心にある<strong>Comme un Bouillon</strong>は温かく本格的な雰囲気で皆様をお迎えします。",
          paragraph2:
            "有名なパリのブイヨンに触発された当店は、<strong>2021年6月</strong>にオープンし、<strong>伝統的なフランス料理</strong>を提供しています：ボリュームがあり、シンプルで自家製の料理をお手頃な価格で。",
          paragraph3:
            "毎朝、<strong>新鮮な食材</strong>が届き、美味しい料理を迅速に笑顔で提供します。ランチでお急ぎの場合や観劇前のお食事にも対応します。",
          paragraph4:
            "自分たちで作ることが好きなので、装飾も<strong>自家製</strong>でデザイン・手作りし、ユニークで居心地の良い雰囲気を作っています！",
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
