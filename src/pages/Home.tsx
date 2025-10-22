import { NavBar } from "../components/organisms/NavBar";
import resto from "/imgPublic/le_lieu.jpg";
import { LanguageSwitcher } from "../components/molecules/LanguageSwitcher";
import { useTranslation } from "react-i18next";

export function Home() {
  const { t } = useTranslation();

  return (
    <div className="page">
      <header className="homeHeader">
        <LanguageSwitcher />
        <h1 className="titre">{t("home.title")}</h1>
        <p className="sousTitre">{t("home.subtitle")}</p>
        <p className="adresse">{t("home.address")}</p>
      </header>

      <div className="imageContainer">
        <img
          src={resto}
          className="restoImage"
          width="100%"
          height="auto"
          loading="lazy"
          alt={t("home.title")}
        />
      </div>

      <section className="homeIntro">
        <h2>{t("home.intro.welcome1")}</h2>
        <h2>{t("home.intro.welcome2")}</h2>
        <p dangerouslySetInnerHTML={{ __html: t("home.intro.paragraph1") }} />
        <p dangerouslySetInnerHTML={{ __html: t("home.intro.paragraph2") }} />
        <p dangerouslySetInnerHTML={{ __html: t("home.intro.paragraph3") }} />
        <p dangerouslySetInnerHTML={{ __html: t("home.intro.paragraph4") }} />
      </section>

      <footer>
        <NavBar />
      </footer>
    </div>
  );
}

export default Home;
