import React, { useEffect, useState } from "react";

type Plat = {
  id: number;
  nom: string;
  prix: string;
  image: string;
};

export const AdminMenu: React.FC = () => {
  const [plats, setPlats] = useState<Plat[]>([]);
  const [formData, setFormData] = useState({ nom: "", prix: "", image: "" });
  const [editingPlat, setEditingPlat] = useState<Plat | null>(null);

  // Récupère les plats depuis le backend
  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/menu");
        const data = await response.json();
        setPlats(data);
      } catch (error) {
        console.error("Erreur lors de la récupération du menu :", error);
      }
    };

    fetchMenu();
  }, []);

  // Ajouter un nouveau plat
  const handleAddPlat = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:8000/menu", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const newPlat = await response.json();
      setPlats([...plats, newPlat]);
      setFormData({ nom: "", prix: "", image: "" });
    } catch (error) {
      console.error("Erreur lors de l'ajout du plat :", error);
    }
  };

  // Modifier un plat existant
  const handleEditPlat = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingPlat) return;

    try {
      const response = await fetch(
        `http://127.0.0.1:8000/menu/${editingPlat.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      const updatedPlat = await response.json();
      setPlats(
        plats.map((plat) => (plat.id === updatedPlat.id ? updatedPlat : plat))
      );
      setEditingPlat(null);
      setFormData({ nom: "", prix: "", image: "" });
    } catch (error) {
      console.error("Erreur lors de la mise à jour du plat :", error);
    }
  };

  // Supprimer un plat
  const handleDeletePlat = async (id: number) => {
    if (!window.confirm("Êtes-vous sûr de vouloir supprimer ce plat ?")) return;

    try {
      await fetch(`http://127.0.0.1:8000/menu/${id}`, { method: "DELETE" });
      setPlats(plats.filter((plat) => plat.id !== id));
    } catch (error) {
      console.error("Erreur lors de la suppression du plat :", error);
    }
  };

  // Pré-remplir le formulaire pour modifier un plat
  const startEditing = (plat: Plat) => {
    setEditingPlat(plat);
    setFormData({ nom: plat.nom, prix: plat.prix, image: plat.image });
  };

  return (
    <div className="admin-menu">
      <h1>Gestion du Menu</h1>

      {/* Formulaire pour ajouter ou modifier un plat */}
      <form onSubmit={editingPlat ? handleEditPlat : handleAddPlat}>
        <input
          type="text"
          placeholder="Nom"
          value={formData.nom}
          onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Prix"
          value={formData.prix}
          onChange={(e) => setFormData({ ...formData, prix: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="URL de l'image"
          value={formData.image}
          onChange={(e) => setFormData({ ...formData, image: e.target.value })}
          required
        />
        <button type="submit">{editingPlat ? "Modifier" : "Ajouter"}</button>
        {editingPlat && (
          <button onClick={() => setEditingPlat(null)}>Annuler</button>
        )}
      </form>

      {/* Liste des plats */}
      <div className="menu-list">
        {plats.map((plat) => (
          <div key={plat.id} className="plat-item">
            <img src={plat.image} alt={plat.nom} />
            <h3>{plat.nom}</h3>
            <p>{plat.prix}</p>
            <button onClick={() => startEditing(plat)}>Modifier</button>
            <button onClick={() => handleDeletePlat(plat.id)}>Supprimer</button>
          </div>
        ))}
      </div>
    </div>
  );
};
