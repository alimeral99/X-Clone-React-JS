import React from "react";
import "./PostSend.css";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
import Avatar from "react-avatar";
import { MdOutlineGifBox } from "react-icons/md";
import { AiOutlinePicture } from "react-icons/ai";
import { BsEmojiSmile } from "react-icons/bs";
import { PiNote } from "react-icons/pi";
import { CiLocationOn } from "react-icons/ci";

function PostSend() {
  const sendTweet = async () => {
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

  return (
    <div className="post_send">
      <Avatar size="40px" name="Wim Mostmans" round="50px" />
      <div className="postSend_container">
        <div className="postSend_text">
          <textarea type="text" placeholder="What happening" />
        </div>
        <div className="postSend_buttons">
          <div className="left_buttons">
            <MdOutlineGifBox className="leftButtons_icons" />
            <AiOutlinePicture className="leftButtons_icons" />
            <BsEmojiSmile className="leftButtons_icons" />
            <PiNote className="leftButtons_icons" />
            <CiLocationOn className="leftButtons_icons" />
          </div>
          <div className="right_button">
            <button onClick={sendTweet} className="sendText_button">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostSend;
