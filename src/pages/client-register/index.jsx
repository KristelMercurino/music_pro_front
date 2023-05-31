import React, { useState } from 'react';
import './client-register.css';
import {fetchService} from '../../services/api'


const RegistroUsuarioForm = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [password, setPassword] = useState('');
  const [registroExitoso, setRegistroExitoso] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para enviar los datos del formulario y realizar el registro del usuario

    // Simulando el registro exitoso
    const data = {
      nombre,
      apellido,
      email,
      telefono,
      password
    }
    fetchAxios("POST", data, "insertar_cliente");
  };


  const fetchAxios = async (method, data, endpoint_name) => {
    try {
      const response = await fetchService(method, data, endpoint_name);
      console.log(response)
      setRegistroExitoso(true);
      // Realiza las acciones necesarias con los datos de respuesta
    } catch (error) {
      // Maneja el error si ocurre alguno
    }
  };

  if (registroExitoso) {
    return (
      <div className="registro-form registro-exitoso">
        <h2>¡Usuario creado exitosamente!</h2>
        <button onClick={() => window.location.href = '/login'}>Iniciar sesión</button>
        <form onSubmit={handleSubmit}>
          {/* Resto del formulario */}
        </form>
      </div>
    );
  }

  return (
    <form className="registro-form" onSubmit={handleSubmit}>
      <h2>Registro de Usuario</h2>
      <div className="form-group">
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="apellido">Apellido:</label>
        <input
          type="text"
          id="apellido"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="telefono">Teléfono:</label>
        <input
          type="tel"
          id="telefono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className="button-group">
        <button type="submit" className="crear-button">
          Crear
        </button>
        <span className="separator">-o-</span>
        <button
          type="button"
          className="iniciar-button"
          onClick={() => window.location.href = '/login'}
        >
          Iniciar sesión
        </button>
      </div>
    </form>
  );
};

export default RegistroUsuarioForm;
