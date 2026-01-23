import { NavLink } from "react-router-dom";
import { NavButtonProps } from "../../../interfaces";

export const NavButton = ({ to, label, icon }: NavButtonProps) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? "navButton active" : "navButton"
      }
    >
      <span className="navIcon">{icon}</span>
      {label}
    </NavLink>
  );
};
