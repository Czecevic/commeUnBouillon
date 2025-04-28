import React, { useEffect, useState } from "react";
import "../index.css";
import { useDropzone } from "react-dropzone";
import { PlatAdmin } from "../../interfaces";
import { MenuSectionAdmin } from "../components/molecules/MenuSectionAdmin";

export const AdminMenu: React.FC = () => {
  const [platsEntree, setPlatsEntree] = useState<PlatAdmin[]>([]);
  const [platsPrincipal, setPlatsPrincipal] = useState<PlatAdmin[]>([]);
  const [desserts, setDesserts] = useState<PlatAdmin[]>([]);
  const [formData, setFormData] = useState({
    nom: "",
    prix: "",
    image: "",
    category: "Entrées",
  });
  const [editingPlat, setEditingPlat] = useState<PlatAdmin | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);

  const resetForm = () => {
    setFormData({ nom: "", prix: "", image: "", category: "Entrées" });
    setUploadedImage(null);
    setEditingPlat(null);
    setIsEditing(false);
  };

  const onDrop = (acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      setUploadedImage(file);

      const reader = new FileReader();
      reader.onload = () => {
        setFormData({ ...formData, image: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
  });

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/menu");
        const data = await response.json();

        setPlatsEntree(
          data.filter((plat: PlatAdmin) => plat.category === "Entrées")
        );
        setPlatsPrincipal(
          data.filter((plat: PlatAdmin) => plat.category === "Plats")
        );
        setDesserts(
          data.filter((plat: PlatAdmin) => plat.category === "Desserts")
        );
      } catch (error) {
        console.error("Erreur lors de la récupération du menu :", error);
      }
    };

    fetchMenu();
  }, []);

  useEffect(() => {
    document.body.classList.toggle("popup-open", isEditing);
  }, [isEditing]);

  const handleSubmit = async (e: React.FormEvent, isEdit: boolean) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("nom", formData.nom);
      formDataToSend.append("prix", formData.prix);
      formDataToSend.append("category", formData.category);
      if (uploadedImage) {
        formDataToSend.append("image", uploadedImage);
      }

      const url = isEdit
        ? `http://127.0.0.1:8000/menu/${editingPlat?.id}`
        : "http://127.0.0.1:8000/menu";
      const method = isEdit ? "PUT" : "POST";

      const response = await fetch(url, { method, body: formDataToSend });
      const updatedPlat = await response.json();

      const updateCategory = (plats: PlatAdmin[]) =>
        plats.map((plat) => (plat.id === updatedPlat.id ? updatedPlat : plat));

      if (formData.category === "Entrées") {
        setPlatsEntree(
          isEdit ? updateCategory(platsEntree) : [...platsEntree, updatedPlat]
        );
      } else if (formData.category === "Plats") {
        setPlatsPrincipal(
          isEdit
            ? updateCategory(platsPrincipal)
            : [...platsPrincipal, updatedPlat]
        );
      } else if (formData.category === "Desserts") {
        setDesserts(
          isEdit ? updateCategory(desserts) : [...desserts, updatedPlat]
        );
      }

      resetForm();
    } catch (error) {
      console.error("Erreur lors de l'envoi du formulaire :", error);
    }
  };

  const handleDeletePlat = async (id: number, category: string) => {
    try {
      await fetch(`http://127.0.0.1:8000/menu/${id}`, { method: "DELETE" });

      const deleteFromCategory = (plats: PlatAdmin[]) =>
        plats.filter((plat) => plat.id !== id);

      if (category === "Entrées")
        setPlatsEntree(deleteFromCategory(platsEntree));
      if (category === "Plats")
        setPlatsPrincipal(deleteFromCategory(platsPrincipal));
      if (category === "Desserts") setDesserts(deleteFromCategory(desserts));
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
              onSubmit={(e) => handleSubmit(e, !!editingPlat)}
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

              {formData.image && (
                <div className="image-preview">
                  <img
                    src={
                      formData.image.startsWith("data:")
                        ? formData.image
                        : `http://127.0.0.1:8000/images/${formData.image}`
                    }
                    alt="Prévisualisation"
                    className="preview-image"
                  />
                </div>
              )}

              <button type="submit">
                {editingPlat ? "Modifier" : "Ajouter"}
              </button>
              <button type="button" onClick={resetForm}>
                Annuler
              </button>
            </form>
          </div>
        </div>
      )}

      <div
        className="add-button"
        onClick={() => {
          resetForm();
          setIsEditing(true);
        }}
      >
        +
      </div>

      <MenuSectionAdmin
        title="Entrées"
        plats={platsEntree}
        onEdit={(plat) => {
          setEditingPlat(plat);
          setFormData({
            nom: plat.nom,
            prix: plat.prix,
            image: plat.image,
            category: plat.category,
          });
          setIsEditing(true);
        }}
        onDelete={(id) => handleDeletePlat(id, "Entrées")}
      />
      <MenuSectionAdmin
        title="Plats"
        plats={platsPrincipal}
        onEdit={(plat) => {
          setEditingPlat(plat);
          setFormData({
            nom: plat.nom,
            prix: plat.prix,
            image: plat.image,
            category: plat.category,
          });
          setIsEditing(true);
        }}
        onDelete={(id) => handleDeletePlat(id, "Plats")}
      />
      <MenuSectionAdmin
        title="Desserts"
        plats={desserts}
        onEdit={(plat) => {
          setEditingPlat(plat);
          setFormData({
            nom: plat.nom,
            prix: plat.prix,
            image: plat.image,
            category: plat.category,
          });
          setIsEditing(true);
        }}
        onDelete={(id) => handleDeletePlat(id, "Desserts")}
      />
    </div>
  );
};
