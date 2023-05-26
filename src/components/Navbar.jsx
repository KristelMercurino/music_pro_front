import React from "react";
import { Link } from "react-router-dom";
import auth from "../services/auth";

const Navbar = ({ user }) => {
  const handleLogout = () => {
    auth.logout();
    window.location.reload();
  };

  return (
    <nav>
      <h1>Welcome {user.name}</h1>
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
};

export default Navbar;
