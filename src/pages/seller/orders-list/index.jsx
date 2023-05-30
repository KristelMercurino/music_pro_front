import React, { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import "./orders-list.css";

import DataTable from "../../../components/table";
import { fetchService } from "../../../services/api";

import AddUserForm from "../../../components/add-user-form";
import Modal from "../../../components/modal";

import change_format from "../../../utils/utils";


const Home = ({ handleLogout }) => {
//   const [modalOpen, setModalOpen] = useState(false);
//   const handleOpenModal = () => {
//     console.log("open modal")
//     setModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setModalOpen(false);
//   };

//   const fields = [
//     [
//       {
//         label: 'Nombre',
//         name: 'nombres',
//         type: 'text',
//         fullWidth: true,
//       },
//       {
//         label: 'Apellidos',
//         name: 'apellidos',
//         type: 'text',
//         fullWidth: true,
//       },

//     ],
//     [
//       {
//         label: 'Rut',
//         name: 'rut',
//         type: 'text',
//         fullWidth: true,
//       },
//       {
//         label: 'Username',
//         name: 'nombreusuarios',
//         type: 'text',
//         fullWidth: true,
//       },
//     ],
//     [
//       {
//         label: 'Correo electrónico',
//         name: 'email',
//         type: 'email',
//         fullWidth: false,
//       },
//       {
//         label: 'Contraseña',
//         name: 'password',
//         type: 'password',
//         fullWidth: false,
//       }
//     ],
//     [
//       {
//         label: 'Dirección',
//         name: 'direccion',
//         type: 'text',
//         fullWidth: true,
//       },
//     ]
//   ];


  const [data, setData] = useState([]);
//   const [addUserForm, setAddUserForm] = useState({});
  const columns = [
    // { field: 'id', headerName: 'ID', width: 70 },
    { field: "id", headerName: "ID", width: 150 },
    { field: "nro_pedido", headerName: "Nombre", width: 150 },
    {
      field: 'precio',
      headerName: 'Precio',
      width: 150,
      valueGetter: (params) => {
        // Transforma el valor como desees
        const precio = params.row.precio;
        return `$${change_format(precio)}`;
      },
    },
    { field: "stock", headerName: "Stock", width: 150 },
      

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
    fetchAxios("POST", {}, "listar_productos");
    // const response = fetchService('POST', {}, "listar_usuarios");
    // if (response)
    // console.log(response.data);
    // setData(response.data?.usuarios) //actualiza la data
  }, []);


//   const handleSubmitAddUser = async (event) => {
//     event.preventDefault();

//     try {
//       // Enviar la solicitud POST para agregar el usuario
//       await fetchService("POST", addUserForm, "insertar_usuario");
//       console.log(addUserForm)
//       // Llamar a la función onSubmit pasando el objeto del usuario
//       // onSubmit(user);

//       // Limpiar los campos después de enviar el formulario
//       // setName('');
//       // setEmail('');

//       // Ejecutar la función de cerrar pasada como prop
//       //handleCloseModal();
//     } catch (error) {
//       console.error('Error al agregar el usuario:', error);
//     }
//   };



  const fetchAxios = async (method, data, endpoint_name) => {
    try {
      const response = await fetchService(method, data, endpoint_name);
      setData(response.data);

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
            // onClick={handleOpenModal}
          >
            Agregar usuario
          </Button>
        </div>
        <DataTable rows={data} columns={columns} pageSize={10} />
        {/* <Modal
        component={<AddUserForm handleClose={handleCloseModal} onSubmit={handleSubmitAddUser} fields={fields} formValues={addUserForm} setFormValues={setAddUserForm} />}
        open={modalOpen}
        handleClose={handleCloseModal}
        title="Agregar usuario"
      /> */}
      </div>

    </div>
  );
};

export default Home;