import React, { useState, useEffect } from "react";
import "./Post.css";
import PostHeader from "./PostHeader/PostHeader";
import PostSend from "./PostSend/PostSend";
import PostList from "./PostList/PostList";

import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

function Post() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    async function getTweet() {
      const querySnapshot = await getDocs(collection(db, "tweet"));
      setPost(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          items: doc.data(),
        }))
      );
    }
    getTweet();
  }, []);

  console.log(post);

  return (
    <div className="post">
      <PostHeader />
      <PostSend />
      <PostList />
      <PostList />
      <PostList />
      <PostList />
      <PostList />
    </div>
  );
}

export default Post;
