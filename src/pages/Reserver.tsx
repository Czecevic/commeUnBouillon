import React from "react";
import { NavBar } from "../components/navbar";

type InfoItemProps = {
  children: React.ReactNode;
};

const InfoItem: React.FC<InfoItemProps> = ({ children }) => (
  <li className="info-item">{children}</li>
);

const ContactInfo: React.FC = () => (
  <div className="infosContact">
    <p>
      📞 <strong>Par téléphone</strong> :<br />
      <a href="tel:0983591456" className="contact-link">
        09 83 59 14 56
      </a>
    </p>
    <p>
      📍 <strong>Adresse</strong> :<br />
      17 Rue de Choiseul, 75002 Paris
    </p>
    <p>
      🕒 <strong>Horaires d’ouverture</strong> :<br />
      Lundi au Samedi — <span>11h45 à 22h00</span>
    </p>
  </div>
);

const ReservationDetails: React.FC = () => (
  <div className="reservationDetails">
    <h2>ℹ️ Infos importantes sur les réservations</h2>
    <ul>
      <InfoItem>
        Réservation possible <strong>par téléphone</strong> ou{" "}
        <strong>en ligne via TheFork</strong>{" "}
        <em>(service du soir uniquement)</em>.
      </InfoItem>
      <InfoItem>
        Créneaux de réservation : <strong>11h45 à 12h30</strong> et{" "}
        <strong>18h à 19h30</strong>.
      </InfoItem>
      <InfoItem>
        En dehors de ces horaires,{" "}
        <strong>présentez-vous sans réservation</strong>, nous faisons toujours
        notre possible pour vous trouver une table.
      </InfoItem>
      <InfoItem>
        Capacité maximale de réservation : <strong>8 personnes</strong>, sous
        réserve des places disponibles.
      </InfoItem>
      <InfoItem>
        <strong>Aucune réservation</strong> n’est prise par mail ou sur la
        messagerie du téléphone.
      </InfoItem>
      <InfoItem>
        Seules les <strong>tables au complet</strong> sont installées. Merci de
        patienter à l’extérieur et de vous présenter une fois que tout le groupe
        est arrivé.
      </InfoItem>
      <InfoItem>
        <strong>
          Les tables ne sont plus gardées après l'heure de réservation.
        </strong>
      </InfoItem>
      <InfoItem>
        Le placement est effectué{" "}
        <strong>en fonction de l’ancienneté des réservations.</strong> Merci de
        votre compréhension.
      </InfoItem>
    </ul>
  </div>
);

const OnlineReservation: React.FC = () => (
  <div className="onlineReservation">
    <h2>💻 Réserver en ligne</h2>
    <p>
      Vous pouvez également réserver directement via TheFork en cliquant
      ci-dessous :
    </p>
    <a
      href="https://www.thefork.fr/restaurant/comme-un-bouillon-r742361"
      target="_blank"
      rel="noopener noreferrer"
      className="linkReserver"
    >
      Réserver sur TheFork
    </a>
  </div>
);

const AnnexReservation: React.FC = () => (
  <div className="annexReservation">
    <h2>📆 Réserver l'annexe</h2>
    <p>
      Vous pouvez réserver l'annexe pour vos événements privés. Pour cela,
      contactez-nous par téléphone ou par email.
    </p>
  </div>
);

export const Reserver: React.FC = () => {
  return (
    <div className="reserver">
      <ReservationDetails />
      <ContactInfo />
      <OnlineReservation />
      <AnnexReservation />
      <NavBar />
    </div>
  );
};
