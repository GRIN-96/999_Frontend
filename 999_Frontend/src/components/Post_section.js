import React from "react";
import gugu from "../img/gugu.png";
import mingi from "../img/mingi.jpg";
import img1 from "../img/sleep.jpeg";

function Post_section({ n_name, content, date }) {
  return (
    <section className="section_view">
      <img className="profile_img" src={mingi} width="100px" height="100px" />
      <div className="posts">
        <div className="post_name">
          <span>{n_name}</span>
          <span className="post_detail">@{n_name}</span>
          <span className="post_detail">{date}</span>
        </div>
        <div className="post_content">{content}</div>
        <img className="post_img" src={img1} />
      </div>
    </section>
  );
}

export default Post_section;
