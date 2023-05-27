import React from 'react';
import { TextField, Button } from '@mui/material';
import axios from 'axios';
import './add-user-form.css'; 

const FormWithFields = ({ onSubmit, onClose, fields }) => {
  const [formValues, setFormValues] = React.useState({});

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
    <form className="form" onSubmit={handleSubmit}>
      {fields.map((inputRow, index) => (
        <div key={index} className={`input-row ${inputRow.length > 2 ? 'three-per-line' : 'two-per-line'}`}>
          {inputRow.map((field, subIndex) => (
            <TextField
              key={subIndex}
              label={field.label}
              name={field.name}
              value={formValues[field.name] || ''}
              onChange={handleChange}
              className={`input-field ${field.fullWidth ? 'fullWidth' : ''}`}
              multiline={field.multiline}
              type={field.type}
            />
          ))}
        </div>
      ))}
      <Button variant="contained" color="primary" type="submit">
        Enviar
      </Button>
    </form>
  );
};

export default FormWithFields;
