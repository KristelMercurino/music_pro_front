import React, { useEffect, useState } from 'react';

import ClientProducts from "./products"
import { Route, Routes } from "react-router-dom";


import auth from '../../services/auth'
import {ROLE_REDIRECT} from '../../constants/home_roles'


import "./client.css"

const Home = ({handleLogout}) => {

  useEffect(() => {
    const authenticated = auth.isAuthenticated();
    const role = auth.getRole()

    if (!authenticated){
      window.location = '/login';
    }
    if (role !== "Cliente"){
      window.location = ROLE_REDIRECT[role];

    }
  }, [])

  return (
    <div className="client-content">
      <Routes>
        <Route exact path="/" element={<ClientProducts/> }/>
      </Routes>
  </div>
  );
};

export default Home;
