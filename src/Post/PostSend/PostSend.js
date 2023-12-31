import React, { useState } from "react";
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
  const [input, setInput] = useState("");
  const [image, setImage] = useState("");

  const sendTweet = async (e) => {
    e.preventDefault();
    if (input || image) {
      await addDoc(collection(db, "tweet"), {
        displayName: "Ali Meral",
        username: "alimeral99",
        text: input,
        image: image,
        avatar: "https://avatars.githubusercontent.com/u/116317867?v=4",
      });
    }
    setInput("");
    setImage("");
  };

  const sendImage = () => {
    let imgUrl = prompt("please enter image url");
    setImage(imgUrl);
  };

  return (
    <div className="post_send">
      <Avatar
        size="40px"
        src="https://avatars.githubusercontent.com/u/116317867?v=4"
        round="50px"
      />
      <div className="postSend_container">
        <div className="postSend_text">
          <textarea
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="What happening"
          />
        </div>
        {image && (
          <img src={image} alt="tweet_image" className="postTweet_image" />
        )}
        <form className="postSend_buttons" onSubmit={sendTweet}>
          <div className="left_buttons">
            <MdOutlineGifBox className="leftButtons_icons" />
            <AiOutlinePicture
              onClick={sendImage}
              className="leftButtons_icons"
            />
            <BsEmojiSmile className="leftButtons_icons" />
            <PiNote className="leftButtons_icons" />
            <CiLocationOn className="leftButtons_icons" />
          </div>
          <div className="right_button">
            <button className="sendText_button">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PostSend;
