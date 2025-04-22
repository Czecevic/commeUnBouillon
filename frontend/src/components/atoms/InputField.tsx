import React from "react";
import { InputFieldProps } from "../../../interfaces";

export const InputField: React.FC<InputFieldProps> = ({
  id,
  name,
  type,
  value,
  onChange,
  placeholder,
  min,
  max,
  required = false,
}) => (
  <input
    id={id}
    name={name}
    type={type}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    min={min}
    max={max}
    required={required}
    className="input-field"
  />
);
