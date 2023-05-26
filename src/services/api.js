import axios from "axios";
import qs from "qs";

const BASE_URL = "http://192.168.126.128";

const ENDPOINTS = {
  login_email: "/integracion-plataformas/auth-email",
  login_username: "/integracion-plataformas/auth-nomusuario",
};

export const fetchService = async (method, data, endpoint) => {
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
