import React from "react";
import "./PostList.css";
import Avatar from "react-avatar";

function PostList() {
  return (
    <div className="post_list">
      <Avatar size="40px" name="Wim Mostmans" round="50px" />
      <div className="postList_info">
        <div className="postList_header">
          <h2 className="postList_headerName">
            mahmut mahmut{" "}
            <span className="postList_headerUsername">testest21</span>
          </h2>
        </div>
        <div className="postList_content">
          <p className="postList_text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam,
            veritatis.
          </p>
        </div>
        <div className="postList_footer"></div>
      </div>
    </div>
  );
}

export default PostList;
