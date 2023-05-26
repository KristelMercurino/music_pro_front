import axios from "axios";
import jwt from "jsonwebtoken";

const auth = {
  login: async (username, password) => {
    try {
      const { data } = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        { username, password }
      );

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

  isAuthenticated: () => {
    const token = localStorage.getItem("token");

    if (!token) {
      return false;
    }

    try {
      jwt.verify(token, "secret");
      return true;
    } catch (err) {
      return false;
    }
  },
};

export default auth;