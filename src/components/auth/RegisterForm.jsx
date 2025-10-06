import React, { useState } from "react";
import { Link } from "react-router-dom";
import FormField from "./FormField";
import GoogleLoginButton from "./GoogleLoginButton";
import PhoneInput from "./PhoneInput";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "pria",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Nama lengkap harus diisi";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email harus diisi";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Format email tidak valid";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Nomor HP harus diisi";
    }

    if (!formData.password) {
      newErrors.password = "Kata sandi harus diisi";
    } else if (formData.password.length < 6) {
      newErrors.password = "Kata sandi minimal 6 karakter";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Konfirmasi kata sandi harus diisi";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Kata sandi tidak cocok";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Register data:", formData);
      // Add registration logic here
    }
  };

  return (
    <div className="auth-card">
      <div className="auth-header">
        <h1 className="auth-title">Pendaftaran Akun</h1>
        <p className="auth-subtitle">Yuk, daftarkan akunmu sekarang juga!</p>
      </div>

      <form className="auth-form" onSubmit={handleSubmit}>
        <FormField
          label="Nama Lengkap"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Masukkan nama lengkap"
          error={errors.name}
          required
        />

        <FormField
          label="E-mail"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Masukkan alamat email"
          error={errors.email}
          required
        />

        <div className="form-group">
          <label className="form-label">
            Jenis Kelamin
            <span className="required-star">*</span>
          </label>
          <select
            name="gender"
            className="form-input"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="pria">Pria</option>
            <option value="wanita">Wanita</option>
          </select>
        </div>

        <PhoneInput
          value={formData.phone}
          onChange={handleChange}
          error={errors.phone}
        />

        <FormField
          label="Kata Sandi"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Masukkan kata sandi"
          error={errors.password}
          required
        />

        <FormField
          label="Konfirmasi Kata Sandi"
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Konfirmasi kata sandi"
          error={errors.confirmPassword}
          required
        />

        <button type="submit" className="auth-button primary-button">
          Daftar
        </button>

        <div className="button-group">
          <Link to="/login" className="auth-button secondary-button">
            Masuk
          </Link>
        </div>
      </form>

      <div className="divider">
        <span className="divider-text">atau</span>
      </div>

      <GoogleLoginButton />

      <div className="auth-footer">
        <p>
          Sudah punya akun?
          <Link to="/login" className="auth-link">
            {" "}
            Login di sini
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
