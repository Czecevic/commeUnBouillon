from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from pydantic import BaseModel, Field
from typing import List
from typing import Optional
from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import Session
from database import Base, engine, SessionLocal

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Autorise toutes les origines (à restreindre en production)
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Modèle pour valider les données de réservation
class ReservationForm(BaseModel):
    id: Optional[int] = None  # ID de la réservation (doit être positif)
    name: str = Field(..., example="Jean Dupont")
    date: str = Field(..., example="2025-04-20")  # Format ISO 8601 (YYYY-MM-DD)
    time: str = Field(..., example="12h30")  # Heure précise
    message: str = Field(None, example="Réservation pour un anniversaire")  # Message facultatif
    people: int = Field(..., ge=1, le=8, example=4)  # Nombre de personnes (1 à 8)

# Stockage temporaire des réservations (en mémoire)
reservations: List[ReservationForm] = []

class Reservation(Base):
    __tablename__ = "reservations"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    date = Column(String)
    time = Column(String)
    message = Column(String, nullable=True)
    people = Column(Integer)

# Modèle SQLAlchemy pour les plats
class Plat(Base):
    __tablename__ = "plats"
    id = Column(Integer, primary_key=True, index=True)
    nom = Column(String, index=True)
    prix = Column(String)
    image = Column(String)

# Crée la table dans la base de données
Base.metadata.create_all(bind=engine)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.post("/reservation")
async def create_reservation(form: ReservationForm, db: Session = Depends(get_db)):
    reservation = Reservation(
        name=form.name,
        date=form.date,
        time=form.time,
        message=form.message,
        people=form.people
    )
    db.add(reservation)
    db.commit()
    db.refresh(reservation)
    return {"message": "Réservation enregistrée !", "id": reservation.id}

@app.get("/reservations", response_model=List[ReservationForm])
async def get_reservations(db: Session = Depends(get_db)):
    reservations = db.query(Reservation).all()
    print("Réservations récupérées :", reservations)  # Log pour débogage
    return reservations

@app.get("/reservation/{reservation_id}", response_model=ReservationForm)
async def get_reservation(reservation_id: int):
    # Recherche une réservation par ID
    for reservation in reservations:
        if reservation.id == reservation_id:
            return reservation
    raise HTTPException(status_code=404, detail="Réservation non trouvée.")

@app.delete("/reservation/{reservation_id}")
async def delete_reservation(reservation_id: int, db: Session = Depends(get_db)):
    # Recherche la réservation par ID
    reservation = db.query(Reservation).filter(Reservation.id == reservation_id).first()
    if not reservation:
        raise HTTPException(status_code=404, detail="Réservation non trouvée.")
    
    # Supprime la réservation
    db.delete(reservation)
    db.commit()
    return {"message": f"Réservation avec ID {reservation_id} supprimée."}

@app.put("/reservation/{reservation_id}")
async def update_reservation(reservation_id: int, form: ReservationForm):
    # Met à jour une réservation existante
    for index, reservation in enumerate(reservations):
        if reservation.id == reservation_id:
            reservations[index] = form
            print(f"✏️ Réservation avec ID {reservation_id} mise à jour : {form}")
            return JSONResponse(content={"message": f"Réservation avec ID {reservation_id} mise à jour."})
    raise HTTPException(status_code=404, detail="Réservation non trouvée.")

# Route pour récupérer tous les plats
@app.get("/menu", response_model=List[Plat])
def get_menu(db: Session = Depends(get_db)):
    return db.query(Plat).all()

# Route pour ajouter un plat
@app.post("/menu", response_model=Plat)
def create_plat(plat: Plat, db: Session = Depends(get_db)):
    db.add(plat)
    db.commit()
    db.refresh(plat)
    return plat

# Route pour mettre à jour un plat
@app.put("/menu/{plat_id}", response_model=Plat)
def update_plat(plat_id: int, updated_plat: Plat, db: Session = Depends(get_db)):
    plat = db.query(Plat).filter(Plat.id == plat_id).first()
    if not plat:
        raise HTTPException(status_code=404, detail="Plat non trouvé")
    plat.nom = updated_plat.nom
    plat.prix = updated_plat.prix
    plat.image = updated_plat.image
    db.commit()
    db.refresh(plat)
    return plat

# Route pour supprimer un plat
@app.delete("/menu/{plat_id}")
def delete_plat(plat_id: int, db: Session = Depends(get_db)):
    plat = db.query(Plat).filter(Plat.id == plat_id).first()
    if not plat:
        raise HTTPException(status_code=404, detail="Plat non trouvé")
    db.delete(plat)
    db.commit()
    return {"message": f"Plat avec ID {plat_id} supprimé"}