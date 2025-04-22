from models import Reservation  # Corrigez l'import pour pointer vers models.py
from schemas import ReservationForm
from database import get_reservations_db
from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy.orm import Session
from typing import List

reservations_router = APIRouter()

@reservations_router.post("/", response_model=dict)
async def create_reservation(form: ReservationForm, db: Session = Depends(get_reservations_db)):
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

@reservations_router.get("/", response_model=List[ReservationForm])
async def get_reservations(db: Session = Depends(get_reservations_db)):
    return db.query(Reservation).all()

@reservations_router.get("/{reservation_id}", response_model=ReservationForm)
async def get_reservation(reservation_id: int, db: Session = Depends(get_reservations_db)):
    reservation = db.query(Reservation).filter(Reservation.id == reservation_id).first()
    if not reservation:
        raise HTTPException(status_code=404, detail="Réservation non trouvée.")
    return reservation

@reservations_router.put("/{reservation_id}", response_model=ReservationForm)
async def update_reservation(reservation_id: int, form: ReservationForm, db: Session = Depends(get_reservations_db)):
    reservation = db.query(Reservation).filter(Reservation.id == reservation_id).first()
    if not reservation:
        raise HTTPException(status_code=404, detail="Réservation non trouvée.")
    for key, value in form.dict().items():
        setattr(reservation, key, value)
    db.commit()
    db.refresh(reservation)
    return reservation

@reservations_router.delete("/{reservation_id}", response_model=dict)
async def delete_reservation(reservation_id: int, db: Session = Depends(get_reservations_db)):
    reservation = db.query(Reservation).filter(Reservation.id == reservation_id).first()
    if not reservation:
        raise HTTPException(status_code=404, detail="Réservation non trouvée.")
    db.delete(reservation)
    db.commit()
    return {"message": f"Réservation avec ID {reservation_id} supprimée."}