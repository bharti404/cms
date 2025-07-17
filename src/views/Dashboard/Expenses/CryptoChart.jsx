import React from "react";
import "./CryptoChart.css";

const CryptoChart = () => {
  return (
    <div className="pie-chart">
      <div className="segment btc"></div>
      <div className="segment xrp"></div>
      <div className="segment ada"></div>
      <div className="segment eth"></div>
    </div>
  );
};

export default CryptoChart;
