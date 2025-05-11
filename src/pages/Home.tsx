import { NavBar } from "../components/organisms/NavBar";
import resto from "/images/le_lieu.jpg?url";
import { LanguageSwitcher } from "../components/molecules/LanguageSwitcher";

export function Home() {
  return (
    <div className="page">
      <header className="homeHeader">
        <LanguageSwitcher />
        <h1 className="titre">Comme un Bouillon</h1>
        <p className="sousTitre">
          Cuisine française traditionnelle au cœur de Paris
        </p>
        <p className="adresse">📍 17 Rue de Choiseul, 75002 Paris</p>
      </header>

      <div className="imageContainer">
        <img
          src={resto}
          className="restoImage"
          width="100%"
          height="auto"
          loading="lazy"
          alt="Photo du restaurant Comme un Bouillon"
        />
      </div>

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

      <footer>
        <NavBar />
      </footer>
    </div>
  );
}

export default Home;
