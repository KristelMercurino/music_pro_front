import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const DeleteUser = () => {
  const { id } = useParams();
  const history = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => setUser(response.data))
      .catch(error => console.log(error));
  }, [id]);

  const handleDelete = () => {
    axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => {
        console.log(response);
        history.push('/users');
      })
      .catch(error => console.log(error));
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Delete User</h1>
      <p>Are you sure you want to delete user {user.name}?</p>
      <button onClick={handleDelete}>Yes, delete user</button>
      <button onClick={() => history.push('/users')}>Cancel</button>
    </div>
  );
};

export default DeleteUser;
