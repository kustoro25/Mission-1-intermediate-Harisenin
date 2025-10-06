import React from "react";

const PhoneInput = ({ value, onChange, error }) => (
  <div className="form-group">
    <label htmlFor="phone" className="form-label">
      Nomor HP
      <span className="required-star">*</span>
    </label>
    <div className="phone-input-container">
      <div className="country-code">
        <div className="country-flag"></div>
        <span>+62</span>
      </div>
      <input
        type="tel"
        id="phone"
        name="phone"
        className={`form-input phone-input ${error ? "error" : ""}`}
        placeholder="812-3456-7890"
        value={value}
        onChange={onChange}
        required
      />
    </div>
    {error && <span className="error-message">{error}</span>}
  </div>
);

export default PhoneInput;
