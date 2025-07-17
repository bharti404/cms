import React from 'react';
import './WeeklySalesChart.css';

const WeeklySalesChart = () => {
  return (
    <div className="weekly-sales">
      <h4>Weekly sales</h4>
      <p>Reports for what we sold this week</p>

      <h2>$487,385</h2>

      <div className="category-stats">
        <div>
          <span className="bar red" />
          <p>14% <br /><b>Cars</b></p>
        </div>
        <div>
          <span className="bar green" />
          <p>46% <br /><b>Outdoor</b></p>
        </div>
        <div>
          <span className="bar orange" />
          <p>40% <br /><b>Electronics</b></p>
        </div>
      </div>

      <div className="chart-placeholder" />

      <button className="report-btn">View complete report →</button>
    </div>
  );
};

export default WeeklySalesChart;
