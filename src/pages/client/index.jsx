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
import { Stack, Grid, Typography, Slider } from "@mui/material";
import Carousel from 'react-material-ui-carousel'
import Pagination from "@mui/material/Pagination";
import "./client-home.css"

const Home = ({handleLogout}) => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [priceFilter, setPriceFilter] = useState([0, 500]);
  const [typeFilter, setTypeFilter] = useState("all");
  const productsPerPage = 12;

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
    setProducts(guitarProducts);
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

  // Get current products based on filters
  const filteredProducts = products.filter((product) => {
    const price = parseFloat(product.price);
    const meetsPriceFilter = price >= priceFilter[0] && price <= priceFilter[1];
    const meetsTypeFilter = typeFilter === "all" || product.type === typeFilter;
    return meetsPriceFilter && meetsTypeFilter;
  });

  // Get current products for the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

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
          <img src="../../images/guitar-wallpaper.png" alt="Slide 1" />
        </div>
        <div>
          <img src="image2.jpg" alt="Slide 2" />
        </div>
        <div>
          <img src="image3.jpg" alt="Slide 3" />
        </div>
      </Carousel>
        <div className="product-cards-container">
          <Grid container spacing={3}>
            {currentProducts.map((product) => (
              <Grid item xs={12} sm={6} md={4} key={product.id}>
                <div className="card">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="card-image"
                  />
                  <Typography variant="h6" component="div" gutterBottom>
                    {product.title}
                  </Typography>
                  <Typography variant="body2" component="div" gutterBottom>
                    ${product.price}
                  </Typography>
                </div>
              </Grid>
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
