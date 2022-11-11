import React, { useEffect, useState } from "react";
import { axiosUsers } from "../api/Users";
import "../css/body.css";
import gugu from "../img/gugu.png";
import mingi from "../img/mingi.jpg";
import img1 from "../img/sleep.jpeg";
import Main from "../pages/Main";
import Post_section from "./Post_section";

function Box3() {
  // User data 가져오기
  // useEffect는 페이지가 실행되면 가장 먼저 실행되는 부분!!
  useEffect(() => {
    const data = axiosUsers();

    data.then((data) => setUser(JSON.parse(data.user)));
  }, []);

  const [user, setUser] = useState({});
  console.log(user);

  return (
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
  );
}

export default Box3;
