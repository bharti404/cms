import React from 'react';
import './MetricsSummary.css';
import GaugeChart from 'react-gauge-chart';

const metrics = [
  {
    title: 'Weekly Sales',
    value: '$43,346.45',
    percentage: 65.39,
    change: '+ 58.3%',
    description: 'You had a 58% increase in sales during the last 7 days. Keep up the good work!',
    color: '#28a745',
    icon: '✅'
  },
  {
    title: 'Returning Visitors',
    value: '21,585',
    percentage: 43.19,
    change: '+ 1.25%',
    description: 'You missed your target visitors numbers by 23.66%. Improve your ratings!',
    color: '#d58512',
    icon: '⚠️'
  },
  {
    title: 'Monthly Expenses',
    value: '$8,594',
    percentage: 36.59,
    change: '- 23.5%',
    description: 'Your expenses are bigger than income. You need to improve this metric soon!',
    color: '#dc3545',
    icon: '❌'
  }
];

const MetricsSummary = () => {
  return (
    <div className="metrics-container">
      {metrics.map((metric, index) => (
        <div className="metric-card" key={index}>
          <div className="metric-header">
            <h3>{metric.title}</h3>
            <span className="metric-value" style={{ color: metric.color }}>{metric.value}</span>
          </div>
          <GaugeChart
            id={`gauge-${index}`}
            nrOfLevels={30}
            percent={metric.percentage / 100}
            colors={["#e0e0e0", metric.color]}
            arcWidth={0.3}
            needleColor="#000"
            textColor="#333"
            hideText={false}
          />
          <div className="metric-change" style={{ color: metric.color }}>
            <span className="metric-icon">{metric.icon}</span>
            <strong>{metric.change}</strong>
          </div>
          <p className="metric-description">{metric.description}</p>
        </div>
      ))}
    </div>
  );
};

export default MetricsSummary;
