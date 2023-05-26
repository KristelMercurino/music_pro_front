import axios from "axios";
import qs from "qs";

const BASE_URL = "http://192.168.126.128/integracion-plataformas";

const ENDPOINTS = {
  login_email: "/auth-email",
  login_username: "auth-nomusuario",
  listar_usuarios: "/listar-usuarios",
};

export const fetchService = async (method, data, endpoint) => {
  data.token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjEiLCJub21icmVzIjoidXN1YXJpb3MiLCJub21icmV1c3VhcmlvIjoidXN1YXJpb3Rlc3QiLCJhcGVsbGlkb3MiOiJ1c3VhcmlvcyIsImVtYWlsIjoibWFpbEBtYWlsLmNsIiwiZGlyZWNjaW9uIjoiZGlyZWNjaW9uIGRpcmVjY2lvbmNpdGEiLCJydXQiOiJydXQtcnV0IiwicGVyZmlsX25vbWJyZSI6IkFkbWluaXN0cmFkb3IiLCJleHAiOjE2ODUxNTcyNzUsInVzdWFyaW9fYWN0aXZvIjoiYWN0aXZvIn0.PgiPlT1OEz3kvx-z6l-Rpc5YXr6-hq0rFmeFiLuAeQE";
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
