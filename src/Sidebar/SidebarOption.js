import React from "react";

function SidebarOption({ text, Icon, xLogo }) {
  return (
    <div>
      {xLogo ? <img src={xLogo} alt="" /> : <Icon />}
      <h2>{text}</h2>
    </div>
  );
}

export default SidebarOption;
