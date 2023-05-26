import React, { useState } from "react";
import {fetchService} from '../../services/api'

import "./login.css";

const Login = ({ handleLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Cliente");
  const [error, setError] = useState("");

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleRoleChange = (e) => setRole(e.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      email: username,
      password: password
    }
    const response = fetchService("POST", data, "login_email");
    console.log(response)
    //handleLogin(username, password, role);
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-header">
          <h2>Login</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter username"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="form-group">
            <label>Role</label>
            <select className="form-control" value={role} onChange={handleRoleChange}>
              <option value="Cliente">Cliente</option>
              <option value="Administrador">Administrador</option>
              <option value="Contador">Contador</option>
              <option value="Vendedor">Vendedor</option>
              <option value="Bodeguero">Bodeguero</option>
            </select>
          </div>
          {error && <p className="login-error">{error}</p>}
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
