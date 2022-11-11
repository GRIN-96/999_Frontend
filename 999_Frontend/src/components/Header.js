import React from "react";
import "../css/header.css";

function Header() {
  return (
    <div className="header">
      <button
        className="login-btn"
        onClick={() => {
          document.location.href = "/Login";
        }}
      >
        Login
      </button>
      <button className="signup-btn">Sign-Up</button>
    </div>
  );
}

export default Header;
