import React from 'react';
import { Route, Navigate } from 'react-router-dom';

function PrivateRoute({ element: Element, isLoggedIn, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLoggedIn ? (
          <Element />
        ) : (
          <Navigate
            to={{ pathname: '/login', state: { from: location } }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;






  

/*
import React from 'react';
import { Route, Navigate } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import { useContext } from "react";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user } = useContext(UserContext);

  return (
    <Route {...rest} element={user ? <Component /> : <Navigate to="/login" />} />
  );
};

export default PrivateRoute;
*/