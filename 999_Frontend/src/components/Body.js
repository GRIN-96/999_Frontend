import React, { useEffect, useState } from "react";
import { axiosUsers, axiosAllUsers } from "../api/Users";
import { axiosPosts } from "../api/Posts";
import "../css/body.css";
import gugu from "../img/gugu.png";
import mingi from "../img/mingi.jpg";
import img1 from "../img/sleep.jpeg";
import Main from "../pages/Main";
import Post_section from "./Post_section";
import Box3 from "./Box3";

import { useLocation } from "react-router-dom";

function Body({ searchPost }) {
  // location test
  // const location = useLocation();
  // console.log(location);
  // const searchPost = location.state.data;
  // console.log(searchPost);

  // User data 가져오기
  // useEffect는 페이지가 실행되면 가장 먼저 실행되는 부분!!
  useEffect(() => {
    const data = axiosUsers();
    const postData = axiosPosts();
    const allUsers = axiosAllUsers();

    data.then((data) => setUser(JSON.parse(data.user)));
    allUsers.then((allUsers) => setUsers(JSON.parse(allUsers.users)));
    postData.then((postData) => setPosts(JSON.parse(postData.postList)));
    // console.log(postData);
  }, []);

  const [user, setUser] = useState({});
  const [users, setUsers] = useState({});
  const [posts, setPosts] = useState([]);

  console.log("LOOK HERE : ", searchPost);
  if (searchPost !== null) {
    // setPosts(searchPost);
    console.log("NEW SET OF POSTS: ", searchPost);
  }

  // console.log(user);
  // console.log(posts);
  console.log(users);

  const img = user.userMbti;

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
          {posts.map((post) => (
            <Post_section
              key={post.postId}
              n_name={post.userId}
              content={post.postContents}
              date={post.postDate}
              users={users}
            />
          ))}
        </div>
      </div>

      {/* collection view 중 3번째에 해당하는 부분이다. */}
      <div className="box3">
        <img className="my_profile" src={user.userMbti} alt="profile"></img>
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
        <button
          className="add_posts"
          onClick={() => {
            document.location.href = "/NewPost";
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Body;
