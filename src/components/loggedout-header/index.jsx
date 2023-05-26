import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import './loggedout-header.css';

const LoggedOutHeader = () => {
  return (
    <header className="logged-out-header">
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="nav-links-container">
        <Link to="/login">Ingresar</Link>
        <Link to="/register">Registrate</Link>
      </div>
    </header>
  );
};

export default LoggedOutHeader;
