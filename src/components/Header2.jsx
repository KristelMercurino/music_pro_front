import React, { useContext } from "react";
import { AuthContext } from "../AuthContext";

const Header = ({ user }) => {
  const { handleLogout } = useContext(AuthContext);

  return (
    <div className="header">
      <h1>Aplicación React</h1>
      <div className="user-info">
        <p>Hola, {user.name}</p>
        <button onClick={handleLogout}>Cerrar sesión</button>
      </div>
    </div>
  );
};

export default Header;