import React, { useState } from "react";
import { FormField } from "../molecules/FormField";
import { Button } from "../atoms/Button";
import { Plat } from "../../data/menuData";

export const AddPlatForm: React.FC<{ onAdd: (plat: Plat) => void }> = ({
  onAdd,
}) => {
  const [formData, setFormData] = useState({ nom: "", prix: "", image: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:8000/menu", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const newPlat = await response.json();
      onAdd(newPlat);
      setFormData({ nom: "", prix: "", image: "" });
    } catch (error) {
      console.error("Erreur lors de l'ajout du plat :", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-plat-form">
      <FormField
        id="nom"
        name="nom"
        label="Nom"
        type="text"
        placeholder="Nom du plat"
        value={formData.nom}
        onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
        required
      />
      <FormField
        id="prix"
        name="prix"
        label="Prix"
        type="text"
        placeholder="Prix du plat"
        value={formData.prix}
        onChange={(e) => setFormData({ ...formData, prix: e.target.value })}
        required
      />
      <FormField
        id="image"
        name="image"
        label="Image"
        type="text"
        placeholder="URL de l'image"
        value={formData.image}
        onChange={(e) => setFormData({ ...formData, image: e.target.value })}
        required
      />
      <Button
        label="Ajouter"
        variant="submit"
        className="submit-button"
        onClick={() => {}}
      />
    </form>
  );
};
