import React,{useState} from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem } from '@mui/material';
import { ShoppingCart, AccountCircle } from '@mui/icons-material';
import "./header.css";
import Logo from "../../assets/MUSICPRO.png";



const Header = ({ userType, handleLogout }) => {
  const categories = ['Instrumentos', 'Books', 'Clothing', 'Home'];
  const [anchorEl, setAnchorEl] = useState(null); 

  userType=localStorage.getItem("role");

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogoutClick = (e) => {
    handleLogout(e);
    handleMenuClose();
  };

  const renderCartButton = () => {
    if (userType === 'client') {
      return (
        <IconButton color="inherit">
          <ShoppingCart />
        </IconButton>
      );
    }
    return null;
  };

  const renderCategoryToolbar = () => {
    if (userType === 'Cliente') {
      return (
        <Toolbar className='category-toolbar' variant="dense">
          {categories.map((category, index) => (
            <Typography variant="body1" key={index} sx={{ marginLeft: '20px' }}>
              {category}
            </Typography>
          ))}
        </Toolbar>
      );
    }
    return null;
  };

  return (
    <AppBar position="static" color="primary">
      <Toolbar className='root' variant="dense" sx={{ height: '5px' }}> 
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>

        <div className="container">
      <img className="text1" src={Logo} alt="Logo" />

        <div className="line"></div>
        <Typography variant="subtitle1" className="text2">MusicPro</Typography>
      </div>

        {/* <div className="logo_musicpro">

      <img className="logo" src={Logo} alt="Logo" />
       <p className="texto_logo">MusicPro</p> 

    </div> */}
    
        </Typography>
        {renderCartButton()}
        <IconButton color="inherit" onClick={handleMenuOpen}>
          <AccountCircle />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
        </Menu>
      </Toolbar>

    </AppBar>
  );
};

export default Header;
