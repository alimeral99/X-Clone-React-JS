import React from "react";
import SidebarOption from "./SidebarOption";
import "./Sidebar.css";
import { GoHomeFill } from "react-icons/go";
import { BiSearch } from "react-icons/bi";
import { IoNotificationsOutline } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { RiFileList2Line } from "react-icons/ri";
import { BsPerson } from "react-icons/bs";
import { CgMoreO } from "react-icons/cg";
import { FaXTwitter } from "react-icons/fa6";

function Sidebar() {
  return (
    <div className="sidebar">
      <FaXTwitter className="sidebar_logo" />
      <SidebarOption Icon={GoHomeFill} text="home" />
      <SidebarOption Icon={BiSearch} text="discover" />
      <SidebarOption Icon={IoNotificationsOutline} text="notifications" />
      <SidebarOption Icon={HiOutlineMail} text="messagges" />
      <SidebarOption Icon={RiFileList2Line} text="lists" />
      <SidebarOption Icon={FaXTwitter} text="premium" />
      <SidebarOption Icon={BsPerson} text="profile" />
      <SidebarOption Icon={CgMoreO} text="more" />

      <button className="sidebar_button">Send</button>
    </div>
  );
}

export default Sidebar;
