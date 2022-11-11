import React, { useEffect, useState } from "react";
import { axiosUsers } from "../api/Users";
import "../css/body.css";
import gugu from "../img/gugu.png";
import mingi from "../img/mingi.jpg";
import img1 from "../img/sleep.jpeg";
import Main from "../pages/Main";
import Post_section from "./Post_section";
import Box3 from "./Box3";

function Body() {
  // User data 가져오기
  // useEffect는 페이지가 실행되면 가장 먼저 실행되는 부분!!
  useEffect(() => {
    const data = axiosUsers();

    data.then((data) => setUser(JSON.parse(data.user)));
  }, []);

  const [user, setUser] = useState({});
  console.log(user);

  const [login, setLogin] = useState(false);

  const onLogin = () => {
    setLogin(!login);
  };
  return (
    // body 를 구성하는 3개의 박스를 하나의 div (id="wrap1")으로 감쌌다.
    <div id="wrap1">
      <div className="box1">
        <div className="icon">
          <img
            onClick={() => {
              document.location.href = "/Main";
            }}
            src={gugu}
            width="100px"
            height="100px"
          />
        </div>
        <button
          className="home_btn"
          onClick={() => {
            document.location.href = "/Main";
          }}
        >
          HOME
        </button>
      </div>
      {/* ------------------------box2 수정------------------------ */}
      <div className="newpost_box2">
        <section className="newpost_section_view">
          <h2 className="newpost_title">Write new content</h2>
          <div>
            <input
              type="text"
              className="contentInput"
              placeholder="Write content..."
            ></input>
          </div>
          <button
            className="add_newPost"
            onClick={() => {
              document.location.href = "/Main";
            }}
          >
            Submit
          </button>
        </section>
      </div>
      {/* ------------------------box3 수정------------------------ */}
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
