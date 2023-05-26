import React from "react";
import { Link } from "react-router-dom";
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
import AirportShuttleOutlinedIcon from '@mui/icons-material/AirportShuttleOutlined';

import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";

import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import "./accountant-home.css";


import Sidebar from '../../components/simple-sidebar';

const Home = ({ handleLogout }) => {
  const sidebarOptions = [
    { label: 'Seguimiento', icon: <AirportShuttleOutlinedIcon />, link: '#' },
    { label: 'Reportes', icon: <BookmarkBorderOutlinedIcon />, link: '#' },
  ];

  return (
    <div className="home">
      <Sidebar options={sidebarOptions} />
      <div className="content">
        {/* Content of the home page */}
        <h1>Welcome to the Home Page</h1>
      </div>
    </div>
  );
};

export default Home;

