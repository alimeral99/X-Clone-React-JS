import React from "react";
import "./SidebarOption.css";
function SidebarOption({ text, Icon }) {
  return (
    <div className="sidebar_option">
      <Icon className="icon" />
      <h2 className="sidebarOption_text">{text}</h2>
    </div>
  );
}

export default SidebarOption;
