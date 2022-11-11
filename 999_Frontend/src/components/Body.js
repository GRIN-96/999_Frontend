import React, { useEffect, useState } from "react";
import { Link, Route, Router } from "react-router-dom";
import { axiosUsers } from "../api/Users";
import "../css/body.css";
import gugu from "../img/gugu.png";
import mingi from "../img/mingi.jpg";
import img1 from "../img/sleep.jpeg";
import Main from "../pages/Main";

const name = "name";
const email = "email@email.com";
const postNum = 0;
const content =
  "contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent";

function Body() {
  // User data 가져오기
  // useEffect는 페이지가 실행되면 가장 먼저 실행되는 부분!!
  useEffect(() => {
    const data = axiosUsers();

    data.then((data) => setUser(JSON.parse(data.user)));
  }, []);

  const [user, setUser] = useState({});
  console.log(user);

  return (
    <div id="wrap1">
      <div className="box1">
        <div className="icon">
          <img src={gugu} width="100px" height="100px" />
        </div>
        {/* <Router>
          <div>
            <Link to="/Main">Main</Link>
            <Route path="/" element={<Main />} />
            <Route exact path="/" element={<Main />} />
          </div>
        </Router> */}
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
              <span className="post_detail">닉네임</span>
              <span className="post_detail">date</span>
            </div>
            <div className="post_content">{content}</div>
            <img className="post_img" src={img1} />
          </div>
        </section>
      </div>
      <div className="box3">
        <img className="my_profile" src={mingi} alt="profile"></img>
        <div className="profile_info">
          <p className="item">
            <img
              className="box3_icon"
              src="https://cdn-icons-png.flaticon.com/512/2354/2354573.png"
              alt="mail"
            ></img>
            {user.userNickname}
          </p>
          <p className="item">
            <img
              className="box3_icon"
              src="https://cdn-icons-png.flaticon.com/512/646/646094.png"
              alt="mail"
            ></img>
            {user.userEmail}
          </p>
          <p className="item">
            <img
              className="box3_icon"
              src="https://cdn-icons-png.flaticon.com/512/3024/3024608.png"
              alt="post"
            ></img>
            Post #: {user.userPostCnt}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Body;
