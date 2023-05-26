import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Box, Container, Grid, Link, Typography } from '@mui/material';


import './simple-footer.css';

const Footer = () => {
  return (
    <footer className="footer">
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={4}>
          <Typography variant="h6" className="footer-heading" marginBottom={1}>
            Enlaces
          </Typography>
          <ul className="footer-links">
            <li>
              <Link href="#">Inicio</Link>
            </li>
            <li>
              <Link href="#">Acerca de nosotros</Link>
            </li>
            <li>
              <Link href="#">Contacto</Link>
            </li>
          </ul>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Typography variant="h6" className="footer-heading" marginBottom={1}>
            Más enlaces
          </Typography>
          <ul className="footer-links">
            <li>
              <Link href="#">Servicios</Link>
            </li>
            <li>
              <Link href="#">Productos</Link>
            </li>
            <li>
              <Link href="#">Blog</Link>
            </li>
          </ul>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Typography variant="h6" className="footer-heading" marginBottom={1}>
            Redes Sociales
          </Typography>
          <ul className="footer-social">
            <li>
              <Link href="#" target="_blank">
                <FacebookIcon />
              </Link>
              <Link href="#" target="_blank">
                <TwitterIcon />
              </Link>
              <Link href="#" target="_blank">
                <InstagramIcon />
              </Link>
            </li>
          </ul>
        </Grid>
      </Grid>
    </Container>
  </footer>
  
  );
};

export default Footer;
