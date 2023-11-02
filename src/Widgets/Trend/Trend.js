import React from "react";
import "./Trend.css";

function Trend({ items }) {
  const { subject, trendName, amount } = items;
  return (
    <div className="trend">
      <h4>{subject}</h4>
      <h2>{trendName}</h2>
      <h4>{amount}</h4>
    </div>
  );
}

export default Trend;
