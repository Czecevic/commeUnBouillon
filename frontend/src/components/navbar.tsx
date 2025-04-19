import { NavLink } from "react-router-dom";
import "../index.css";
import { FaHome, FaUtensils, FaCalendarAlt } from "react-icons/fa";

export const NavBar = () => {
  return (
    <nav className="navBar">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "navButton active" : "navButton"
        }
      >
        <FaHome className="navIcon" />
        Accueil
      </NavLink>
      <NavLink
        to="/menu"
        className={({ isActive }) =>
          isActive ? "navButton active" : "navButton"
        }
      >
        <FaUtensils className="navIcon" />
        Menu
      </NavLink>
      <NavLink
        to="/reserver"
        className={({ isActive }) =>
          isActive ? "navButton active" : "navButton"
        }
      >
        <FaCalendarAlt className="navIcon" />
        Réserver
      </NavLink>
    </nav>
  );
};
