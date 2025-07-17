import React from 'react';
import './ResourcesAlarm.css';

const ResourcesAlarm = () => {
  return (
    <div className="resources-alarm">
      <div className="alarm-header">
        <div>
          <h4>Resources Alarm</h4>
          <p>Server load snapshot from 13 minutes ago</p>
        </div>
        <button className="diagnose-btn">Run diagnostics</button>
      </div>

      <div className="chart-area">
        <h5>Seoul snapshot</h5>
        <div className="bar-chart">
          {[60, 80, 100, 120, 160, 200, 300].map((val, i) => (
            <div className="bar" style={{ width: `${val}px` }} key={i}></div>
          ))}
        </div>
        <p className="alert-msg">🚨 Your server is overloaded, fix it as soon as possible!</p>
      </div>
    </div>
  );
};

export default ResourcesAlarm;
