import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ViewUsers = () => {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  if (!users) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
            <span> ({user.email})</span>
            <Link to={`/users/${user.id}/edit`}>Edit</Link>
            <Link to={`/users/${user.id}/delete`}>Delete</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewUsers;
