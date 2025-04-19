import React, { useState } from "react";
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

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
    message: "",
    people: 1,
  });

  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:8000/reservation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        setResponseMessage(data.message);
        setFormData({ name: "", date: "", time: "", message: "", people: 1 }); // Réinitialise le formulaire

        // Efface le message après 5 secondes
        setTimeout(() => {
          setResponseMessage("");
        }, 2000);
      } else {
        setResponseMessage("Une erreur est survenue. Veuillez réessayer.");
        setTimeout(() => {
          setResponseMessage("");
        }, 2000);
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi du formulaire :", error);
      setResponseMessage("Impossible de contacter le serveur.");
      setTimeout(() => {
        setResponseMessage("");
      }, 2000);
    }
  };

  return (
    <div className="contactForm">
      <h2>📩 Réserver une table</h2>
      <form onSubmit={handleSubmit}>
        {/* Nom */}
        <label htmlFor="name">Nom :</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        {/* Date */}
        <label htmlFor="date">Date :</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          min={new Date().toISOString().split("T")[0]} // Date actuelle
          required
        />
        {/* Heure */}
        <label htmlFor="time">Heure :</label>
        <select
          id="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            Sélectionnez une heure
          </option>
          <option value="12h">12h</option>
          <option value="12h15">12h15</option>
          <option value="12h30">12h30</option>
          <option value="19h">19h</option>
          <option value="19h30">19h30</option>
        </select>

        {/* Nombre de personnes */}
        <label htmlFor="people">Nombre de personnes :</label>
        <input
          type="number"
          id="people"
          name="people"
          value={formData.people}
          onChange={handleChange}
          min={1}
          max={8}
          required
        />
        <label htmlFor="message">Message :</label>
        <input
          type="text"
          id="message"
          name="message"
          value={formData.message}
          placeholder="Ajoutez des précisions ou des demandes spécifiques si nécessaire."
          onChange={handleChange}
        />
        <button type="submit">Réserver</button>
      </form>
      {responseMessage && <p className="messagePopUp">{responseMessage}</p>}
    </div>
  );
};

export const Reserver: React.FC = () => {
  return (
    <div className="reserver">
      <ReservationDetails />
      <ContactInfo />
      <OnlineReservation />
      <AnnexReservation />
      <ContactForm />
      <NavBar />
    </div>
  );
};
