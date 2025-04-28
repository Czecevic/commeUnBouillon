import { MenuSectionAdminProps } from "../../../interfaces";
import { PlatCardAdmin } from "./PlatCardAdmin";

export const MenuSectionAdmin: React.FC<MenuSectionAdminProps> = ({
  title,
  plats,
  onEdit,
  onDelete,
}) => (
  <section className="menu-section">
    <h2>{title}</h2>
    <div className="plat-list">
      {plats.map((plat) => (
        <PlatCardAdmin
          key={plat.id}
          {...plat}
          onEdit={() => onEdit(plat)}
          onDelete={() => onDelete(plat.id)}
        />
      ))}
    </div>
  </section>
);
