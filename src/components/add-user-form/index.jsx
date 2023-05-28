import React from 'react';
import { TextField, Button } from '@mui/material';
import axios from 'axios';
import './add-user-form.css'; 

const FormWithFields = ({ onSubmit, onClose, fields, formValues, setFormValues }) => {
  // const [formValues, setFormValues] = React.useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <form className="form" onSubmit={onSubmit}>
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
