import React from "react";
import { useTranslation } from "react-i18next";
import { InfoItem } from "../atoms/InfoItem";

export const ReservationDetails: React.FC = () => {
  const { t } = useTranslation();

  const title = t("reservationDetails.title");
  const items = t("reservationDetails.items", {
    returnObjects: true,
  }) as string[];

  return (
    <div className="reservationDetails">
      <h2 dangerouslySetInnerHTML={{ __html: title }} />
      <ul>
        {items.map((item, index) => (
          <InfoItem key={index}>
            <span dangerouslySetInnerHTML={{ __html: item }} />
          </InfoItem>
        ))}
      </ul>
    </div>
  );
};
