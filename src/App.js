import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import axios from "axios";

import Login from "./pages/login";
import Header from "./components/simple-header";
import Footer from "./components/simple-footer";
import AdminHome from "./pages/admin";
import ClientHome from "./pages/client";
import AccountantHome from "./pages/accountant-home";
import AccountantTracking from "./pages/accountant-tracking";
import SellerHome from "./pages/seller";
import GrocerHome from "./pages/grocer-home";

import {ROLE_REDIRECT} from './constants/home_roles'


function App() {
  const [token, setToken] = useState(null);
  const [role, setRole] = useState(null);

  const handleLogin = (role, token, user_data) => {
    //e.preventDefault();
    try {
      setToken(token);
      localStorage.setItem("token", token);
      setRole(role);
      localStorage.setItem("role", role);
      localStorage.setItem("user", user_data);

      window.location = ROLE_REDIRECT[role];

    } catch (err) {
      console.log(err);
    }
  };

  const handleLogout = (e) => {
    e.preventDefault();
    setToken(null);
    setRole(null);
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    window.location = "/login";
  };

  return (
    <div>
      <Header handleLogout={handleLogout} />
      <Router>
        <Routes>
          {/* <Route path="/" element={<RedirectToHome />} /> */}
          <Route
            path="/"
            element={<ClientHome handleLogout={handleLogout} />}
          />

          <Route
            path="/admin/*"
            element={<AdminHome handleLogout={handleLogout} />}
          />
          <Route
            path="/accountant"
            element={<AccountantHome handleLogout={handleLogout} />}
          >
            <Route
              path="/accountant/tracking"
              exact={true}
              element={<AccountantTracking handleLogout={handleLogout} />}
            />
          </Route>

          <Route
            path="/seller/*"
            element={<SellerHome handleLogout={handleLogout} />}
          />

          <Route
            path="/grocer-home"
            element={<GrocerHome handleLogout={handleLogout} />}
          />

          {/* <Route path="/client-home" element={<ClientHome handleLogout={handleLogout}/>} /> */}
          <Route path="/login" element={<Login handleLogin={handleLogin} />} />
          <Route
            path="/logout"
            element={<button onClick={handleLogout}>Logout</button>}
          />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
