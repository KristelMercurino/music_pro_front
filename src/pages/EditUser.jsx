import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const { id } = useParams();
  const history = useNavigate();

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => {
        setName(response.data.name);
        setEmail(response.data.email);
        setPhone(response.data.phone);
      })
      .catch(error => console.log(error));
  }, [id]);

  const handleSubmit = event => {
    event.preventDefault();

    axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, { name, email, phone })
      .then(() => history.push('/users'))
      .catch(error => console.log(error));
  };

  return (
    <div>
      <h1>Edit User</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={event => setName(event.target.value)} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={event => setEmail(event.target.value)} />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="phone" value={phone} onChange={event => setPhone(event.target.value)} />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EditUser;
