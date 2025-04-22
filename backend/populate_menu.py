from sqlalchemy.orm import Session
from database import MenuSessionLocal
from models import Plat  # Importez directement depuis models.py

# Données extraites de menuData.ts
plats_data = [
# Entrées
    {"nom": "Oeuf dur mayonnaise", "prix": "3,10 €", "image": "oeuf-mayonnaise.jpg", "category": "Entrées"},
    {"nom": "Poireaux vinaigrette", "prix": "3,60 €", "image": "poireaux.png", "category": "Entrées"},
    {"nom": "Carottes râpées vinaigrette", "prix": "2,90 €", "image": "poireaux.png", "category": "Entrées"},
    {"nom": "Rillettes de poisson", "prix": "4,40 €", "image": "poisson.avif", "category": "Entrées"},
    {"nom": "Terrine de campagne", "prix": "4,20 €", "image": "terrine.avif", "category": "Entrées"},
    {"nom": "Saucisson sec", "prix": "3,70 €", "image": "saucisson sec.webp", "category": "Entrées"},
    {"nom": "Camembert pané au miel", "prix": "4,90 €", "image": "camembert.webp", "category": "Entrées"},
    {"nom": "Oeuf en meurette", "prix": "5,90 €", "image": "meurette.webp", "category": "Entrées"},
    {"nom": "Soupe à l’oignon", "prix": "5,10 €", "image": "soupe.webp", "category": "Entrées"},

    # Plats principaux
    {"nom": "Escalope de saumon, sauce poireaux", "prix": "13,40 €", "image": "saumon.webp", "category": "Plats"},
    {"nom": "Le tradition (tartare), frites & salade", "prix": "11,40 €", "image": "tradition.avif", "category": "Plats"},
    {"nom": "Le Bouillon (tartare + tomme + poivrons)", "prix": "11,90 €", "image": "bouillon.avif", "category": "Plats"},
    {"nom": "Saucisse au couteau, purée, sauce oignons", "prix": "10,90 €", "image": "saucisse.avif", "category": "Plats"},
    {"nom": "Hampe de bœuf, sauce bleu, frites", "prix": "11,90 €", "image": "hampe.webp", "category": "Plats"},
    {"nom": "Sauté de porc aux épices", "prix": "12,90 €", "image": "hampe.webp", "category": "Plats"},
    {"nom": "Parmentier de canard, salade", "prix": "13,90 €", "image": "hampe.webp", "category": "Plats"},
    {"nom": "Steak mayo curry, frites", "prix": "10,90 €", "image": "steak haché.avif", "category": "Plats"},
    {"nom": "Poulet, crème de maïs, purée", "prix": "11,90 €", "image": "poulet.webp", "category": "Plats"},
    {"nom": "Carbonade flamande, frites", "prix": "12,90 €", "image": "carbonade.webp", "category": "Plats"},
    {"nom": "Coquillettes et crumble de légumes", "prix": "11,90 €", "image": "carbonade.webp", "category": "Plats"},

    # Desserts
    {"nom": "Pot de crème au chocolat", "prix": "3,90 €", "image": "chocolat.webp", "category": "Desserts"},
    {"nom": "Crumble aux pommes", "prix": "3,90 €", "image": "crumble.webp", "category": "Desserts"},
    {"nom": "Île flottante", "prix": "4,30 €", "image": "ileFlo.webp", "category": "Desserts"},
    {"nom": "Crème caramel", "prix": "3,90 €", "image": "caramel.webp", "category": "Desserts"},
    {"nom": "Verrine marron/pain d'épices/café", "prix": "4,90 €", "image": "caramel.webp", "category": "Desserts"},
    {"nom": "Assiette de Brie de Meaux", "prix": "4,10 €", "image": "caramel.webp", "category": "Desserts"},
]

# Insérer les données dans la base de données
def populate_menu():
    db: Session = MenuSessionLocal()
    try:
        for plat_data in plats_data:
            # Vérifiez si le plat existe déjà
            existing_plat = db.query(Plat).filter(Plat.nom == plat_data["nom"]).first()
            if existing_plat:
                print(f"Le plat '{plat_data['nom']}' existe déjà. Ignoré.")
                continue

            plat = Plat(**plat_data)
            db.add(plat)
        db.commit()
        print("Données insérées avec succès dans la base de données.")
    except Exception as e:
        print(f"Erreur lors de l'insertion des données : {e}")
        db.rollback()
    finally:
        db.close()

if __name__ == "__main__":
    populate_menu()