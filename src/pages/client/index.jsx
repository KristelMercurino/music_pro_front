import React, { useEffect, useState } from "react";
import { Navigate  } from 'react-router-dom';
import ClientProducts from "./products";
import { Route, Routes } from "react-router-dom";
import { Toolbar, Typography, IconButton, Menu, MenuItem } from '@mui/material';
import ClientHeader from "../../components/user-header";

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


  const categories = ['Electronics', 'Books', 'Clothing', 'Home'];

  const renderCategoryToolbar = () => {
      return (
        <Toolbar className='category-toolbar' variant="dense">
          {categories.map((category, index) => (
            <Typography variant="body1" key={index} sx={{ marginLeft: '20px' }}>
              {category}
            </Typography>
          ))}
        </Toolbar>
      );

  };

  const [products, setProducts] = useState([
    { nombre: "Camisa", precio: 250, cantidad: 3, id: 1 },
    { nombre: "Pantalón", precio: 500, cantidad: 2, id: 2 },
    { nombre: "Zapatos", precio: 800, cantidad: 1, id: 3 }
  ]);
  

  return (
    <div className="client-content">
      <ClientHeader products={products}  setProducts={setProducts}/>
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
