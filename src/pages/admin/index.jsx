import React, { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import CurrencyExchangeOutlinedIcon from "@mui/icons-material/CurrencyExchangeOutlined";
import "./admin.css";
import AdminUsersManagement from "./users-management";


import auth from "../../services/auth";

import Sidebar from "../../components/simple-sidebar";
import Loading from "../../components/loading"

import { ROLE_REDIRECT } from "../../constants/home_roles";

const ALLOWED_ROLE = "Administrador";

const Home = ({ handleLogout }) => {
  const [authorized, setAuthorized] = useState(null);
  const [role, setRole] = useState(null);

  const sidebarOptions = [
    {
      label: "Gestionar Usuarios",
      icon: <PersonAddAltOutlinedIcon />,
      link: "/admin/users-management",
    },
    /* { label: 'Editar Usuarios', icon: <ModeEditOutlineOutlinedIcon />, link: '#' },
    { label: 'Eliminar Usuarios', icon: <PersonRemoveOutlinedIcon />, link: '#' },
    */
    {
      label: "Generar informes",
      icon: <BookmarkBorderOutlinedIcon />,
      link: "#",
    },
    {
      label: "Estrategia de ventas",
      icon: <CurrencyExchangeOutlinedIcon />,
      link: "#",
    },
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
              path="/users-management"
              element={<AdminUsersManagement />}
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
