import React from "react";
import "./SidebarOption.css";
function SidebarOption({ text, Icon, xLogo }) {
  return (
    <div className="sidebar_option">
      {xLogo ? <img src={xLogo} alt="" /> : <Icon className="icon" />}
      <h2 className="sidebarOption_text">{text}</h2>
    </div>
  );
}

export default SidebarOption;
