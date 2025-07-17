import React from 'react';
import './ClusterCard.css';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LoopIcon from '@mui/icons-material/Loop';

const ClusterCard = ({ logo, title, subtitle, status, hosts, statusType }) => {
  return (
    <div className={`cluster-card ${statusType}`}>
      <div className="cluster-header">
        <img src={logo} alt="logo" className="cluster-logo" />
        <h3>{title}</h3>
        <p>{subtitle}</p>
        <button className="view-details-btn">View details</button>
      </div>

      <div className="cluster-footer">
        <span><strong>{hosts}</strong> hosts</span>
        <span className={`status ${statusType}`}>
          {statusType === 'available' ? <CheckCircleIcon /> : <LoopIcon />}
          {status}
        </span>
      </div>
    </div>
  );
};

export default ClusterCard;
