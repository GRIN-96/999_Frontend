import React from "react";
import "../css/body.css";
import gugu from "../img/gugu.png";
import mingi from "../img/mingi.jpg";
import img1 from "../img/sleep.jpeg";

const name = "name";
const email = "email@email.com";
const postNum = 0;
const content =
  "contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent";
const nickname = "@mingi";
const date = "1시간";

function Body() {
  return (
    <body id="wrap1">
      <div className="box1">
        <div className="icon">
          <img src={gugu} width="100px" height="100px" />
        </div>
      </div>
      <div className="box2">
        <script>
          <section className="section_view">
            <img
              className="profile_img"
              src={mingi}
              width="100px"
              height="100px"
            />
            <div className="posts">
              <div className="post_name">
                <span>{nickname}</span>
                <span className="post_detail">{nickname}</span>
                <span className="post_detail">{date}</span>
              </div>
              <div className="post_content">{content}</div>
              <img className="post_img" src={img1} />
            </div>
          </section>
        </script>
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
