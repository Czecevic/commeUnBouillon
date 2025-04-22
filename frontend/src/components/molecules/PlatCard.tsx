import { Plat } from "../../../interfaces";

export const PlatCard: React.FC<Plat> = ({ nom, prix, image }) => (
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
    </div>
  </div>
);
