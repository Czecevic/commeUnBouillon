import { useTranslation } from "react-i18next";
import { imageMap } from "../../locales/imageMap";
export const MenuSection = ({ category }: { category: string }) => {
  const { t } = useTranslation();

  // Get the menu items from the translation file
  const plats = t(`menu.${category}`, { returnObjects: true }) as {
    nom: string;
    prix: string;
    image: string;
  }[];

  return (
    <div className="menu-section">
      <ul>
        {plats.map((plat, index) => (
          <li key={index} className="menu-item">
            {(() => {
              const src = plat.image ? imageMap[plat.image] : undefined;
              if (!src)
                console.warn("Image introuvable pour", plat.image, plat);
              return src ? (
                <img
                  loading="lazy"
                  src={src}
                  alt={plat.nom ?? "menu item"}
                  className="menu-item-image"
                />
              ) : (
                <div className="menu-item-image no-image" aria-hidden>
                  Image manquante
                </div>
              );
            })()}
            <div className="menu-item-details">
              <h3>{plat.nom}</h3>
              <p>{plat.prix}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
