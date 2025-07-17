import React from 'react';
import './cryptocard.css';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';

const sampleData = [
  { value: 40 },
  { value: 50 },
  { value: 45 },
  { value: 60 },
  { value: 30 },
  { value: 50 },
  { value: 40 }
];

const CryptoCard = ({ name, short, price, change, percent, up }) => {
  return (
    <div className="crypto-card">
      <div className="crypto-header">
        <div className="crypto-icon">{name.charAt(0)}</div>
        <div className="crypto-info">
          <h3>{name}</h3>
          <p>{short}</p>
        </div>
      </div>
      <div className="crypto-price">{price}</div>
      <div className={`crypto-percent ${up ? 'up' : 'down'}`}>{percent}</div>
      <div className={`crypto-change ${up ? 'up' : 'down'}`}>{change} last 24h</div>

      <div className="chart-container">
        <ResponsiveContainer width="100%" height={50}>
          <AreaChart data={sampleData}>
            <Area
              type="monotone"
              dataKey="value"
              stroke="#3b82f6"
              fill="url(#colorBlue)"
              strokeWidth={2}
            />
            <defs>
              <linearGradient id="colorBlue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
              </linearGradient>
            </defs>
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CryptoCard;
 