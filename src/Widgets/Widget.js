import React, { useState, useEffect } from "react";
import "./Widget.css";
import Trend from "./Trend/Trend";
import { BiSearch } from "react-icons/bi";
import Avatar from "react-avatar";

import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

function Widget() {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    async function getTrends() {
      const querySnapshot = await getDocs(collection(db, "trends"));
      setTrends(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          items: doc.data(),
        }))
      );
    }
    getTrends();
  }, []);

  return (
    <div className="widget">
      <div className="widget_header">
        <div className="widget_search">
          <BiSearch />
          <input type="text" placeholder="search" />
        </div>
      </div>

      <div className="widget_trendContent">
        <h2 className="trendContent_title">Things that might interest you</h2>
        {trends.map((trend) => (
          <Trend items={trend.items} key={trend.id} />
        ))}
      </div>

      <div className="widget_footer">
        <div className="widget_footerContainer">
          <Avatar size="40px" name="Ahmet Yilmaz" round="50px" />
          <div className="footer_profileInfo">
            <h2>Ahmet Yilmaz</h2>
            <h5>@ahmet333</h5>
          </div>
          <button>Follow</button>
        </div>
        <div className="widget_footerContainer">
          <Avatar size="40px" name="Merve Atmaca" round="50px" />
          <div className="footer_profileInfo">
            <h2>Merve Atmaca</h2>
            <h5>@merve2221</h5>
          </div>
          <button>Follow</button>
        </div>
        <div className="widget_footerContainer">
          <Avatar size="40px" name="Selim Kaya" round="50px" />
          <div className="footer_profileInfo">
            <h2>Selim Kaya</h2>
            <h5>@selim1111</h5>
          </div>
          <button>Follow</button>
        </div>
      </div>
    </div>
  );
}

export default Widget;
