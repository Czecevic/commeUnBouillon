import { Plat } from "../../../interfaces";

export const PlatCardAdmin: React.FC<
  Plat & { onEdit: () => void; onDelete: () => void }
> = ({ nom, prix, image, onEdit, onDelete }) => (
  <div className="plat">
    <img
      src={
        image.startsWith("http")
          ? image
          : `http://127.0.0.1:8000/images/${image}`
      }
      alt={nom}
      className="platImage"
    />
    <div className="platText">
      <h3>{nom}</h3>
      <p>{prix} €</p>
      <div className="editButtons">
        <button onClick={onEdit} className="editButton">
          Modifier
        </button>
        <button onClick={onDelete} className="deleteButton">
          Supprimer
        </button>
      </div>
    </div>
  </div>
);
