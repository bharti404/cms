import React from 'react';
import './UserAnalytics.css';

const users = [
  { name: 'Munroe Dacks', role: 'Senior Cost Accountant at', company: 'Trudoo', percentage: 65, image: 'https://i.pravatar.cc/150?img=1' },
  { name: 'Gunilla Canario', role: 'Associate Professor at', company: 'Buzzdog', percentage: 76, image: 'https://i.pravatar.cc/150?img=2' },
  { name: 'Rowena Geistmann', role: 'Pharmacist at', company: 'Yozio', percentage: 54, image: 'https://i.pravatar.cc/150?img=3' },
  { name: 'Ede Stoving', role: 'VP Product Management at', company: 'Cogibox', percentage: 23, image: 'https://i.pravatar.cc/150?img=4' },
  { name: 'Crissy Spere', role: 'Social Worker at', company: 'Babbleblab', percentage: 16, image: 'https://i.pravatar.cc/150?img=5' },
  { name: 'Dacks Rowena', role: 'Project Manager at', company: 'Buzzdog', percentage: 65, image: 'https://i.pravatar.cc/150?img=6' }
];

const UserAnalytics = () => {
  return (
    <div className="user-analytics">
      <div className="analytics-header">
        <div>
          <h4>PROGRESS</h4>
          <h2>Users Analytics</h2>
        </div>
        <button className="status-btn">Pending</button>
      </div>
      <div className="user-list">
        {users.map((user, i) => (
          <div className="user-row" key={i}>
            <img src={user.image} alt={user.name} className="user-img" />
            <div className="user-info">
              <h5>{user.name}</h5>
              <span>{user.role} <strong>{user.company}</strong></span>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${user.percentage}%` }}></div>
              </div>
            </div>
            <div className="progress-meta">
              <span>+{user.percentage}%</span>
              <button className="view-btn">View</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserAnalytics;
