import React from "react";
import "../css/body.css";
import profile from "../img/user_color.png";

const name = "name";
const email = "email@email.com";
const postNum = 0;

function Body() {
  return (
    <body id="wrap1">
      <div className="box1">S</div>
      <div className="box2">S</div>
      <div className="box3">
        <img className="my_profile" src={profile} alt="profile"></img>
        <div className="profile_info">
          <p className="item">{name}</p>
          <p className="item">{email}</p>
          <p className="item">Post #: {postNum}</p>
        </div>
      </div>
    </body>
  );
}

export default Body;
