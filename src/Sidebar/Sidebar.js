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

const xLogo =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/X11.svg/25px-X11.svg.png";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar_logo">{<img src={xLogo} alt="" />}</div>
      <SidebarOption Icon={GoHomeFill} text="home" />
      <SidebarOption Icon={BiSearch} text="discover" />
      <SidebarOption Icon={IoNotificationsOutline} text="notifications" />
      <SidebarOption Icon={HiOutlineMail} text="messagges" />
      <SidebarOption Icon={RiFileList2Line} text="lists" />
      <SidebarOption xLogo={xLogo} text="premium" />
      <SidebarOption Icon={BsPerson} text="profile" />
      <SidebarOption Icon={CgMoreO} text="more" />

      <button className="sidebar_button">Send</button>
    </div>
  );
}

export default Sidebar;
