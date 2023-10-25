import React from "react";
import "./PostHeader.css";
function PostHeader() {
  return (
    <div className="post_header">
      <h2 className="postHeader_title">Home</h2>
      <div className="postHeader_buttons">
        <button>Special you</button>
        <button>Follwing</button>
      </div>
    </div>
  );
}

export default PostHeader;
