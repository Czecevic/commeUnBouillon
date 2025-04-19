import React, { useState } from "react";
import { Plat } from "../data/menuData";

export const EditPlatForm: React.FC<{
  plat: Plat;
  onUpdate: (plat: Plat) => void;
}> = ({ plat, onUpdate }) => {
  const [formData, setFormData] = useState(plat);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://127.0.0.1:8000/menu/${plat.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const updatedPlat = await response.json();
      onUpdate(updatedPlat);
    } catch (error) {
      console.error("Erreur lors de la mise à jour du plat :", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={formData.nom}
        onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
        required
      />
      <input
        type="text"
        value={formData.prix}
        onChange={(e) => setFormData({ ...formData, prix: e.target.value })}
        required
      />
      <input
        type="text"
        value={formData.image}
        onChange={(e) => setFormData({ ...formData, image: e.target.value })}
        required
      />
      <button type="submit">Mettre à jour</button>
    </form>
  );
};
