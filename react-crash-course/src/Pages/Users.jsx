import { useParams } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";

function Users() {
  const { id } = useParams();
  const [user, setUser] = useState({});

  async function fetchUser() {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    setUser(data);
    console.log(data)
  }

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      <h1>{user.id}</h1>
      <h1>{user.name}</h1>
      <h1>{user.email}</h1>
      <h1>{user.username}</h1>
    </div>
  );
}

export default Users;
