import React from "react";
import "./Widget.css";
import { BiSearch } from "react-icons/bi";

function Widget() {
  return (
    <div className="widget">
      <div className="widget_header">
        <div className="widget_search">
          <BiSearch />
          <input type="text" placeholder="search" />
        </div>
      </div>
    </div>
  );
}

export default Widget;
