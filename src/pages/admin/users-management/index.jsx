import React, { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import "./users-management.css";

import DataTable from "../../../components/table";
import { fetchService } from "../../../services/api";

import AddUserForm from "../../../components/add-user-form";
import Modal from "../../../components/modal";

const Home = ({ handleLogout }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const handleOpenModal = () => {
    console.log("open modal");
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const fields = [
    [
      {
        label: "Nombre",
        name: "nombres",
        type: "text",
        fullWidth: true,
        defaultValue: "John"
      },
      {
        label: "Apellidos",
        name: "apellidos",
        type: "text",
        fullWidth: true,
        defaultValue: "John"
      },
    ],
    [
      {
        label: "Rut",
        name: "rut",
        type: "text",
        fullWidth: true,
        defaultValue: null
      },
      {
        label: "Username",
        name: "nombreusuario",
        type: "text",
        fullWidth: true,
        defaultValue: "John"
      },
    ],
    [
      {
        label: "Correo electrónico",
        name: "email",
        type: "email",
        fullWidth: false,
        defaultValue: "John@d.com"
      },
      {
        label: "Contraseña",
        name: "password",
        type: "password",
        fullWidth: false,
        defaultValue: null
      },
    ],
    [
      {
        label: "Dirección",
        name: "direccion",
        type: "text",
        fullWidth: true,
        defaultValue: "John"
      },
    ],
    [
      {
        label: "Tipo uusuario",
        name: "id_perfil",
        type: "select",
        options: [
          { value: 1, label: "Administrador" },
          { value: 2, label: "Vendedor" },
          { value: 3, label: "Bodeguero" },
          { value: 4, label: "Contador" },
        ],
        defaultValue: 2,
      },
    ],
  ];

  const [data, setData] = useState([]);
  const [addUserForm, setAddUserForm] = useState({});
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

  const handleSubmitAddUser = async (event) => {
    event.preventDefault();

    const formData = { ...addUserForm };
    // Verificar los campos del formulario y asignar los valores por defecto si no se han cambiado
    // fields.forEach((campo) => {
    //   if (!(campo.name in formData)) {
    //     formData[campo.name] = campo.defaultValue;
    //   }
    // });
    fields.forEach((campo) => {
      if (!(campo.name in formData) || formData[campo.name] === "") {
        formData[campo.name] = campo.defaultValue || "";
      }
      //formData[campo.name] = formValues[campo.name] || campo.defaultValue || "";
    });

    try {
      // Enviar la solicitud POST para agregar el usuario
      await fetchService("POST", formData, "insertar_usuario");
      console.log(formData);
      // Llamar a la función onSubmit pasando el objeto del usuario
      // onSubmit(user);

      // Limpiar los campos después de enviar el formulario
      // setName('');
      // setEmail('');

      // Ejecutar la función de cerrar pasada como prop
      //handleCloseModal();
    } catch (error) {
      console.error("Error al agregar el usuario:", error);
    }
  };

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
          component={
            <AddUserForm
              handleClose={handleCloseModal}
              onSubmit={handleSubmitAddUser}
              fields={fields}
              formValues={addUserForm}
              setFormValues={setAddUserForm}
            />
          }
          open={modalOpen}
          handleClose={handleCloseModal}
          title="Agregar usuario"
        />
      </div>
    </div>
  );
};

export default Home;
