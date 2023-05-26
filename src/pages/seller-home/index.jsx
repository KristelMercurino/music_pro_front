import React from "react";
import GradingOutlinedIcon from '@mui/icons-material/GradingOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import { useState } from "react";
import "./seller-home.css";

import Sidebar from '../../components/simple-sidebar';

const Home = ({ handleLogout }) => {
  const sidebarOptions = [
    { label: 'Ver pedidos', icon: <StarBorderOutlinedIcon />, link: '#' },
    { label: 'Ver ordenes', icon: <GradingOutlinedIcon />, link: '#' },
    { label: 'Ver boletas', icon: <ReceiptOutlinedIcon />, link: '#' },

  ];

  return (
    <div className="home">
      <Sidebar options={sidebarOptions} />
      <div className="content">
        {/* Content of the home page */}
        <h1>Welcome to the Home Page Accountant</h1>
      </div>
    </div>
  );
};

export default Home;

