import React from "react";
import { InputField } from "../atoms/InputField";
import { FormFieldProps } from "../../../interfaces";

export const FormField: React.FC<FormFieldProps> = ({
  label,
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
  <div className="form-field">
    <label htmlFor={id} className="form-label">
      {label}
    </label>
    <InputField
      id={id}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      min={typeof min === "string" ? parseFloat(min) : min}
      max={typeof max === "string" ? parseFloat(max) : max}
      required={required}
    />
  </div>
);
