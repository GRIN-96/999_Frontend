import React from "react";
import "../css/body.css";
import gugu from "../img/gugu.png";
import mingi from "../img/mingi.jpg";

const name = "name";
const email = "email@email.com";
const postNum = 0;

function Body() {
  return (
    <body id="wrap1">
      <div className="box1">
        <div className="icon">
          <img src={gugu} width="100px" height="100px" />
        </div>
      </div>
      <div className="box2">
        <section className="section_view">
          <img
            className="profile_img"
            src={mingi}
            width="100px"
            height="100px"
          />
          <div className="posts">
            <div className="post_name">
              <span>닉네임</span>
              <span>닉네임</span>
              <span>date</span>
            </div>
          </div>
        </section>
      </div>
      <div className="box3">
        <img className="my_profile" src={mingi} alt="profile"></img>
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
