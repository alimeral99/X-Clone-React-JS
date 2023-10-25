import React from "react";
import "./Post.css";
import PostList from "./PostList";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

import Avatar from "react-avatar";
import { MdOutlineGifBox } from "react-icons/md";
import { AiOutlinePicture } from "react-icons/ai";
import { BsEmojiSmile } from "react-icons/bs";
import { PiNote } from "react-icons/pi";
import { CiLocationOn } from "react-icons/ci";

const addPost = async () => {
  try {
    const docRef = await addDoc(collection(db, "tweet"), {
      first: "Ada",
      last: "Lovelace",
      born: 1815,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

function Post() {
  return (
    <div className="post">
      <div className="post_header">
        <h2 className="post_title">Home</h2>
        <div className="postHeader_buttons">
          <button>Special you</button>
          <button>Follwing</button>
        </div>
      </div>
      <div className="post_content">
        <Avatar size="40px" name="Wim Mostmans" round="50px" />
        <div className="postContent_text">
          <textarea type="text" placeholder="What happening" />
          <div className="postContent_buttons">
            <div className="left_buttons">
              <MdOutlineGifBox className="leftButtons_icons" />
              <AiOutlinePicture className="leftButtons_icons" />
              <BsEmojiSmile className="leftButtons_icons" />
              <PiNote className="leftButtons_icons" />
              <CiLocationOn className="leftButtons_icons" />
            </div>
            <div className="right_button">
              <button onClick={addPost} className="sendText_button">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
      <PostList />
      <PostList />
      <PostList />
      <PostList />
      <PostList />
      <PostList />
    </div>
  );
}

export default Post;
