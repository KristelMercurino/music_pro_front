import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import PersonRemoveOutlinedIcon from '@mui/icons-material/PersonRemoveOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import CssBaseline from "@mui/material/CssBaseline";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import "./users-management.css";

import DataTable from "../../../components/table";
import {fetchService} from '../../../services/api'



import Sidebar from '../../../components/simple-sidebar';

import axios from "axios";
import qs from "qs";

const BASE_URL = "http://192.168.126.128/integracion-plataformas";


const Home = ({ handleLogout }) => {
  const sidebarOptions = [
    { label: 'Registrar Usuarios', icon: <PersonAddAltOutlinedIcon />, link: '#' },
    { label: 'Editar Usuarios', icon: <ModeEditOutlineOutlinedIcon />, link: '#' },
    { label: 'Eliminar Usuarios', icon: <PersonRemoveOutlinedIcon />, link: '#' },
    { label: 'Generar informes', icon: <BookmarkBorderOutlinedIcon />, link: '#' },
    { label: 'Estrategia de ventas', icon: <CurrencyExchangeOutlinedIcon />, link: '#' },
  ];

  const [data, setData] = useState([]);
  const columns = [
    // { field: 'id', headerName: 'ID', width: 70 },
    { field: 'nombres', headerName: 'Name', width: 150 },
    { field: 'email', headerName: 'Email', width: 150 },
    { field: 'perfil_nombre', headerName: 'Rol', width: 150 },

    
    
    {
      // field: 'age',
      headerName: 'Acciones',
      width: 90,
      renderCell: (params) => {
        // Aquí puedes personalizar el contenido de la celda de la columna 'Age'
        // const age = params.value;
        return (
          <div>
            <IconButton 
                  color="inherit" // Establece el color del icono como transparente
                  // onClick={handleClick}
            >

            <CheckCircleIcon/>
         
          </IconButton>
          </div>
        );
      },
    },
  ];

  useEffect(() => {
    fetchData()
    // const response = fetchService('POST', {}, "listar_usuarios");
    // if (response)
    // console.log(response.data);
    // setData(response.data?.usuarios) //actualiza la data
  }, []);

  const fetchData = async () => {
    try {
      let requestData={}
      requestData.token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjEiLCJub21icmVzIjoidXN1YXJpb3MiLCJub21icmV1c3VhcmlvIjoidXN1YXJpb3Rlc3QiLCJhcGVsbGlkb3MiOiJ1c3VhcmlvcyIsImVtYWlsIjoibWFpbEBtYWlsLmNsIiwiZGlyZWNjaW9uIjoiZGlyZWNjaW9uIGRpcmVjY2lvbmNpdGEiLCJydXQiOiJydXQtcnV0IiwicGVyZmlsX25vbWJyZSI6IkFkbWluaXN0cmFkb3IiLCJleHAiOjE2ODUxNTcyNzUsInVzdWFyaW9fYWN0aXZvIjoiYWN0aXZvIn0.PgiPlT1OEz3kvx-z6l-Rpc5YXr6-hq0rFmeFiLuAeQE";
      const options = {
        method: 'POST',
        maxBodyLength: Infinity,
        // headers: {
        //   "content-type": "application/x-www-form-urlencoded",
        //   "Access-Control-Allow-Origin": "*",
        // },
        data: qs.stringify(requestData),
        url: `${BASE_URL}/listar-usuarios`,
      };
      const response = await axios(options);
      console.log(response.data)
      setData(response.data.data.usuarios);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="table">

     
      <div className="content">
        {/* Content of the home page */}
        <div className="button"> <IconButton 
                  color="inherit" // Establece el color del icono como transparente
                  // onClick={handleClick}
            >

            <CheckCircleIcon/>
      
          Agregar usuario
          </IconButton>
          </div>
        <DataTable rows={data} columns={columns} pageSize={10}/>
      
      </div>
    </div>
  );
};

export default Home;

