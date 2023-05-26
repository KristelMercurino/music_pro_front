import { useContext, useState, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
import UserDetails from "./UserDetails";
import EditUser from "./EditUser";
import AddUser from "../components/AddUser";

const Users = () => {
  const { user } = useContext(UserContext);
  const [users, setUsers] = useState([]);
  const [showEditUser, setShowEditUser] = useState([]);
  const [showAddUser, setShowAddUser] = useState([]);

  

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  const handleDeleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <>
      {user.isAdmin ? (
        <div>
          <h2>Lista de usuarios</h2>
          <button onClick={() => setShowAddUser(true)}>Agregar usuario</button>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Correo electrónico</th>
                <th>Teléfono</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <UserDetails
                  key={user.id}
                  user={user}
                  onDelete={handleDeleteUser}
                  onEdit={() => setShowEditUser(user)}
                />
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No tienes permiso para ver esta página.</p>
      )}
      {showEditUser && (
        <EditUser user={showEditUser} onClose={() => setShowEditUser(null)} />
      )}
      {showAddUser && (
        <AddUser onClose={() => setShowAddUser(false)} />
      )}
    </>
  );
};

export default Users;
