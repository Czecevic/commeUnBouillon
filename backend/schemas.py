from pydantic import BaseModel, Field
from typing import Optional

class ReservationForm(BaseModel):
    id: Optional[int] = None
    name: str = Field(..., example="Jean Dupont")
    date: str = Field(..., example="2025-04-20")
    time: str = Field(..., example="12h30")
    message: Optional[str] = Field(None, example="Réservation pour un anniversaire")
    people: int = Field(..., ge=1, le=8, example=4)

class PlatCreate(BaseModel):
    nom: str
    prix: str
    image: Optional[str] = None
    category: str

class PlatResponse(PlatCreate):
    id: int

    class Config:
        from_attributes = True # Utilisé pour la sérialisation