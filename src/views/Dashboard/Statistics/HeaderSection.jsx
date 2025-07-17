import React from 'react';
import './headersection.css';

const HeaderSection = () => (
  <div className="header-section">
    <div>
      <h1 className="header-title">Statistics</h1>
      <p className="header-subtitle">View statistics and data trends</p>
    </div>
    <button className="export-btn">Export</button>
  </div>
);

export default HeaderSection;
