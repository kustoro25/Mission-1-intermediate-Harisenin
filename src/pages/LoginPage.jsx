import React from "react";
import Header from "../components/common/Header";
import LoginForm from "../components/auth/LoginForm";

const LoginPage = () => {
  return (
    <>
      <Header />
      <div className="main">
        <div className="container-auth">
          <LoginForm />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
