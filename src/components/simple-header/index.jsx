import React,{useState} from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem } from '@mui/material';
import { ShoppingCart, AccountCircle } from '@mui/icons-material';
import "./header.css";



const Header = ({ userType, handleLogout }) => {
  const categories = ['Electronics', 'Books', 'Clothing', 'Home'];
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
          My Website
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
