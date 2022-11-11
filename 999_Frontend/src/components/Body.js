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
      {login && <Box3 />}
    </div>
  );
}

export default Body;
