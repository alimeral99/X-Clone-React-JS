import React from "react";
import "./PostList.css";
import Avatar from "react-avatar";
import { GoComment } from "react-icons/go";
import { FiRepeat } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { BiShow } from "react-icons/bi";
import { LuShare } from "react-icons/lu";
import { FiMoreHorizontal } from "react-icons/fi";

function PostList({ items }) {
  const { displayName, username, text, avatar } = items;

  console.log(items);
  return (
    <div className="post_list">
      <div className="posList_avatarContainer">
        <Avatar
          size="40px"
          src={avatar}
          round="50px"
          className="postList_img"
        />
      </div>
      <div className="postList_info">
        <div className="postList_header">
          <h2 className="postList_headerName">
            {displayName}
            <span className="postList_headerUsername">{username}</span>
          </h2>
          <FiMoreHorizontal />
        </div>
        <div className="postList_content">
          <p className="postList_text">{text}</p>
        </div>
        <div className="postList_footer">
          <GoComment className="footer_icons" />
          <FiRepeat className="footer_icons" />
          <AiOutlineHeart className="footer_icons" />
          <BiShow className="footer_icons" />
          <LuShare className="footer_icons" />
        </div>
      </div>
    </div>
  );
}

export default PostList;
