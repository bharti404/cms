import React from 'react';
import './activesubscriptions.css';
import SubscriptionCard from './SubscriptionCard';

const subscriptions = [
  { name: 'Spotify', price: '$32.00', status: 'due in 17 days', statusType: 'warning', button: 'Pay', logo: 'spotify.png' },
  { name: 'Slack', price: '$9.99', status: 'just paid', statusType: 'success', button: 'View', logo: 'slack.png' },
  { name: 'Google', price: '$8,695.00', status: 'due in 3 days', statusType: 'danger', button: 'Pay', logo: 'google.png' },
  { name: 'Airbnb', price: '$499.00', status: 'due in 8 months', statusType: 'success', button: 'View', logo: 'airbnb.png' }
];

const ActiveSubscriptions = () => (
  <div className="active-subscriptions">
    <div className="sub-header">
      <h2>Active Subscriptions</h2>
      <button className="view-all">View all</button>
    </div>
    <div className="subscription-grid">
      {subscriptions.map((item, index) => (
        <SubscriptionCard key={index} {...item} />
      ))}
    </div>
  </div>
);

export default ActiveSubscriptions;
