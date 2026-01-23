import { ButtonProps } from "../../../interfaces";

export const Button = ({
  label,
  type = "button",
  onClick,
  className,
}: ButtonProps) => (
  <button type={type} className={`button ${className}`} onClick={onClick}>
    {label}
  </button>
);
