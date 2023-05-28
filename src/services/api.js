import axios from "axios";
import qs from "qs";
import auth from "./auth"
// const BASE_URL = "http://192.168.126.128/integracion-plataformas";
const BASE_URL = "http://192.168.119.128/integracion-plataformas";

const ENDPOINTS = {
  login_email: "/auth-email",
  login_username: "auth-nomusuario",
  listar_usuarios: "/listar-usuarios",
  insertar_usuario: "/insertar-usuario"
};

export const fetchService = async (method, data, endpoint) => {
  data.token = auth.getToken();
  const options = {
    method: method,
    maxBodyLength: Infinity,
    // headers: {
    //   "content-type": "application/x-www-form-urlencoded",
    //   "Access-Control-Allow-Origin": "*",
    // },
    data: qs.stringify(data),
    url: `${BASE_URL}${ENDPOINTS[endpoint]}`,
  };
  try {
    const response = await axios(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const addUser = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/users`, userData);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// import the `qs` module

// Then you can use `qs` with `axios` in that file
