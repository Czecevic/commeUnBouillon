import React from "react";
import { useTranslation } from "react-i18next";

export const ContactInfo: React.FC = () => {
  const { t } = useTranslation(); // Hook pour accéder aux traductions

  return (
    <div className="infosContact">
      <p>
        📞 <strong>{t("phone")}</strong> :<br />
        <a href="tel:0983591456" className="contact-link">
          09 83 59 14 56
        </a>
      </p>
      <div>
        📍 <strong>{t("address")}</strong> :<br />
        <iframe
          title="Google Maps - 17 Rue de Choiseul, 75002 Paris"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.999231556401!2d2.336443315674229!3d48.86867297928862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e296e8f6b2f%3A0x8c8f8f8f8f8f8f!2s17%20Rue%20de%20Choiseul%2C%2075002%20Paris!5e0!3m2!1sfr!2sfr!4v1611234567890!5m2!1sfr!2sfr"
          width="100%"
          height="200"
          style={{ borderRadius: "10px", border: "0" }}
          allowFullScreen={true}
          loading="lazy"
        ></iframe>
      </div>
      <p>
        🕒 <strong>{t("openingHours")}</strong> :<br />
        {t("mondayToSaturday")} <br /> <span>{t("time")}</span>
      </p>
    </div>
  );
};
