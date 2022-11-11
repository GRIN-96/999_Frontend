import React, { useEffect, useState } from "react";
import { Link, Route, Router } from "react-router-dom";
import { axiosData, axiosUsers } from "../api/Users";
import "../css/body.css";
import gugu from "../img/gugu.png";
import mingi from "../img/mingi.jpg";
import img1 from "../img/sleep.jpeg";
import Main from "../pages/Main";
import Post_section from "./Post_section";

const name = "name";
const email = "email@email.com";
const postNum = 0;
const content =
  "contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent";

function Body() {
  const userList = [
    {
      userId: "456@naver.com",
      postContents: "두 번째 게시글 입니다.",
      postDate: "2022-11-11 09:47:19",
    },
    {
      userId: "789@naver.com",
      postContents: "세 번째 게시글 입니다.",
      postDate: "2022-11-11 09:47:19",
    },
  ];

  // User data 가져오기
  // useEffect는 페이지가 실행되면 가장 먼저 실행되는 부분!!
  useEffect(() => {
    const data = axiosUsers();

    data.then((data) => setUser(JSON.parse(data.user)));
  }, []);

  const [user, setUser] = useState({});
  const img = user.userMbti;

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
      <div className="box2">
        <div>
          {userList.map((user) => (
            <Post_section
              // key={}
              n_name={user.userId}
              content={user.postContents}
              date={user.postDate}
              img={img}
            />
          ))}
        </div>
      </div>

      {/* collection view 중 3번째에 해당하는 부분이다. */}
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

          <button className="add_posts">+</button>
        </div>
      </div>
    </div>
  );
}

export default Body;
