import React, { useEffect, useState } from "react";
import { Navigate  } from 'react-router-dom';
import ClientProducts from "./products";
import { Route, Routes } from "react-router-dom";

import auth from "../../services/auth";
import Loading from "../../components/loading"
import { ROLE_REDIRECT } from "../../constants/home_roles";

import "./client.css";

const ALLOWED_ROLE = "Cliente";

const Home = ({ handleLogout }) => {
  const [authorized, setAuthorized] = useState(null);
  const [role, setRole] = useState(null);


  useEffect(() => {
    const authenticated = auth.isAuthenticated();
    const role = auth.getRole();

    if (!authenticated) {
      window.location = "/login";
    }
    if (role !== ALLOWED_ROLE) {
      window.location = ROLE_REDIRECT[role];
    }

    setAuthorized(authenticated);
    setRole(role);
  }, []);

  // if (!authorized) {
  //   return <Navigate  to="/login" />; // Redirige al inicio de sesión si el usuario no tiene el rol requerido
  // }
  console.log("authorized", authorized)
  return (
    <div className="client-content">
      {authorized && role === ALLOWED_ROLE ? (
        <Routes>
          <Route exact path="/" element={<ClientProducts />} />
        </Routes>
      ): (
        <Loading/>
      )}
    </div>
  );
};

export default Home;
