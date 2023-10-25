import React from "react";
import "./Post.css";
import PostHeader from "./PostHeader/PostHeader";
import PostSend from "./PostSend/PostSend";
import PostList from "./PostList/PostList";

function Post() {
  return (
    <div className="post">
      <PostHeader />
      <PostSend />
      <PostList />
    </div>
  );
}

export default Post;
