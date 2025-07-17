import React from 'react';
import './statcard.css';

const StatCard = ({ title, subtitle, color }) => {
  return (
    <div className="stat-card">
      <div className={`icon-box ${color}`}>{title.charAt(0)}</div>
      <div className="stat-details">
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
      <span className="arrow">→</span>
    </div>
  );
};

export default StatCard;
