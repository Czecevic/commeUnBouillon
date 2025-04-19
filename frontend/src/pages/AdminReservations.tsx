import React, { useEffect, useState } from "react";

type Reservation = {
  id: number;
  name: string;
  date: string;
  time: string;
  message: string | null;
  people: number;
};

export const AdminReservations: React.FC = () => {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Récupère les réservations depuis le backend
    const fetchReservations = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/reservations");
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des réservations.");
        }
        const data = await response.json();
        setReservations(data);
      } catch (err: any) {
        setError(err.message);
      }
    };

    fetchReservations();
  }, []);

  const handleDelete = async (id: number) => {
    if (
      !window.confirm("Êtes-vous sûr de vouloir supprimer cette réservation ?")
    ) {
      return;
    }

    try {
      const response = await fetch(`http://127.0.0.1:8000/reservation/${id}`, {
        // Correction ici
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Erreur lors de la suppression de la réservation.");
      }

      // Met à jour l'état pour retirer la réservation supprimée
      setReservations((prevReservations) =>
        prevReservations.filter((reservation) => reservation.id !== id)
      );
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="admin-reservations">
      <h1>Liste des Réservations</h1>
      {error && <p className="error">{error}</p>}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Date</th>
            <th>Heure</th>
            <th>Message</th>
            <th>Nombre de personnes</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((reservation) => (
            <tr key={reservation.id}>
              <td>{reservation.id}</td>
              <td>{reservation.name}</td>
              <td>{reservation.date}</td>
              <td>{reservation.time}</td>
              <td>{reservation.message || "N/A"}</td>
              <td>{reservation.people}</td>
              <td>
                <button
                  onClick={() => handleDelete(reservation.id)}
                  style={{ color: "red", cursor: "pointer" }}
                >
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
