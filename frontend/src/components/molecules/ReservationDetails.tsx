import { InfoItem } from "../atoms/InfoItem";

export const ReservationDetails: React.FC = () => (
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
