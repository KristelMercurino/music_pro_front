import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/login';
// import Dashboard from './components/Dashboard';
import ViewUsers from './pages/ViewUsers';
import EditUser from './pages/EditUser';
import AddUser from './pages/AddUser';
import DeleteUser from './pages/DeleteUser';
import Home from './pages/Home';
import Header from './components/simple-header';
import Sidebar from './components/Sidebar';
import { getToken, removeUserSession, setUserSession, getSession } from './utils/session';
import LoggedInHeader from './components/loggedin-header'
import LoggedOutHeader from './components/loggedout-header'

function App() {
    const [token, setToken] = useState("");

    // Comprueba si existe un token almacenado en localStorage al cargar la aplicación
    useEffect(() => {
      const storedToken = localStorage.getItem("token");
      if (storedToken) {
        setToken(storedToken);
      }
    }, []);
  
    // Función para iniciar sesión y almacenar el token en localStorage
    const handleLogin = async (username, password) => {
        try {
          const response = await axios.post(`${API_BASE_URL}/login`, {
            username,
            password,
          });
          const token = response.data.token;
          const user = await getUser(token);
          localStorage.setItem("token", token);
          localStorage.setItem("user", JSON.stringify(user));
          setUser(user);
        } catch (error) {
          console.error(error);
        }
      };

      const getUser = async (token) => {
        try {
          const response = await axios.get(`${API_BASE_URL}/me`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          const user = response.data;
          return { ...user, role: user.email === "admin@example.com" ? "admin" : "client" };
        } catch (error) {
          console.error(error);
        }
      };
      
  
    // Función para cerrar sesión y eliminar el token de localStorage
    const handleLogout = () => {
      localStorage.removeItem("token");
      setToken("");
    };
  
    // Comprueba si el usuario ha iniciado sesión
    const isAuthenticated = () => {
      return Boolean(token);
    };


  return (
    <Router>
        {isLoggedIn ? <LoggedInHeader handleLogout={handleLogout} /> : <LoggedOutHeader />}
      {isAuthenticated && userType === 'admin' && <Sidebar />}
      <Routes>
      <Route path="/login" handleUserLogin={handleUserLogin} element={<Login />} />
        {isLoggedIn && (
        <>
        <Route exact path="/">
          {isAuthenticated() ? <Redirect to="/home" /> : <Redirect to="/login" />}
        </Route>
          <Route path="/users" element={<ViewUsers />} />
          <Route path="/users/add" element={<AddUser />} />
          <Route path="/users/edit/:id" element={<EditUser />} />
          <Route path="/users/delete/:id" element={<DeleteUser />} />
        </>

        )}
        {!isLoggedIn && (
          <Route path="*" element={<Navigate to="/login" />} />
        )}
      </Routes>
    </Router>
  );
}

export default App;
