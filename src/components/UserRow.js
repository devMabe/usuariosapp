import React from "react";
import { ButtonGreetings } from "./ButtonGreetings";

export const UserRow = ({ users }) => {
  return (
    <tr>
      <td scope="row">{users.id}</td>
      <td>{users.email}</td>
      <td>
        {users.first_name} {users.last_name}
      </td>
      <td>
        {" "}
        <img
          src={users.avatar}
          alt={users.first_name}
          className="img-thumbnail"
          style={{
            width: 50,
          }}
        />
      </td>
      <td>
       
        <ButtonGreetings users={users.first_name}/>
      </td>
    </tr>
  );
}
