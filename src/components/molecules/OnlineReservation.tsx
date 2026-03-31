import { useTranslation } from "react-i18next";

export const OnlineReservation = () => {
  const { t } = useTranslation(); // Hook pour accéder aux traductions

  return (
    <div className="onlineReservation">
      <h2>💻 {t("onlineReservation.title")}</h2>
      <p>{t("onlineReservation.description")}</p>
      <a
        href="https://widget.thefork.com/fr/f74e343a-0fb0-42e6-bc3e-3f00eb097ae5?step=date"
        target="_blank"
        rel="noopener noreferrer"
        className="linkReserver"
      >
        {t("onlineReservation.linkText")}
      </a>
    </div>
  );
};
