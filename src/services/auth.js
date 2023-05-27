import axios from "axios";
import jwt from "jsonwebtoken";
import jwt_decode from "jwt-decode";

const auth = {
  login: async (username, password) => {
    try {
      const {
        data,
      } = await axios.post("https://jsonplaceholder.typicode.com/users", {
        username,
        password,
      });

      const token = jwt.sign({ id: data.id, role: data.role }, "secret");
      localStorage.setItem("token", token);

      return data;
    } catch (err) {
      throw new Error("Invalid credentials");
    }
  },

  logout: () => {
    localStorage.removeItem("token");
  },

  getToken: () => {
    return localStorage.getItem("token");
  },

  getRole: () => {
    return localStorage.getItem("role");
  },

  isAuthenticated: () => {
    const token = localStorage.getItem("token");
    console.log(token);

    if (!token) {
      return false;
    }

    try {
      const decodedToken = jwt_decode(token);
      const currentTime = Date.now() / 1000; // Obtén la fecha y hora actual en segundos

      if (decodedToken.exp < currentTime) {
        // El token ha expirado
        return false;
      } else {
        // El token aún es válido
        return true;
      }
    } catch (error) {
      // Error al decodificar el token
      console.error(error);
      return false; // Trata el token como no expirado en caso de error
    }
  },
};

export default auth;
