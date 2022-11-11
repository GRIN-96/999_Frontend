import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>HOME</h1>
      {/* <Link to="/Login">Login</Link> <br /> */}
      <Link to="/Main">Main Page</Link> &nbsp;
      <Link to="/ListUser">User List</Link> &nbsp;
    </div>
  );
}
