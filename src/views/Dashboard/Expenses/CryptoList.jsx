import React from "react";
import "./CryptoList.css";

const CryptoList = () => {
  return (
    <div className="crypto-list">
      <div className="crypto-row">
        <div className="crypto-info">
          <img src="/btc.png" alt="BTC" className="crypto-icon" />
          <div>
            <div className="crypto-name">BTC</div>
            <div className="crypto-label">Bitcoin</div>
          </div>
        </div>
        <div className="crypto-stats">
          <div className="crypto-percent">20%</div>
          <div className="crypto-growth positive">+2.54%</div>
        </div>
      </div>

      <div className="crypto-row">
        <div className="crypto-info">
          <img src="/xrp.png" alt="XRP" className="crypto-icon" />
          <div>
            <div className="crypto-name">XRP</div>
            <div className="crypto-label">Ripple</div>
          </div>
        </div>
        <div className="crypto-stats">
          <div className="crypto-percent">10%</div>
          <div className="crypto-growth negative">-1.22%</div>
        </div>
      </div>

      <div className="crypto-row">
        <div className="crypto-info">
          <img src="/ada.png" alt="ADA" className="crypto-icon" />
          <div>
            <div className="crypto-name">ADA</div>
            <div className="crypto-label">Cardano</div>
          </div>
        </div>
        <div className="crypto-stats">
          <div className="crypto-percent">40%</div>
          <div className="crypto-growth positive">+10.50%</div>
        </div>
      </div>

      <div className="crypto-row">
        <div className="crypto-info">
          <img src="/eth.png" alt="ETH" className="crypto-icon" />
          <div>
            <div className="crypto-name">ETH</div>
            <div className="crypto-label">Ethereum</div>
          </div>
        </div>
        <div className="crypto-stats">
          <div className="crypto-percent">30%</div>
          <div className="crypto-growth negative">-12.38%</div>
        </div>
      </div>
    </div>
  );
};

export default CryptoList;
