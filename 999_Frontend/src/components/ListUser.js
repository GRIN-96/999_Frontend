import React from "react";
import { useState, useEffect } from "react";
import { axiosData } from "../api/Users";

function ListUser() {
  //
  useEffect(() => {
    const data = axiosData();

    data.then((data) => setUser(JSON.parse(data.user)));
  }, []);

  const [user, setUser] = useState({});
  console.log(user);

  return (
    <div>
      <h1>User List</h1>
      {user.userEmail}
    </div>
  );
}

export default ListUser;
