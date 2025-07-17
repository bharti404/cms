import React from "react";
import "./CryptoBalance.css";

const CryptoBalance = () => {
  return (
    <div className="balance-container">
      <h3 className="balance-title">Account Balance</h3>
      <div className="balance-value">$54,584.23</div>
      <div className="btc-amount">1.0045983485234 BTC</div>

      <div className="change-wrapper">
        <div className="change-box">
          <span className="arrow-icon">📈</span> + $3,594.00
        </div>
        <div className="change-label">this month</div>
      </div>

      <div className="action-buttons">
        <button className="send-btn">Send</button>
        <button className="receive-btn">Receive</button>
      </div>
    </div>
  );
};

export default CryptoBalance;
