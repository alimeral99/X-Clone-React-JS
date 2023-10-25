import React from "react";
import "./PostList.css";
import Avatar from "react-avatar";
import { GoComment } from "react-icons/go";
import { FiRepeat } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { BiShow } from "react-icons/bi";
import { LuShare } from "react-icons/lu";
import { FiMoreHorizontal } from "react-icons/fi";

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
          <FiMoreHorizontal />
        </div>
        <div className="postList_content">
          <p className="postList_text">
            Lorem ipsum dolor, sit amet consectetur adipisicing
            elitaaaasssssssss Numquamfdfddffdfddfdf veritatis.
          </p>
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
