import React from "react";
import { useState, useEffect } from "react";
import { axiosUsers } from "../api/Users";

function ListUser() {
  //
  useEffect(() => {
    const data = axiosUsers();

    data.then((data) => setUser(JSON.parse(data.user))); // json으로 받아온 값을 user로 재정의
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
