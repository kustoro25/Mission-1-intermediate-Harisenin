import React from "react";

const FormField = ({
  label,
  type,
  name,
  value,
  onChange,
  placeholder,
  error,
  required,
}) => (
  <div className="form-group">
    <label htmlFor={name} className="form-label">
      {label}
      {required && <span className="required-star">*</span>}
    </label>
    <input
      type={type}
      id={name}
      name={name}
      className={`form-input ${error ? "error" : ""}`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
    />
    {error && <span className="error-message">{error}</span>}
  </div>
);

export default FormField;
