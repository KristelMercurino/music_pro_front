import React, { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import PersonRemoveOutlinedIcon from "@mui/icons-material/PersonRemoveOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import CurrencyExchangeOutlinedIcon from "@mui/icons-material/CurrencyExchangeOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import "./users-management.css";

import DataTable from "../../../components/table";
import { fetchService } from "../../../services/api";

import AddUserForm from "../../../components/add-user-form";
import Modal from "../../../components/modal";

import axios from "axios";
import qs from "qs";

const BASE_URL = "http://192.168.126.128/integracion-plataformas";

const Home = ({ handleLogout }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    console.log("open modal")
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const fields = [
    {
      name: 'name',
      label: 'Nombre',
      props: {
        // Otras props opcionales para el TextField
        required: true,
      },
    },
    {
      name: 'apellidos',
      label: 'Apellidos',
      props: {
        // Otras props opcionales para el TextField
        required: true,
      },
    },
    {
      name: 'apellidos',
      label: 'Apellidos',
      props: {
        // Otras props opcionales para el TextField
        required: true,
      },

    ],
    [
      {
        label: 'Rut',
        name: 'rut',
        type: 'text',
        fullWidth: true,
      },
      {
        label: 'Username',
        name: 'nombreusuario',
        type: 'text',
        fullWidth: true,
      },
      
    ],
    [
      {
        label: 'Correo electrónico',
        name: 'email',
        type: 'email',
        // Otras props opcionales para el TextField
      },
    },
    // Otros campos si es necesario
  ];

  const sidebarOptions = [
    {
      label: "Registrar Usuarios",
      icon: <PersonAddAltOutlinedIcon />,
      link: "#",
    },
    {
      label: "Editar Usuarios",
      icon: <ModeEditOutlineOutlinedIcon />,
      link: "#",
    },
    {
      label: "Eliminar Usuarios",
      icon: <PersonRemoveOutlinedIcon />,
      link: "#",
    },
    {
      label: "Generar informes",
      icon: <BookmarkBorderOutlinedIcon />,
      link: "#",
    },
    {
      label: "Estrategia de ventas",
      icon: <CurrencyExchangeOutlinedIcon />,
      link: "#",
    },
  ];

  const [data, setData] = useState([]);
  const columns = [
    // { field: 'id', headerName: 'ID', width: 70 },
    { field: "nombres", headerName: "Name", width: 150 },
    { field: "email", headerName: "Email", width: 150 },
    { field: "perfil_nombre", headerName: "Rol", width: 150 },

    {
      // field: 'age',
      headerName: "Acciones",
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
              <CheckCircleIcon />
            </IconButton>
          </div>
        );
      },
    },
  ];

  useEffect(() => {
    fetchData();
    // const response = fetchService('POST', {}, "listar_usuarios");
    // if (response)
    // console.log(response.data);
    // setData(response.data?.usuarios) //actualiza la data
  }, []);

  const fetchData = async () => {
    try {
      let requestData = {};
      requestData.token =
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjEiLCJub21icmVzIjoidXN1YXJpb3MiLCJub21icmV1c3VhcmlvIjoidXN1YXJpb3Rlc3QiLCJhcGVsbGlkb3MiOiJ1c3VhcmlvcyIsImVtYWlsIjoibWFpbEBtYWlsLmNsIiwiZGlyZWNjaW9uIjoiZGlyZWNjaW9uIGRpcmVjY2lvbmNpdGEiLCJydXQiOiJydXQtcnV0IiwicGVyZmlsX25vbWJyZSI6IkFkbWluaXN0cmFkb3IiLCJleHAiOjE2ODUxNTcyNzUsInVzdWFyaW9fYWN0aXZvIjoiYWN0aXZvIn0.PgiPlT1OEz3kvx-z6l-Rpc5YXr6-hq0rFmeFiLuAeQE";
      const options = {
        method: "POST",
        maxBodyLength: Infinity,
        // headers: {
        //   "content-type": "application/x-www-form-urlencoded",
        //   "Access-Control-Allow-Origin": "*",
        // },
        data: qs.stringify(requestData),
        url: `${BASE_URL}/listar-usuarios`,
      };
      const response = await axios(options);
      console.log(response.data);
      setData(response.data.data.usuarios);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="table">
      <div className="content">
        {/* Content of the home page */}

        <div className="button">
          <Button
            variant="contained"
            //color="inherit" // Establece el color del icono como transparente
            onClick={handleOpenModal}
          >
            Agregar usuario
          </Button>
        </div>
        <DataTable rows={data} columns={columns} pageSize={10} />
        <Modal
        component={<AddUserForm handleClose={handleCloseModal} fields={fields} />}
        open={modalOpen}
        handleClose={handleCloseModal}
        title="Agregar usuario"
      />
      </div>

    </div>
  );
};

export default Home;
