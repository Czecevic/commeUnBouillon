import React from "react";
import { ButtonProps } from "../../../interfaces";

export const Button: React.FC<ButtonProps> = ({
  label,
  type = "button",
  onClick,
  className,
}) => (
  <button type={type} className={`button ${className}`} onClick={onClick}>
    {label}
  </button>
);
