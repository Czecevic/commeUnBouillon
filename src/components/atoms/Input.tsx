import { InputProps } from "../../../interfaces";

export const Input = ({
  type,
  placeholder,
  value,
  onChange,
  required = false,
}: InputProps) => (
  <input
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    required={required}
    className="input"
  />
);
