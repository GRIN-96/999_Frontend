import React from "react";
import img5 from "../img/gugu.png";
import img1 from "../img/강아쥐.jpg";
import img2 from "../img/멋쟁이최맹기.jpg";
import img3 from "../img/본호번호볼콕.jpeg";
import img4 from "../img/팬더엉덩이.jpg";
import img6 from "../img/홀쭉본호.jpeg";
import img7 from "../img/꼬미.jpg";
import img8 from "../img/돼지본호본호.gif";
import img9 from "../img/어떡하지.gif";
import img10 from "../img/포장마차.gif";
import img11 from "../img/cat.jpg";
import img12 from "../img/img.jpg";

function Post_section({ n_name, content, date, users }) {
  const imgs = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
  ];

  function search() {
    for (let i = 0; i < users.length; i++) {
      if (users[i].userEmail === n_name) {
        console.log(users[i]);
        return users[i];
      }
    }
  }

  let profile_search = search();

  const idx = Math.floor(Math.random() * 12);
  //   console.log(n_name, content, date, img);
  return (
    <section className="section_view">
      <img
        className="profile_img"
        src={profile_search.userMbti}
        width="100px"
        height="100px"
      />
      <div className="posts">
        <div className="post_name">
          <span>{profile_search.userNickname}</span>
          <span className="post_detail">@{n_name}</span>
          <span className="post_detail">{date}</span>
        </div>
        <div className="post_content">{content}</div>
        <img className="post_img" src={imgs[idx]} />
      </div>
    </section>
  );
}

export default Post_section;
