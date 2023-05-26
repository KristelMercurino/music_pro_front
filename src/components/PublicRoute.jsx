import { Route, Navigate } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import { useContext } from "react";

const PublicRoute = ({ component: Component, isAuthenticated, ...rest }) => {
  const { user } = useContext(UserContext);

  return (
    <Route
      {...rest}
      element={!user || !isAuthenticated ? <Component /> : <Navigate to="/" />}
    />
  );
};

export default PublicRoute;
