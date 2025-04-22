import React from "react";
import { NavBar } from "../components/organisms/NavBar";
import { ContactForm } from "../components/organisms/ContactForm";
import { ReservationDetails } from "../components/molecules/ReservationDetails";
import { OnlineReservation } from "../components/molecules/OnlineReservation";
import { ContactInfo } from "../components/molecules/ContactInfo";

export const Reserver: React.FC = () => {
  return (
    <div className="reserver">
      <ReservationDetails />
      <ContactInfo />
      <OnlineReservation />
      <ContactForm />
      <NavBar />
    </div>
  );
};
