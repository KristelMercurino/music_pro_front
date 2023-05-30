import React, { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import GradingOutlinedIcon from '@mui/icons-material/GradingOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import "./seller.css";
import ProductsList from "./products-list";
import OrdersList from "./orders-list";




import auth from "../../services/auth";

import Sidebar from "../../components/simple-sidebar";
import Loading from "../../components/loading"

import { ROLE_REDIRECT } from "../../constants/home_roles";

const ALLOWED_ROLE = "Vendedor";

const Home = ({ handleLogout }) => {
  const [authorized, setAuthorized] = useState(null);
  const [role, setRole] = useState(null);

  const sidebarOptions = [
    { label: 'Ver Stock', icon: <Inventory2Icon />, link: '/seller/products-list' },
    { label: 'Ver pedidos', icon: <GradingOutlinedIcon />, link: '/seller/orders-list' },
    { label: 'Ver boletas', icon: <ReceiptOutlinedIcon />, link: '#' },

  ];

  useEffect(() => {
    const authenticated = auth.isAuthenticated();
    const role = auth.getRole();
    console.log(role, ROLE_REDIRECT[role]);
    console.log("authenticated:", authenticated);

    if (!authenticated) {
      window.location = "/login";
    }
    if (role !== ALLOWED_ROLE) {
      console.log("ROLE_REDIRECT[role]:", ROLE_REDIRECT[role]);
      window.location = ROLE_REDIRECT[role];
    }
    setAuthorized(authenticated);
    setRole(role);
  }, []);

  return (
    <div className="home">
      <Sidebar options={sidebarOptions} />
      <div className="content">
        {authorized && role === ALLOWED_ROLE ? (
          <Routes>
            <Route
              exact
              path="/products-list"
              element={<ProductsList />}
            /> 
             <Route
              exact
              path="/orders-list"
              element={<OrdersList />}
            /> 
          </Routes>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default Home;
