import React, { useState } from "react";
import {
  Card,
  Grid,
  CardContent,
  Typography,
  Button,
  TextField,
} from "@mui/material";
import change_format from "../../utils/utils";

import productImg from "../../assets/product.png"

import "./simple-card.css";

const ProductCard = ({ product, setProducts }) => {
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState("");

  const handleQuantityChange = (event) => {
    const value = event.target.value;
    console.log("quantity", value);
    console.log("product.stock", product.stock);
    setQuantity(value);

    //   if (value > product.stock) {
    //     setError(`La cantidad máxima es ${product.stock}`);
    //   } else {
    //     setError('');
    //     setQuantity(value);
    //   }
  };

  const handleAddToCart = () => {
    // Lógica para agregar el producto al carrito de compras
    product.cantidad = quantity;
    setProducts((prevArray) => [...prevArray, product]);
    console.log(
      `Producto agregado al carrito: ${product.nombre}, Cantidad: ${quantity}`
    );
  };

  return (
    <Grid item xs={12} sm={6} md={4} key={product.id}>
      <div className="card">
        {/* <img src={product.image} alt={product.nombre} className="card-imagen" /> */}
        <img src={productImg} alt={product.nombre} className="card-imagen" />
        
        <Typography
          sx={{ fontSize: "18px" }}
          variant="h5"
          component="div"
          gutterBottom
        >
          {product.nombre}
        </Typography>
        <Typography
          sx={{ fontSize: "15px" }}
          variant="body2"
          component="div"
          gutterBottom
        >
          ${change_format(product.precio)}
        </Typography>

        <Typography 
        variant="subtitle1" 
        color="textSecondary"
        sx={{ fontSize: "13px" }}

        >
          Stock: {product.stock}
        </Typography>
        <div>
          <Grid
            className="grid-agregar"
            container
            alignItems="center"
            spacing={2}
          >
            <Grid item>
              <Button
                className="boton-carrito"
                style={{ backgroundColor: "#FAE69E", color: "#343541"}}
                variant="contained"
                size="small"
                onClick={handleAddToCart}
                disabled={error !== ""}
              >
                Agregar
              </Button>
            </Grid>
            <Grid item>
              <TextField
                style={{ width: "60px" }}
                size="small"
                //label="Cantidad"
                type="number"
                value={quantity}
                onChange={handleQuantityChange}
                error={error !== ""}
                helperText={error}
                inputProps={{
                  min: 1,
                  max: product.stock,
                }}
              />
            </Grid>
          </Grid>
        </div>
      </div>
    </Grid>

    //   <Card className="product-card">
    //     <CardContent>
    //       <Typography variant="h5" component="div">
    //         {product.nombre}
    //       </Typography>
    //       <Typography variant="subtitle1" color="textSecondary">
    //         Precio: ${product.precio}
    //       </Typography>
    //       <Typography variant="subtitle1" color="textSecondary">
    //         Stock: {product.stock}
    //       </Typography>
    //       <TextField
    //         label="Cantidad"
    //         type="number"
    //         value={quantity}
    //         onChange={handleQuantityChange}
    //         error={error !== ''}
    //         helperText={error}
    //         inputProps={{
    //           min: 1,
    //           max: product.stock,
    //         }}
    //       />
    //       <Button variant="contained" onClick={handleAddToCart} disabled={error !== ''}>
    //         Agregar al carrito
    //       </Button>
    //     </CardContent>
    //   </Card>
  );
};

export default ProductCard;
