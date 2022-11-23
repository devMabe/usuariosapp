import { UserRow } from "../components/UserRow";
import { useUsers } from "../hooks/useUsers";

export const UserPage = () => {
  const { users } = useUsers(); //useCustom 

  return (
    <div className="mt-5">
      <h1>Users</h1>
      <hr />
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>EMAIL</th>
            <th>NOMBRE</th>
            <th>AVATAR</th>
            <th>OPTION</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <UserRow 
               key={user.email} 
               users={user} 
            />
          ))}
        </tbody>
      </table>
      
    </div>
  );
};
