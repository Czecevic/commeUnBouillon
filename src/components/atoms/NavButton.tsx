import React from "react";
import { NavLink } from "react-router-dom";
import { NavButtonProps } from "../../../interfaces";

export const NavButton: React.FC<NavButtonProps> = ({ to, label, icon }) => {
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
