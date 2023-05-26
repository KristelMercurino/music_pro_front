import React, { useEffect, useState } from 'react';
import { Link,Route,Routes } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import PersonRemoveOutlinedIcon from '@mui/icons-material/PersonRemoveOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import CssBaseline from "@mui/material/CssBaseline";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import "./admin.css";
import AdminUsersManagement from "./users-management";

import DataTable from "../../components/table";
import {fetchService} from '../../services/api'

import auth from '../../services/auth'


import Sidebar from '../../components/simple-sidebar';

import axios from "axios";
import qs from "qs";

import {ROLE_REDIRECT} from '../../constants/home_roles'


const BASE_URL = "http://192.168.126.128/integracion-plataformas";


const Home = ({ handleLogout }) => {

  const sidebarOptions = [
    { label: 'Gestionar Usuarios', icon: <PersonAddAltOutlinedIcon />, link: '/admin/users-management' },
   /* { label: 'Editar Usuarios', icon: <ModeEditOutlineOutlinedIcon />, link: '#' },
    { label: 'Eliminar Usuarios', icon: <PersonRemoveOutlinedIcon />, link: '#' },
    */
    { label: 'Generar informes', icon: <BookmarkBorderOutlinedIcon />, link: '#' },
    { label: 'Estrategia de ventas', icon: <CurrencyExchangeOutlinedIcon />, link: '#' },
  ];


  useEffect(() => {
    const authenticated = auth.isAuthenticated();
    const role = auth.getRole()
    console.log(role, ROLE_REDIRECT[role])
    console.log("authenticated:", authenticated)

    if (!authenticated){
      window.location = '/login';
    }
    if (role !== "Administrador"){
      console.log("ROLE_REDIRECT[role]:", ROLE_REDIRECT[role])
      window.location = ROLE_REDIRECT[role];

    }
  }, [])
  

  return (
    <div className="home">

      <Sidebar options={sidebarOptions} />
      <div className="content">
        <Routes>
          <Route exact path="/users-management" element={<AdminUsersManagement/> }/>
        </Routes>
      </div>
    </div>
  );
};

export default Home;

