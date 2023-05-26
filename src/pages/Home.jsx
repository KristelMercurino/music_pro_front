import React from "react";
import { Link } from "react-router-dom";

const Home = ({ user }) => {
  return (
    <div>
      {user.role === "client" ? (
        <>
          <h1>Welcome {user.name}</h1>
          <p>You can do certain actions here</p>
        </>
      ) : (
        <>
          <h1>Admin Panel</h1>
          <ul>
            <li>
              <Link to="/users">View Users</Link>
            </li>
            <li>
              <Link to="/users/add">Add User</Link>
            </li>
            <li>
          <Link to="/users/edit">Edit User</Link>
        </li>
        <li>
          <Link to="/users/delete">Delete User</Link>
        </li>
      </ul>
    </>
  )}
</div>
);
};

export default Home;