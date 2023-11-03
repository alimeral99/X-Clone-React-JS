import React from "react";
import "./Trend.css";

function Trend({ items }) {
  const { subject, trendName, amount } = items;
  return (
    <div className="trend">
      <h6 className="trend_subject">{subject}</h6>
      <h4 className="trend_name">{trendName}</h4>
      <h6 className="trend_amount">{amount} b posts</h6>
    </div>
  );
}

export default Trend;
