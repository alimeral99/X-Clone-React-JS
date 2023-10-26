import React, { useState, useEffect } from "react";
import "./Post.css";
import PostHeader from "./PostHeader/PostHeader";
import PostSend from "./PostSend/PostSend";
import PostList from "./PostList/PostList";

import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { PiArrowsOutSimpleLight } from "react-icons/pi";

function Post() {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    async function getTweet() {
      const querySnapshot = await getDocs(collection(db, "tweet"));
      setTweets(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          items: doc.data(),
        }))
      );
    }
    getTweet();
  }, []);

  return (
    <div className="post">
      <PostHeader />
      <PostSend />
      {tweets.map((post) => (
        <PostList items={post.items} key={post.id} />
      ))}
    </div>
  );
}

export default Post;
