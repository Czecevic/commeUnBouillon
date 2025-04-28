import { MenuSectionProps } from "../../../interfaces";
import { PlatCard } from "./PlatCard";

export const MenuSection: React.FC<MenuSectionProps> = ({ title, plats }) => (
  <section className="menu-section">
    <h2>{title}</h2>
    <div className="plat-list">
      {plats.map((plat) => (
        <PlatCard key={plat.id} {...plat} />
      ))}
    </div>
  </section>
);
