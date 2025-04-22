from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# URL de connexion à la base de données SQLite pour les réservations
RESERVATIONS_DATABASE_URL = "sqlite:///./reservations.db"

# URL de connexion à la base de données SQLite pour le menu
MENU_DATABASE_URL = "sqlite:///./menu.db"

# Crée le moteur de la base de données pour les réservations
reservations_engine = create_engine(RESERVATIONS_DATABASE_URL, connect_args={"check_same_thread": False})

# Crée le moteur de la base de données pour le menu
menu_engine = create_engine(MENU_DATABASE_URL, connect_args={"check_same_thread": False})

# Crée une session locale pour interagir avec la base de données des réservations
ReservationsSessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=reservations_engine)

# Crée une session locale pour interagir avec la base de données du menu
MenuSessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=menu_engine)

# Classe de base pour les modèles SQLAlchemy
Base = declarative_base()

# Fonction pour obtenir une session pour la base de données des réservations
def get_reservations_db():
    db = ReservationsSessionLocal()
    try:
        yield db
    finally:
        db.close()

# Fonction pour obtenir une session pour la base de données du menu
def get_menu_db():
    db = MenuSessionLocal()
    try:
        yield db
    finally:
        db.close()