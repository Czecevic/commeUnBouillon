import { FormFieldProps } from "../../../interfaces";

export const FormField = ({
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
}: FormFieldProps) => (
  <div className="form-field">
    <label htmlFor={id} className="form-label">
      {label}
    </label>
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
  </div>
);
