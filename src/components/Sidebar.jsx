import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
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
  );
};

export default Sidebar;
