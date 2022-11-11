import React from "react";
import img5 from "../img/gugu.png";
import img1 from "../img/강아쥐.jpg";
import img2 from "../img/멋쟁이최맹기.jpg";
import img3 from "../img/본호번호볼콕.jpeg";
import img4 from "../img/팬더엉덩이.jpg";
import img6 from "../img/홀쭉본호.jpeg";

function Post_section({ n_name, content, date, img }) {
  const imgs = [img1, img2, img3, img4, img5, img6];
  const idx = Math.floor(Math.random() * 6);
  console.log(n_name, content, date, img);

  return (
    <section className="section_view">
      <img className="profile_img" src={img} width="100px" height="100px" />
      <div className="posts">
        <div className="post_name">
          <span>{n_name}</span>
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
