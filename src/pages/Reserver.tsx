import React from "react";
import { NavBar } from "../components/organisms/NavBar";
import { ReservationDetails } from "../components/molecules/ReservationDetails";
import { OnlineReservation } from "../components/molecules/OnlineReservation";
import { ContactInfo } from "../components/molecules/ContactInfo";
import { LanguageSwitcher } from "../components/molecules/LanguageSwitcher";

export const Reserver: React.FC = () => {
  return (
    <div className="reserver">
      <LanguageSwitcher />
      <OnlineReservation />
      <ReservationDetails />
      <ContactInfo />
      <NavBar />
    </div>
  );
};
