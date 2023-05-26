import { useContext } from "react";
import UserContext from "../contexts/UserContext";

const UserDetails = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h2>User Details</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      {/* Aquí podrías agregar más detalles del usuario */}
    </div>
  );
};

export default UserDetails;
