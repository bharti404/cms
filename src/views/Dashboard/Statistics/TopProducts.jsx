import React from 'react';
import './topproducts.css';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';

const data = [
  { value: 8000 },
  { value: 8500 },
  { value: 8400 },
  { value: 8600 },
  { value: 8489 }
];

const sellers = [
  { name: 'Shanelle Wynn', role: 'UI Engineer, Apple Inc.', price: '$1,285', up: true },
  { name: 'Akeem Griffith', role: 'Manager, Google Inc.', price: '$2,685', up: false },
  { name: 'Abigayle Hicks', role: 'Project Manager, Spotify', price: '$1,865', up: true }
];

const TopProducts = () => {
  return (
    <div className="top-products">
      <div className="header">
        <h3>Top Grossing Products</h3>
        <button className="plus-btn">＋</button>
      </div>
      <div className="monthly-sales">
        <p>Monthly sales</p>
        <h2>$8,489 <span className="up">+54</span></h2>
      </div>
      <div className="chart-wrapper">
        <ResponsiveContainer width="100%" height={70}>
          <AreaChart data={data}>
            <defs>
              <linearGradient id="orangeGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#f97316" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#f97316" stopOpacity={0} />
              </linearGradient>
            </defs>
            <Area type="monotone" dataKey="value" stroke="#f97316" fill="url(#orangeGradient)" strokeWidth={2} />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="sellers">
        <p className="top-label">TOP SELLERS</p>
        {sellers.map((seller, index) => (
          <div className="seller-row" key={index}>
            <div className="progress-ring"></div>
            <div className="seller-info">
              <h4>{seller.name}</h4>
              <p>{seller.role}</p>
            </div>
            <div className="price">
              {seller.price}
              <span className={seller.up ? "arrow-up" : "arrow-down"}>
                {seller.up ? "↑" : "↓"}
              </span>
            </div>
          </div>
        ))}
        <button className="view-all-products">All products →</button>
      </div>
    </div>
  );
};

export default TopProducts;
