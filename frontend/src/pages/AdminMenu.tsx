import React, { useEffect, useState } from "react";
import "../index.css";
import { useDropzone } from "react-dropzone";

type Plat = {
  category: string;
  id: number;
  nom: string;
  prix: string;
  image: string;
};

type MenuSectionProps = {
  title: string;
  plats: Plat[];
  onEdit: (plat: Plat) => void;
  onDelete: (id: number) => void;
};

const PlatCard: React.FC<
  Plat & { onEdit: () => void; onDelete: () => void }
> = ({ nom, prix, image, onEdit, onDelete }) => (
  <div className="plat">
    <img src={`/images/${image}`} alt={nom} className="platImage" />
    <div className="platText">
      <h3>{nom}</h3>
      <p>{prix}</p>
      <div className="editButtons">
        <button onClick={onEdit} className="editButton">
          Modifier
        </button>
        <button onClick={onDelete} className="deleteButton">
          Supprimer
        </button>
      </div>
    </div>
  </div>
);

const MenuSection: React.FC<MenuSectionProps> = ({
  title,
  plats,
  onEdit,
  onDelete,
}) => (
  <section className="menu-section">
    <h2>{title}</h2>
    <div className="plat-list">
      {plats.map((plat) => (
        <PlatCard
          key={plat.id}
          {...plat}
          onEdit={() => onEdit(plat)}
          onDelete={() => onDelete(plat.id)}
        />
      ))}
    </div>
  </section>
);

export const AdminMenu: React.FC = () => {
  const [platsEntree, setPlatsEntree] = useState<Plat[]>([]);
  const [platsPrincipal, setPlatsPrincipal] = useState<Plat[]>([]);
  const [desserts, setDesserts] = useState<Plat[]>([]);
  const [formData, setFormData] = useState({
    nom: "",
    prix: "",
    image: "",
    category: "Entrées",
  });
  const [editingPlat, setEditingPlat] = useState<Plat | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);

  const onDrop = (acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      setUploadedImage(file);

      // Prévisualisation de l'image
      const reader = new FileReader();
      reader.onload = () => {
        setFormData({ ...formData, image: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] }, // Accepte uniquement les fichiers image
  });

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/menu");
        const data = await response.json();

        // Vérifiez les données reçues
        console.log("Données reçues :", data);

        // Filtrer les plats par catégorie
        setPlatsEntree(
          data.filter((plat: Plat) => plat.category === "Entrées")
        );
        setPlatsPrincipal(
          data.filter((plat: Plat) => plat.category === "Plats")
        );
        setDesserts(data.filter((plat: Plat) => plat.category === "Desserts"));
      } catch (error) {
        console.error("Erreur lors de la récupération du menu :", error);
      }
    };

    fetchMenu();
  }, []);

  useEffect(() => {
    if (isEditing) {
      document.body.classList.add("popup-open");
    } else {
      document.body.classList.remove("popup-open");
    }
  }, [isEditing]);

  const startEditing = (plat: Plat) => {
    setEditingPlat(plat);
    setFormData({
      nom: plat.nom,
      prix: plat.prix,
      image: plat.image,
      category: plat.category,
    });
    setIsEditing(true);
  };

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
      if (formData.category === "Entrées")
        setPlatsEntree(
          platsEntree.map((plat) =>
            plat.id === updatedPlat.id ? updatedPlat : plat
          )
        );
      if (formData.category === "Plats")
        setPlatsPrincipal(
          platsPrincipal.map((plat) =>
            plat.id === updatedPlat.id ? updatedPlat : plat
          )
        );
      if (formData.category === "Desserts")
        setDesserts(
          desserts.map((plat) =>
            plat.id === updatedPlat.id ? updatedPlat : plat
          )
        );
      setEditingPlat(null);
      setFormData({ nom: "", prix: "", image: "", category: "Entrées" });
      setIsEditing(false);
    } catch (error) {
      console.error("Erreur lors de la mise à jour du plat :", error);
    }
  };

  const handleAddPlat = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("nom", formData.nom);
      formDataToSend.append("prix", formData.prix);
      formDataToSend.append("category", formData.category);
      if (uploadedImage) {
        formDataToSend.append("image", uploadedImage); // Ajoute l'image au formulaire
      }

      const response = await fetch("http://127.0.0.1:8000/menu", {
        method: "POST",
        body: formDataToSend,
      });
      const newPlat = await response.json();

      if (formData.category === "Entrées")
        setPlatsEntree([...platsEntree, newPlat]);
      if (formData.category === "Plats")
        setPlatsPrincipal([...platsPrincipal, newPlat]);
      if (formData.category === "Desserts") setDesserts([...desserts, newPlat]);

      setFormData({ nom: "", prix: "", image: "", category: "Entrées" });
      setUploadedImage(null);
      setIsEditing(false);
    } catch (error) {
      console.error("Erreur lors de l'ajout du plat :", error);
    }
  };

  const handleDeletePlat = async (id: number, category: string) => {
    try {
      await fetch(`http://127.0.0.1:8000/menu/${id}`, {
        method: "DELETE",
      });

      // Supprime le plat de la bonne catégorie
      if (category === "Entrées")
        setPlatsEntree(platsEntree.filter((plat) => plat.id !== id));
      if (category === "Plats")
        setPlatsPrincipal(platsPrincipal.filter((plat) => plat.id !== id));
      if (category === "Desserts")
        setDesserts(desserts.filter((plat) => plat.id !== id));
    } catch (error) {
      console.error("Erreur lors de la suppression du plat :", error);
    }
  };

  return (
    <div className="admin-menu">
      <h1>Gestion du Menu</h1>

      {isEditing && (
        <div className="popup-overlay">
          <div className="popup-content">
            <form
              onSubmit={editingPlat ? handleEditPlat : handleAddPlat}
              className="admin-form-menu"
            >
              <input
                type="text"
                placeholder="Nom"
                value={formData.nom}
                onChange={(e) =>
                  setFormData({ ...formData, nom: e.target.value })
                }
                required
              />
              <input
                type="text"
                placeholder="Prix"
                value={formData.prix}
                onChange={(e) =>
                  setFormData({ ...formData, prix: e.target.value })
                }
                required
              />
              <select
                value={formData.category}
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
              >
                <option value="Entrées">Entrées</option>
                <option value="Plats">Plats</option>
                <option value="Desserts">Desserts</option>
              </select>

              {/* Zone de drag and drop */}
              <div
                {...getRootProps()}
                className={`dropzone ${isDragActive ? "active" : ""}`}
              >
                <input {...getInputProps()} />
                {isDragActive ? (
                  <p>Déposez votre image ici...</p>
                ) : (
                  <p>
                    Glissez-déposez une image ou cliquez pour en sélectionner
                    une
                  </p>
                )}
              </div>

              {/* Prévisualisation de l'image */}
              {formData.image && (
                <div className="image-preview">
                  <img
                    src={formData.image}
                    alt="Prévisualisation"
                    className="preview-image"
                  />
                </div>
              )}

              <button type="submit">
                {editingPlat ? "Modifier" : "Ajouter"}
              </button>
              <button
                onClick={() => {
                  setEditingPlat(null);
                  setIsEditing(false);
                }}
              >
                Annuler
              </button>
            </form>
          </div>
        </div>
      )}

      <div
        className="add-button"
        onClick={() => {
          setEditingPlat(null); // Réinitialise l'état d'édition
          setFormData({ nom: "", prix: "", image: "", category: "Entrées" }); // Réinitialise le formulaire
          setIsEditing(true); // Affiche le formulaire
        }}
      >
        +
      </div>

      <MenuSection
        title="Entrées"
        plats={platsEntree}
        onEdit={startEditing}
        onDelete={(id) => handleDeletePlat(id, "Entrées")}
      />
      <MenuSection
        title="Plats"
        plats={platsPrincipal}
        onEdit={startEditing}
        onDelete={(id) => handleDeletePlat(id, "Plats")}
      />
      <MenuSection
        title="Desserts"
        plats={desserts}
        onEdit={startEditing}
        onDelete={(id) => handleDeletePlat(id, "Desserts")}
      />
    </div>
  );
};
