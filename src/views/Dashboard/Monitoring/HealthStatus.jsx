import React from 'react';
import './HealthStatus.css';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import AutorenewIcon from '@mui/icons-material/Autorenew';

const HealthStatus = () => {
  const score = 82;
  const radius = 60;
  const stroke = 8;
  const normalizedRadius = radius - stroke * 0.5;
  const circumference = 2 * Math.PI * normalizedRadius;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  return (
    <div className="health-status-container">
      <div className="health-header">
        <h4>Health Status</h4>
        <button className="historical-btn">View historical data</button>
      </div>

      <div className="health-body">
        {/* SVG Circle Progress */}
        <div className="progress-circle">
          <svg height={radius * 2} width={radius * 2}>
            <circle
              stroke="#e6e6e6"
              fill="transparent"
              strokeWidth={stroke}
              r={normalizedRadius}
              cx={radius}
              cy={radius}
            />
            <circle
              stroke="#4CAF50"
              fill="transparent"
              strokeWidth={stroke}
              strokeLinecap="round"
              strokeDasharray={`${circumference} ${circumference}`}
              style={{ strokeDashoffset }}
              r={normalizedRadius}
              cx={radius}
              cy={radius}
            />
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="20"
              fill="#333"
              fontWeight="bold"
            >
              {score}
            </text>
          </svg>
        </div>

        {/* Score and Test Results */}
        <div className="score-text">
          <h2>{score} <span className="out-of">/100</span></h2>
          <div className="test-list">
            <div className="test-row">
              High accuracy test run <span className="ok">Ok <CheckCircleIcon /></span>
            </div>
            <div className="test-row">
              Storage capacity <span className="ok">Ok <CheckCircleIcon /></span>
            </div>
            <div className="test-row">
              Performance test <span className="fail">Failed <CancelIcon /></span>
            </div>
          </div>
        </div>
      </div>

      <div className="health-footer">
        <button className="check-again">
          <AutorenewIcon /> Check again
        </button>
      </div>
    </div>
  );
};

export default HealthStatus;
