import React from 'react';
import './userprofile.css';

const UserProfile = () => {
  return (
    <div className="user-profile">
      <img className="avatar" src="https://randomuser.me/api/portraits/men/54.jpg" alt="Profile" />
      <h3>Shania O'Brien</h3>
      <span className="offline-tag">OFFLINE</span>
      <p className="description">
        The perfect tool to enhance productivity and decision-making in diverse business environments..
      </p>

      <div className="social-buttons">
        <button className="circle-btn">📘</button>
        <button className="circle-btn">🐦</button>
        <button className="circle-btn">📸</button>
      </div>

      <div className="action-grid">
        <div className="action-card orange">Projects</div>
        <div className="action-card green">Helpdesk</div>
        <div className="action-card blue">Dashboard</div>
        <div className="action-card red">Customers</div>
      </div>
    </div>
  );
};

export default UserProfile;
