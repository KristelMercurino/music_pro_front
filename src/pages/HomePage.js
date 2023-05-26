import React from "react";

const HomePage = ({ user }) => {
  return (
    <div className="home-page">
      <h1>Bienvenido, {user.name}</h1>
      <p>¡Gracias por usar nuestra aplicación!</p>
    </div>
  );
};

export default HomePage;
