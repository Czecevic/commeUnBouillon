from sqlalchemy import Column, Integer, String
from database import Base

class Reservation(Base):
    __tablename__ = "reservations"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    date = Column(String)
    time = Column(String)
    message = Column(String, nullable=True)
    people = Column(Integer)

class Plat(Base):
    __tablename__ = "plats"
    id = Column(Integer, primary_key=True, index=True)
    nom = Column(String, index=True)
    prix = Column(String)
    image = Column(String)
    category = Column(String, default="Entrées")