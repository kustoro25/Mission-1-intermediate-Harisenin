import React, { useState } from "react";
import { Link } from "react-router-dom";
import FormField from "./FormField";
import GoogleLoginButton from "./GoogleLoginButton";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login data:", formData);
    // Add login logic here
  };

  return (
    <div className="auth-card">
      <div className="auth-header">
        <h3 className="auth-title">Masuk ke Akun</h3>
        <p className="auth-subtitle">
          Yuk, lanjutin belajarmu di videobelajar.
        </p>
      </div>

      <form className="auth-form" onSubmit={handleSubmit}>
        <FormField
          label="E-mail"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Masukkan alamat email"
          required
        />

        <FormField
          label="Kata Sandi"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Masukkan password"
          required
        />

        <div className="form-group-row">
          <label className="checkbox-label">
            <input
              type="checkbox"
              name="remember"
              checked={formData.remember}
              onChange={handleChange}
            />
            <span>Ingat saya</span>
          </label>
          <Link to="/forgot-password" className="auth-link forgot-link">
            Lupa password?
          </Link>
        </div>

        <button type="submit" className="auth-button primary-button">
          Masuk
        </button>

        <div className="button-group">
          <Link to="/register" className="auth-button secondary-button">
            Daftar
          </Link>
        </div>
      </form>

      <div className="divider">
        <span className="divider-text">atau</span>
      </div>

      <GoogleLoginButton />

      <div className="auth-footer">
        <p>
          Belum punya akun?
          <Link to="/register" className="auth-link">
            {" "}
            Daftar di sini
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
