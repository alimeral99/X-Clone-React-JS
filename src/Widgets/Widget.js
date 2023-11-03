import React, { useState, useEffect } from "react";
import "./Widget.css";
import Trend from "./Trend/Trend";
import { BiSearch, BiTrendingUp } from "react-icons/bi";

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
      <h2>test</h2>
      <h2>test</h2>
    </div>
  );
}

export default Widget;
