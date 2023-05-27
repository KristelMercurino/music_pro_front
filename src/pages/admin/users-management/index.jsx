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
    [
      {
        label: 'Nombre',
        name: 'name',
        type: 'text',
        fullWidth: true,
      },
      {
        label: 'Apellido',
        name: 'lastName',
        type: 'text',
        fullWidth: true,
      },
    ],
    [
      {
        label: 'Correo electrónico',
        name: 'email',
        type: 'email',
        fullWidth: true,
      },
      {
        label: 'Teléfono',
        name: 'phone',
        type: 'tel',
        fullWidth: true,
      },
      {
        label: 'Dirección',
        name: 'address',
        type: 'text',
        fullWidth: true,
      },
    ],
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
    fetchAxios("POST", {}, "listar_usuarios");
    // const response = fetchService('POST', {}, "listar_usuarios");
    // if (response)
    // console.log(response.data);
    // setData(response.data?.usuarios) //actualiza la data
  }, []);

  const fetchAxios = async (method, data, endpoint_name) => {
    try {
      const response = await fetchService(method, data, endpoint_name);
      setData(response.data.usuarios);

      // Realiza las acciones necesarias con los datos de respuesta
    } catch (error) {
      // Maneja el error si ocurre alguno
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
