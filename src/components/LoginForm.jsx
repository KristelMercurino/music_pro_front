import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/authenticate",
        { username, password }
      );
      const { token, user } = response.data;
      localStorage.setItem("token", token);
      onLogin(user);
      history.push(user.type === "admin" ? "/usuarios" : "/");
    } catch (error) {
      setError("Nombre de usuario o contraseña incorrectos");
    }
  };

  return (
    <form className="login-form" onSubmit={handleLogin}>
      <input
        type="text"
        placeholder="Nombre de usuario"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button type="submit">Iniciar sesión</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default LoginForm;
