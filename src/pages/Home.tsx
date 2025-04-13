import { NavBar } from "../components/navbar";
import resto from "../assets/le_lieu.jpg";

export function Home() {
  return (
    <div className="page">
      <h1 className="titre">Comme un Bouillon</h1>

      <img src={resto} className="restoImage" alt="Photo du restaurant" />

      <section className="homeIntro">
        <h2>Bienvenue chez nous 👋</h2>
        <p>
          À deux pas de l’Opéra Garnier, en plein cœur du 2<sup>e</sup>{" "}
          arrondissement de Paris, <strong>Comme un Bouillon</strong> vous
          accueille dans un cadre chaleureux et authentique.
        </p>
        <p>
          Inspiré des célèbres bouillons parisiens, notre restaurant, ouvert
          depuis <strong>juin 2021</strong>, met à l’honneur la{" "}
          <strong>cuisine française traditionnelle</strong> : des plats
          généreux, simples et faits maison, à des prix tout doux.
        </p>
        <p>
          Chaque matin, nous recevons des <strong>produits frais</strong> pour
          vous garantir une assiette savoureuse, servie avec rapidité et bonne
          humeur. Que vous soyez pressé·e pour la pause déjeuner ou que vous
          cherchiez un repas avant une pièce de théâtre, notre équipe est là
          pour vous.
        </p>
        <p>
          Et parce qu’on aime faire les choses nous-mêmes, même la{" "}
          <strong>décoration</strong> a été pensée et fabriquée maison, pour une
          ambiance unique et conviviale !
        </p>
      </section>

      <NavBar />
    </div>
  );
}

export default Home;
