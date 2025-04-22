import React from "react";
import { InputProps } from "../../../interfaces";

export const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  value,
  onChange,
  required = false,
}) => (
  <input
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    required={required}
    className="input"
  />
);
