import React from "react";
import LoginForm from "../components/LoginForm";

const LoginPage = ({ onLogin }) => {
  return (
    <div className="login-page">
      <h1>Iniciar sesión</h1>
      <LoginForm onLogin={onLogin} />
    </div>
  );
};

export default LoginPage;
