import sqlite3

# Chemin vers la base de données
db_path = "reservations.db"

# Connexion à la base de données
conn = sqlite3.connect(db_path)
cursor = conn.cursor()

# Affiche les tables disponibles
cursor.execute("SELECT name FROM sqlite_master WHERE type='table';")
tables = cursor.fetchall()
print("Tables disponibles :", tables)

# Affiche le contenu de la table reservations
cursor.execute("SELECT * FROM reservations;")
rows = cursor.fetchall()
print("Contenu de la table reservations :")
for row in rows:
    print(row)

# Ferme la connexion
conn.close()