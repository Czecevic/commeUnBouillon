import React, { useState } from "react";
import { FormField } from "../molecules/FormField";
import { Button } from "../atoms/Button";

export const ContactForm: React.FC = () => {
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
        setFormData({ name: "", date: "", time: "", message: "", people: 1 });
        setTimeout(() => setResponseMessage(""), 2000);
      } else {
        setResponseMessage("Une erreur est survenue. Veuillez réessayer.");
        setTimeout(() => setResponseMessage(""), 2000);
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi du formulaire :", error);
      setResponseMessage("Impossible de contacter le serveur.");
      setTimeout(() => setResponseMessage(""), 2000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <FormField
        label="Nom"
        id="name"
        name="name"
        type="text"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <FormField
        label="Date"
        id="date"
        name="date"
        type="date"
        value={formData.date}
        onChange={handleChange}
        min={new Date().toISOString().split("T")[0]}
        required
      />
      <FormField
        label="Heure"
        id="time"
        name="time"
        type="select"
        value={formData.time}
        onChange={handleChange}
        required
      />
      <FormField
        label="Nombre de personnes"
        id="people"
        name="people"
        type="number"
        value={formData.people}
        onChange={handleChange}
        min={1}
        max={8}
        required
      />
      <FormField
        label="Message"
        id="message"
        name="message"
        type="text"
        value={formData.message}
        onChange={handleChange}
        placeholder="Ajoutez des précisions ou des demandes spécifiques."
      />
      <Button label="Réserver" type="submit" onClick={() => {}} />
      {responseMessage && <p className="response-message">{responseMessage}</p>}
    </form>
  );
};
