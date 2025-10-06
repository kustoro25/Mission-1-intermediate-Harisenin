import React from "react";
import Header from "../components/common/Header";
import RegisterForm from "../components/auth/RegisterForm";

const RegisterPage = () => {
  return (
    <>
      <Header />
      <div className="main">
        <div className="container-auth">
          <RegisterForm />
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
