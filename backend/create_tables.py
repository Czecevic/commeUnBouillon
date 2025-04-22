from database import Base, reservations_engine, menu_engine

# Supprime les tables dans reservations.db
Base.metadata.drop_all(bind=reservations_engine)

# Supprime les tables dans menu.db
Base.metadata.drop_all(bind=menu_engine)

# Crée les tables dans reservations.db
Base.metadata.create_all(bind=reservations_engine)

# Crée les tables dans menu.db
Base.metadata.create_all(bind=menu_engine)

print("Tables réinitialisées avec succès dans reservations.db et menu.db.")