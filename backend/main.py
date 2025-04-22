from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
import os

from database import Base, reservations_engine, menu_engine
from routes.reservations_routes import reservations_router
from routes.menu_routes import menu_router

# Initialisation de l'application FastAPI
app = FastAPI()

# ==========================
# Configuration CORS
# ==========================
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",  # Origine du frontend en développement
        "http://localhost:3000",  # Si vous utilisez un autre port pour le frontend
        "https://commeunbouillon.netlify.app",  # Origine en production
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ==========================
# Création des tables
# ==========================
Base.metadata.create_all(bind=reservations_engine)
Base.metadata.create_all(bind=menu_engine)

# Monte le dossier "images" pour servir les fichiers statiques
app.mount("/images", StaticFiles(directory="images"), name="images")

# ==========================
# Inclusion des routes
# ==========================
app.include_router(reservations_router, prefix="/reservation", tags=["Reservations"])
app.include_router(menu_router, prefix="/menu", tags=["Menu"])