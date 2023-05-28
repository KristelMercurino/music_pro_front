import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Collapse,
} from "@mui/material";
import { ShoppingCart, Delete } from "@mui/icons-material";
import change_format from "../../utils/utils";

import "./user-header.css";

const Header = ({ products, setProducts }) => {
  console.log("products header", products)
  const [open, setOpen] = useState(false);
  const categories = ["Electronics", "Books", "Clothing", "Home"];

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleDelete = (id) => {
    // Eliminar el producto del arreglo de productos
    const updatedProducts = products.filter((product) => product.id !== id);
    // Actualizar el arreglo de productos
    // (aquí deberías tener alguna función en el componente padre para actualizar el estado)
    setProducts(updatedProducts);
  };

  const calculateTotal = () => {
    let total = 0;
    products.forEach((product) => {
      total += product.precio * product.cantidad;
    });
    return total;
  };

  return (
    <>
    {
      products &&
 
      <AppBar position="static" className="header">
        <Toolbar className="category-toolbar" variant="dense">
          {/* <div className="logo"> */}
          {categories.map((category, index) => (
            <Typography variant="body1" key={index} sx={{ marginLeft: "20px" }} >
              {category}
            </Typography>
          ))}
                  {/* </div> */}

          <Typography variant="h6" component="div" className="logo">
            
          </Typography>
          <IconButton
            className="cart-icon"
            color="inherit"
            onClick={handleToggle}
          >
            <Badge badgeContent={products.length} color="error">
              <ShoppingCart />
            </Badge>
          </IconButton>
        </Toolbar>
        <div className="collapse-container">
          <Collapse in={open} timeout="auto" unmountOnExit>
            <div className="collapse-content">
              <List className="cart-list" component="div">
                {products.map((product) => (
                  <ListItem key={product.id} className="cart-list-item">
                    <ListItemText
                      primary={product.nombre}
                      secondary={`Precio: $${product.precio} Cantidad: ${product.cantidad}`}
                    />
                    <ListItemSecondaryAction>
                      <IconButton
                        edge="end"
                        aria-label="delete"
                        onClick={() => handleDelete(product.id)}
                      >
                        <Delete />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                ))}
                {/* <ListItem className="cart-list-item">
                  <ListItemText primary={`Total: $${calculateTotal()}`} />
                </ListItem> */}
              </List>
              <div className="cart-total">
              <Typography variant="subtitle1">Total: ${calculateTotal()}</Typography>
            </div>
            </div>
          </Collapse>
        </div>
      </AppBar>
         }
    </>
  );
};

export default Header;
