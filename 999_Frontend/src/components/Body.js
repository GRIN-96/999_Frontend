import React, { useEffect, useState } from "react";
import { axiosData } from "../api/Users";
import "../css/body.css";
import gugu from "../img/gugu.png";
import mingi from "../img/mingi.jpg";
import img1 from "../img/sleep.jpeg";
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
    const data = axiosData();

    data.then((data) => setUser(JSON.parse(data.user)));
  }, []);

  const [user, setUser] = useState({});
  console.log(user);

  return (
    // body 를 구성하는 3개의 박스를 하나의 div (id="wrap1")으로 감쌌다.
    <div id="wrap1">
      <div className="box1">
        <div className="icon">
          <img src={gugu} width="100px" height="100px" />
        </div>
      </div>
      <div className="box2">
        <div>
          {userList.map((user) => (
            <Post_section
              n_name={user.userId}
              content={user.postContents}
              date={user.postDate}
            />
          ))}
        </div>
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
