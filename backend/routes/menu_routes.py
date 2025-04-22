from fastapi import APIRouter, HTTPException, Depends, File, UploadFile, Form
from sqlalchemy.orm import Session
from typing import List
import os

from models import Plat
from schemas import PlatResponse
from database import get_menu_db

menu_router = APIRouter()

@menu_router.get("/", response_model=List[PlatResponse])
def get_menu(db: Session = Depends(get_menu_db)):
    return db.query(Plat).all()

@menu_router.post("/", response_model=PlatResponse)
def create_plat(
    nom: str = Form(...),
    prix: str = Form(...),
    category: str = Form(...),
    image: UploadFile = File(None),
    db: Session = Depends(get_menu_db),
):
    # Définir le chemin du dossier des images
    image_folder = "images"
    os.makedirs(image_folder, exist_ok=True)  # Crée le dossier s'il n'existe pas

    # Vérifie si un fichier image est fourni
    if image:
        image_path = os.path.join(image_folder, image.filename)
        try:
            with open(image_path, "wb") as f:
                f.write(image.file.read())
        except Exception as e:
            raise HTTPException(status_code=500, detail=f"Erreur lors de l'enregistrement de l'image : {e}")

    # Enregistre le chemin relatif de l'image dans la base de données
    relative_image_path = image.filename if image else "default-image.jpg"
    new_plat = Plat(nom=nom, prix=prix, category=category, image=relative_image_path)
    db.add(new_plat)
    db.commit()
    db.refresh(new_plat)
    return new_plat

@menu_router.put("/{plat_id}", response_model=PlatResponse)
def update_plat(
    plat_id: int,
    nom: str = Form(None),
    prix: str = Form(None),
    category: str = Form(None),
    image: UploadFile = File(None),
    db: Session = Depends(get_menu_db),
):
    plat = db.query(Plat).filter(Plat.id == plat_id).first()
    if not plat:
        raise HTTPException(status_code=404, detail="Plat non trouvé")

    # Mise à jour des champs texte
    if nom:
        plat.nom = nom
    if prix:
        plat.prix = prix
    if category:
        plat.category = category

    # Gestion de l'image
    if image:
        image_folder = "images"
        os.makedirs(image_folder, exist_ok=True)  # Crée le dossier s'il n'existe pas

        # Supprime l'ancienne image si elle existe
        if plat.image and os.path.exists(os.path.join(image_folder, plat.image)):
            os.remove(os.path.join(image_folder, plat.image))

        # Enregistre la nouvelle image
        image_path = os.path.join(image_folder, image.filename)
        try:
            with open(image_path, "wb") as f:
                f.write(image.file.read())
            plat.image = image.filename  # Met à jour le chemin de l'image dans la base de données
        except Exception as e:
            raise HTTPException(status_code=500, detail=f"Erreur lors de l'enregistrement de l'image : {e}")

    db.commit()
    db.refresh(plat)
    return plat

@menu_router.delete("/{plat_id}", response_model=dict)
def delete_plat(plat_id: int, db: Session = Depends(get_menu_db)):
    plat = db.query(Plat).filter(Plat.id == plat_id).first()
    if not plat:
        raise HTTPException(status_code=404, detail="Plat non trouvé")
    db.delete(plat)
    db.commit()
    return {"message": f"Plat avec ID {plat_id} supprimé"}