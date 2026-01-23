import { NavButton } from "../atoms/NavButton";
import { FaHome, FaUtensils, FaCalendarAlt } from "react-icons/fa";

export const NavBar = () => {
  return (
    <nav className="navBar">
      <NavButton to="/" label="Accueil" icon={<FaHome />} />
      <NavButton to="/menu" label="Menu" icon={<FaUtensils />} />
      <NavButton to="/reserver" label="Réserver" icon={<FaCalendarAlt />} />
    </nav>
  );
};
