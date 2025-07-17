// src/pages/Dashboard/Monitoring/MonitoringStatsCard.jsx

import React from 'react';
import PropTypes from 'prop-types';
import GaugeComponent from 'react-gauge-component';
import './MonitoringCard.css';

const MonitoringStatsCard = ({ title, description, value, change, color, gaugeColor, icon  , bg,textColor}) => {
  return (
    <div className="monitoring-stats-card" style={{backgroundColor : bg}}>
      <div className="monitoring-stats-header">
        <div className="monitoring-stats-icon" style={{ backgroundColor: color }}>
          {icon}
        </div>
        <span className="monitoring-stats-change">{change}</span>
      </div>

      <h3 className="monitoring-stats-title" style={{color: textColor}}>{title}</h3>
      <p
        className="monitoring-stats-desc"  style={{color: textColor}}
        dangerouslySetInnerHTML={{ __html: description }}
      />

      <GaugeComponent
        value={value}
        type="radial"
        labels={{
          tickLabels: {
            type: "inner",
            ticks: [
              { value: 20 },
              { value: 40 },
              { value: 60 },
              { value: 80 },
              { value: 100 }
            ]
          }
        }}
        arc={{
          colorArray: gaugeColor,
          subArcs: [{ limit: 20 }, { limit: 40 }, { limit: 60 }, { limit: 80 }, { limit: 100 }],
          padding: 0.02,
          width: 0.3
        }}
        pointer={{
          elastic: true,
          animationDelay: 0
        }}
      />

      <button className="monitoring-stats-button">View dashboard</button>
    </div>
  );
};

MonitoringStatsCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  change: PropTypes.string,
  color: PropTypes.string,
  gaugeColor: PropTypes.array,
  icon: PropTypes.element
};

export default MonitoringStatsCard;
