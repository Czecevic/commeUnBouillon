from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# URL de connexion à la base de données SQLite
DATABASE_URL = "sqlite:///./reservations.db"

# Crée le moteur de la base de données
engine = create_engine(DATABASE_URL, connect_args={"check_same_thread": False})

# Crée une session locale pour interagir avec la base de données
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Classe de base pour les modèles SQLAlchemy
Base = declarative_base()