import { useEffect, useState } from "react";
import { userApi } from "../api/userApi";

export const useUsers = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const rep = await userApi.get("https://reqres.in/api/users");
    setUser(rep.data.data);
  };

  return{
    users
  }
};
