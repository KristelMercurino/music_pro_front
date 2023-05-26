import React, { useState, useEffect } from "react";
import axios from "axios";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    };
    getUsers();
  }, []);

  const handleDelete = (event, userId) => {
    event.preventDefault();
    axios.delete(`https://jsonplaceholder.typicode.com/users/${userId}`);
    setUsers(users.filter((user) => user.id !== userId));
    };
    
    return (
    <div className="user-list">
    <h2>Usuarios</h2>
    <ul>
    {users.map((user) => (
    <li key={user.id}>
    {user.name} ({user.email})
    <div className="actions">
    <button>Editar</button>
    <button onClick={(event) => handleDelete(event, user.id)}>
    Eliminar
    </button>
    </div>
    </li>
    ))}
    </ul>
    </div>
    );
    };
    
    export default UserList;
