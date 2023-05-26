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
import ClientHome from "./pages/client-home";
import AccountantHome from "./pages/accountant-home";
import AccountantTracking from "./pages/accountant-tracking";
import SellerHome from "./pages/seller-home";
import GrocerHome from "./pages/grocer-home";

import {ROLE_REDIRECT} from './constants/home_roles'


function App() {
  const [token, setToken] = useState(null);
  const [role, setRole] = useState(null);

  const role_redirect = {
    Cliente: "/",
    Administrador: "/admin-home",
    Contador: "/accountant",
    Vendedor: "/seller-home",
    Bodeguero: "/grocer-home",
  };

  //   const handleLogin = async (e, username, password, role) => {
  //     e.preventDefault();
  //     try {
  //       const res = await axios.post("https://myloginapi.com/login", {
  //         username,
  //         password,
  //         role,
  //       });
  //       setToken(res.data.token);
  //       setRole(role);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  const handleLogin = (role, token, user_data) => {
    //e.preventDefault();
    try {
      setToken(token);
      localStorage.setItem("token", token);
      setRole(role);
      localStorage.setItem("role", role);
      localStorage.setItem("user", user_data);

      window.location = ROLE_REDIRECT[role];

      // // Redirect to appropriate home page based on user role
      // if (role === 'client') {
      // //navigate('/home-cliente');
      // console.log(role, token)
      // window.location = '/';

      // } else if (role === 'admin') {
      // //navigate('/home-admin');
      //     window.location = '/admin-home';

      // }
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

  //   const Login = () => {
  //     const [username, setUsername] = useState("");
  //     const [password, setPassword] = useState("");
  //     const [role, setRole] = useState("");

  //     const handleUsernameChange = (e) => {
  //       setUsername(e.target.value);
  //     };

  //     const handlePasswordChange = (e) => {
  //       setPassword(e.target.value);
  //     };

  //     const handleRoleChange = (e) => {
  //       setRole(e.target.value);
  //     };

  //     if (token) {
  //       return <Navigate to="/" />;
  //     }

  //     return (
  //       <form onSubmit={(e) => handleLogin(e, username, password, role)}>
  //         <label>
  //           Username:
  //           <input type="text" value={username} onChange={handleUsernameChange} />
  //         </label>
  //         <br />
  //         <label>
  //           Password:
  //           <input type="password" value={password} onChange={handlePasswordChange} />
  //         </label>
  //         <br />
  //         <label>
  //           Role:
  //           <select value={role} onChange={handleRoleChange}>
  //             <option value="">Select a role</option>
  //             <option value="admin">Admin</option>
  //             <option value="client">Client</option>
  //           </select>
  //         </label>
  //         <br />
  //         <button type="submit">Login</button>
  //       </form>
  //     );
  //   };

  console.log(role, token);
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
            path="/seller-home"
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
