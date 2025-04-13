import { NavBar } from "../components/navbar";

export const Reserver = () => {
  return (
    <div className="reserver">
      <div className="reservationDetails">
        <h2>ℹ️ Infos importantes sur les réservations</h2>
        <ul>
          <li>
            Réservation possible <strong>par téléphone</strong> ou{" "}
            <strong>en ligne via TheFork</strong>{" "}
            <em>(service du soir uniquement)</em>.
          </li>
          <li>
            Créneaux de réservation : <strong>11h45 à 12h30</strong> et{" "}
            <strong>18h à 19h30</strong>.
          </li>
          <li>
            En dehors de ces horaires,{" "}
            <strong>présentez-vous sans réservation</strong>, nous faisons
            toujours notre possible pour vous trouver une table.
          </li>
          <li>
            Capacité maximale de réservation : <strong>8 personnes</strong>,
            sous réserve des places disponibles.
          </li>
          <li>
            <strong>Aucune réservation</strong> n’est prise par mail ou sur la
            messagerie du téléphone.
          </li>
          <li>
            Seules les <strong>tables au complet</strong> sont installées. Merci
            de patienter à l’extérieur et de vous présenter une fois que tout le
            groupe est arrivé.
          </li>
          <li>
            <strong>
              Les tables ne sont plus gardées après l'heure de réservation.
            </strong>
          </li>
          <li>
            Le placement est effectué{" "}
            <strong>en fonction de l’ancienneté des réservations.</strong> Merci
            de votre compréhension.
          </li>
        </ul>
      </div>

      <div className="infosContact">
        <p>
          📞 <strong>Par téléphone</strong> :<br />
          09 83 59 14 56
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

      <h2>📆 Réserver l'annexe</h2>
      <p>
        Vous pouvez réserver l'annexe pour vos événements privés. Pour cela,
        contactez-nous par téléphone ou par email.
      </p>

      <NavBar />
    </div>
  );
};
