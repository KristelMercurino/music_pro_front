/*import React from "react";

function ClientHome({ onLogout }) {
  return (
    <div>
      <h2>Bienvenido</h2>
      <button onClick={onLogout}>Cerrar sesión</button>
    </div>
  );
}

export default ClientHome;
*/

import React, { useState, useEffect } from "react";
import { Stack, Grid, Typography, Slider, TextField } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import Pagination from "@mui/material/Pagination";
import { fetchService } from "../../../services/api";
import { Modal, Button, IconButton } from "@mui/material";
import "./products.css";
import ProductCard from "../../../components/simple-card";
import imagen1 from "../../../assets/instrumentos.jpg";
import imagen2 from "../../../assets/instrumentos2.jpg";
import imagen3 from "../../../assets/instrumentos3.jpg";

const Home = ({ handleLogout, setCarProducts }) => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [priceFilter, setPriceFilter] = useState([0, 500]);
  const [typeFilter, setTypeFilter] = useState("all");
  const productsPerPage = 12;

  const fetchAxios = async (method, data, endpoint_name) => {
    try {
      const response = await fetchService(method, data, endpoint_name);
      // console.log(response.data);
      setProducts(response.data);
      console.log(products);
      // Realiza las acciones necesarias con los datos de respuesta
    } catch (error) {
      // Maneja el error si ocurre alguno
    }
  };

  // Mock products data for guitar acoustic and electric
  const guitarProducts = [
    {
      id: 1,
      title: "Guitarra Acústica 1",
      price: 199.99,
      type: "acoustic",
      image: "../../images/bajo-5-cuerdas.png",
    },
    {
      id: 2,
      title: "Guitarra Acústica 2",
      price: 249.99,
      type: "acoustic",
      image: "guitar2.jpg",
    },
    // ... add more guitar acoustic products
    {
      id: 19,
      title: "Guitarra Eléctrica 1",
      price: 399.99,
      type: "electric",
      image: "guitar19.jpg",
    },
    {
      id: 20,
      title: "Guitarra Eléctrica 2",
      price: 499.99,
      type: "electric",
      image: "guitar20.jpg",
    },
    // ... add more guitar electric products
  ];

  // Fetch products from JSON Placeholder API
  useEffect(() => {
    fetchAxios("POST", {}, "listar_productos");
  }, []);

  // Pagination - Change page
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  // Price Slider - Change range
  const handlePriceChange = (event, newValue) => {
    setPriceFilter(newValue);
  };

  // Type Filter - Change value
  const handleTypeChange = (event) => {
    setTypeFilter(event.target.value);
  };
  let filteredProducts = [];
  let currentProducts = [];
  useEffect(() => {
    // Get current products based on filters
    filteredProducts = products.filter((product) => {
      const precio = parseFloat(product.precio);

      const meetsPriceFilter =
        precio >= priceFilter[0] && precio <= priceFilter[1];
      const meetsTypeFilter =
        typeFilter === "all" || product.nombre_categoria === typeFilter;
      return meetsPriceFilter && meetsTypeFilter;
    });

    // Get current products for the current page
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    currentProducts = filteredProducts.slice(
      indexOfFirstProduct,
      indexOfLastProduct
    );
  }, [products]);

  const change_format = (numberString) => {
    const number = parseFloat(numberString);
    const formattedNumber = number.toLocaleString();
    return formattedNumber;
  };

  const handleAddToCart = (product) => {
    console.log(product);
    setCarProducts(product);
  };

  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState("");

  const handleQuantityChange = (event, product) => {
    const value = event.target.value;
    if (value > product.stock) {
      setError(`La cantidad máxima es ${product.stock}`);
    } else {
      setError("");
      setQuantity(value);
    }
  };

  console.log("products", products)

  return (
    <>
      <Stack direction="row" className="home" maxWidth="lg">
        <div className="sidebar">
          <Typography variant="h6" component="div" gutterBottom>
            Filtros
          </Typography>
          <Typography variant="body2" component="div" gutterBottom>
            Precio
          </Typography>
          <Slider
            value={priceFilter}
            onChange={handlePriceChange}
            valueLabelDisplay="auto"
            min={0}
            max={500}
          />
          <Typography variant="body2" component="div" gutterBottom>
            Tipo
          </Typography>
          <select value={typeFilter} onChange={handleTypeChange}>
            <option value="all">Todos</option>
            <option value="acoustic">Guitarra Acústica</option>
            <option value="electric">Guitarra Eléctrica</option>
          </select>
        </div>
        <Stack direction="column" className="product-cards">
          <Carousel autoPlay={true} animation="slide">
            <div>
              <img className="imagen-carrusel" src={imagen1} alt="Slide 1" />
            </div>
            <div>
              <img className="imagen-carrusel" src={imagen2} alt="Slide 2" />
            </div>
            <div>
              <img className="imagen-carrusel" src={imagen3} alt="Slide 3" />
            </div>
          </Carousel>
          <div className="product-list">
            <Grid container spacing={3}>
              {products.map((product) => (
                <ProductCard product={product} setProducts={setCarProducts} />
              ))}
            </Grid>
          </div>
          <div className="pagination">
            <Pagination
              count={Math.ceil(filteredProducts.length / productsPerPage)}
              page={currentPage}
              onChange={handlePageChange}
            />
          </div>
        </Stack>
      </Stack>
    </>
  );
};

export default Home;
