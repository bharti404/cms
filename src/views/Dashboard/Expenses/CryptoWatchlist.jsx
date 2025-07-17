import React from "react";
import "./CryptoWatchlist.css";

const CryptoWatchlist = () => {
  const cryptos = [
    {
      name: "Bitcoin",
      symbol: "BTC",
      price: "$56,475.99",
      change: "+12.5%",
      changeType: "up",
      icon: "🟠",
      polyline: "0,20 20,40 40,30 60,50 80,35 100,45",
    },
    {
      name: "Ethereum",
      symbol: "ETH",
      price: "$1,968.00",
      change: "-3.24%",
      changeType: "down",
      icon: "💎",
      polyline: "0,50 20,30 40,60 60,25 80,45 100,40",
    },
    {
      name: "Cardano",
      symbol: "ADA",
      price: "$23.00",
      change: "-0.33%",
      changeType: "down",
      icon: "⚫",
      polyline: "0,35 20,45 40,25 60,40 80,50 100,30",
    },
  ];

  return (
    <div className="watchlist">
      <div className="watchlist-header">
        <div>
          <h3>Crypto Watchlist</h3>
          <p>List of all crypto assets you are following</p>
        </div>
        <div className="view-toggle">
          <button className="btn selected">📋</button>
          <button className="btn">🔲</button>
        </div>
      </div>

      <div className="crypto-cards">
        {cryptos.map((crypto, idx) => (
          <div key={idx} className="crypto-card">
            <div className="card-header">
              <div className="crypto-info">
                <span className="crypto-icon">{crypto.icon}</span>
                <div>
                  <h4>{crypto.name}</h4>
                  <p>{crypto.symbol}</p>
                </div>
              </div>
              <span className="tag">24h</span>
            </div>

            <div className="price-info">
              <h2>{crypto.price}</h2>
              <span
                className={`change ${
                  crypto.changeType === "up" ? "positive" : "negative"
                }`}
              >
                {crypto.change}
              </span>
            </div>

            <div className="sparkline">
              <svg width="100%" height="60">
                <polyline
                  points={crypto.polyline}
                  fill="none"
                  stroke="#007bff"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>

      <div className="more-assets-btn">
        <button>Discover more assets</button>
      </div>
    </div>
  );
};

export default CryptoWatchlist;
