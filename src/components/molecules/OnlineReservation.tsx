import { useTranslation } from "react-i18next";

export const OnlineReservation = () => {
  const { t } = useTranslation(); // Hook pour accéder aux traductions

  return (
    <div className="onlineReservation">
      <h2>💻 {t("onlineReservation.title")}</h2>
      <p>{t("onlineReservation.description")}</p>
      <a
        href="https://www.thefork.fr/restaurant/comme-un-bouillon-r742361"
        target="_blank"
        rel="noopener noreferrer"
        className="linkReserver"
      >
        {t("onlineReservation.linkText")}
      </a>
    </div>
  );
};
