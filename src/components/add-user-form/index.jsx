import React from "react";
import { TextField, Button, Select, MenuItem } from "@mui/material";
import axios from "axios";
import "./add-user-form.css";

const FormWithFields = ({
  onSubmit,
  onClose,
  fields,
  formValues,
  setFormValues,
}) => {
  // const [formValues, setFormValues] = React.useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };


  React.useEffect(() => {
    fields.forEach((row) => {
      row.forEach((campo) => {
        if (campo.defaultValue !== undefined) {
          console.log(campo)
          setFormValues((prevValues) => ({
            ...prevValues,
            [campo.name]: campo.defaultValue,
          }));
        }
      })


    });
  }, []);
  console.log("formValues",formValues)
  return (
    <form className="form" onSubmit={onSubmit}>
      {fields.map((inputRow, index) => (
        <div
          key={index}
          className={`input-row ${
            inputRow.length > 2 ? "three-per-line" : "two-per-line"
          }`}
        >
          {inputRow.map((field, subIndex) =>
            field.type === "select" ? (
              <Select
                label={field.label}
                name={field.name}
                value={formValues[field.name] || ""}
                //defaultValue={field.defaultValue}
                className={`input-field ${field.fullWidth ? "fullWidth" : ""}`}
                onChange={handleChange}
                // Otros props que desees pasar
              >
                {field.options.map((opcion, index) => (
                  <MenuItem key={opcion.value} value={opcion.value}>
                    {opcion.label}
                  </MenuItem>
                ))}
              </Select>
            ) : (
              <TextField
                key={subIndex}
                label={field.label}
                //value={field.defaultValue || formValues[field.name]}
                name={field.name}
                value={formValues[field.name] }
                onChange={handleChange}
                className={`input-field ${field.fullWidth ? "fullWidth" : ""}`}
                multiline={field.multiline}
                type={field.type}
              />
            )
          )}
        </div>
      ))}
      <Button variant="contained" color="primary" type="submit">
        Enviar
      </Button>
    </form>
  );
};

export default FormWithFields;
