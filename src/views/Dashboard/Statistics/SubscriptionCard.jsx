import React from 'react';
import './subscriptioncard.css';

const SubscriptionCard = ({ name, price, status, statusType, button }) => (
  <div className="subscription-card">
    <div className="subscription-header">
      <div className={`logo-circle ${name.toLowerCase()}`}></div>
      <span className={`status ${statusType}`}>{status}</span>
    </div>
    <div className="price-row">
      <h3>{price}</h3>
      <button>{button}</button>
    </div>
  </div>
);

export default SubscriptionCard;
