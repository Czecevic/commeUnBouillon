import React, { useState } from "react";
import { FormField } from "../molecules/FormField";
import { Button } from "../atoms/Button";
import { Plat } from "../../data/menuData";

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
      if (!response.ok) {
        throw new Error("Erreur lors de la mise à jour du plat.");
      }
      const updatedPlat = await response.json();
      onUpdate(updatedPlat);
    } catch (error) {
      console.error("Erreur lors de la mise à jour du plat :", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="edit-plat-form">
      <FormField
        label="Nom"
        type="text"
        placeholder="Nom du plat"
        value={formData.nom}
        onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
        required
        id={""}
        name={""}
      />
      <FormField
        label="Prix"
        type="text"
        placeholder="Prix du plat"
        value={formData.prix}
        onChange={(e) => setFormData({ ...formData, prix: e.target.value })}
        required
        id={""}
        name={""}
      />
      <FormField
        label="Image"
        type="text"
        placeholder="URL de l'image"
        value={formData.image}
        onChange={(e) => setFormData({ ...formData, image: e.target.value })}
        required
        id={""}
        name={""}
      />
      <div className="form-field">
        <label htmlFor="category">Catégorie :</label>
        <select
          id="category"
          name="category"
          value={formData.category}
          onChange={(e) =>
            setFormData({ ...formData, category: e.target.value })
          }
          required
        >
          <option value="Entrées">Entrées</option>
          <option value="Plats">Plats</option>
          <option value="Desserts">Desserts</option>
        </select>
      </div>
      <Button
        label="Mettre à jour"
        type="submit"
        className="update-button"
        onClick={() => {}}
      />
    </form>
  );
};
