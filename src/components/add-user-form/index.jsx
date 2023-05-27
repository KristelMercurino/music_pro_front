// import React, { useState } from 'react';
// import axios from 'axios';
// import { TextField, Button } from '@mui/material';

// const AddUserForm = ({ handleClose }) => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       //await axios.post('/api/users', { name, email }); // Cambia "/api/users" por tu endpoint real
//       handleClose(); // Cierra el modal después de enviar el formulario
//       //window.location.reload(); // Recarga la página para reflejar los cambios
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <TextField
//         label="Nombre"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <TextField
//         label="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
      
//       <Button className="form-button" type="submit" variant="contained" color="primary">
//         Enviar
//       </Button>
//     </form>
//   );
// };

// export default AddUserForm;


import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import axios from 'axios';
import './add-user-form.css';

const AddUserForm = ({ onSubmit, onClose, fields }) => {
  const [formValues, setFormValues] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validar los campos antes de enviar el formulario
    // if (!name || !email) {
    //   alert('Por favor, complete todos los campos');
    //   return;
    // }

    // Crear un objeto con los datos del usuario
    const user = {
      // name,
      // email,
    };

    try {
      // Enviar la solicitud POST para agregar el usuario
      await axios.post('https://ejemplo.com/api/users', user);

      // Llamar a la función onSubmit pasando el objeto del usuario
      onSubmit(user);

      // Limpiar los campos después de enviar el formulario
      // setName('');
      // setEmail('');

      // Ejecutar la función de cerrar pasada como prop
      onClose();
    } catch (error) {
      console.error('Error al agregar el usuario:', error);
    }
  };

  return (
    <form className="add-user-form" onSubmit={handleSubmit}>
      {fields.map((field) => (
        <TextField
          key={field.name}
          name={field.name}
          label={field.label}
          value={formValues[field.name] || ''}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          {...field.props}
        />
      ))}

      <div className="form-actions">
        <Button type="submit" variant="contained" color="primary">
          Añadir
        </Button>
        <Button variant="contained" color="secondary" onClick={onClose}>
          Cerrar
        </Button>
      </div>
    </form>
  );
};

export default AddUserForm;
