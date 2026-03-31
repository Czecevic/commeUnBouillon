import type { Plat } from "../../../interfaces";

export const PlatCard = ({ nom, prix, image }: Plat) => (
  <div className="plat">
    <img
      loading="lazy"
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
