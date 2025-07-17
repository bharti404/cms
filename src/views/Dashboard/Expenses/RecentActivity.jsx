// components/RecentActivity.jsx
import React from 'react';
import './RecentActivity.css';

const RecentActivity = () => {
  return (
    <div className="recent-activity">
      <div className="activity-header">
        <h3>Recent Activity</h3>
        <p>Your recent crypto activities</p>
        <div className="activity-tabs">
          <button className="tab active">Activity</button>
          <button className="tab">Trading</button>
        </div>
      </div>

      <div className="activity-timeline">
        <div className="activity-item">
          <span className="activity-date">12 Feb</span>
          <div className="activity-dot" />
          <div className="activity-content">
            <div className="activity-badge green">Sell / Market</div>
            <p>You sold <strong>10 ETH</strong> for <strong>48,500 USD</strong>.</p>
          </div>
        </div>
        <div className="activity-item">
          <span className="activity-date">11 Feb</span>
          <div className="activity-dot" />
          <div className="activity-content">
            <p><strong>Invite code sent</strong><br />Your friends joined the platform.</p>
            <p className="avatar-group">AvatarGroup</p>
          </div>
        </div>
        <div className="activity-item">
          <span className="activity-date">9 Feb</span>
          <div className="activity-dot" />
          <div className="activity-content">
            <p><strong>Uploaded documents</strong><br />You uploaded the following documents onto the crypto platform:</p>
            <div className="image-row">
              <img src="https://source.unsplash.com/50x50/?forest" alt="img1" />
              <img src="https://source.unsplash.com/50x50/?tech" alt="img2" />
            </div>
          </div>
        </div>
      </div>

      <button className="view-btn">View all activity →</button>
    </div>
  );
};

export default RecentActivity;
