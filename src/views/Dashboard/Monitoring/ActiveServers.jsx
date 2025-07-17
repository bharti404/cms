import React from 'react';
import './ActiveServers.css';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const serverList = [
  { flag: '🇩🇪', city: 'Frankfurt', domain: 'mui.com', status: 'active', load: '36ms' },
  { flag: '🇺🇸', city: 'San Francisco', domain: 'google.com', status: 'provisioning', load: '255ms' },
  { flag: '🇪🇸', city: 'Barcelona', domain: 'example.xyz', status: 'high risk', load: '387ms' },
  { flag: '🇫🇷', city: 'Toulouse', domain: 'city.example', status: 'high risk', load: '456ms' },
];

const barData = [
  { name: 'JAN', Completed: 1000, Cancelled: 600 },
  { name: 'FEB', Completed: 1000, Cancelled: 650 },
  { name: 'MAR', Completed: 1000, Cancelled: 900 },
  { name: 'APR', Completed: 850, Cancelled: 700 },
  { name: 'MAY', Completed: 1000, Cancelled: 650 },
  { name: 'JUN', Completed: 1000, Cancelled: 900 },
  { name: 'JUL', Completed: 950, Cancelled: 850 },
];

const ActiveServers = () => {
  return (
    <div className="active-servers-container">
      <div className="server-list">
        <h4>Active Servers</h4>
        {serverList.map((server, index) => (
          <div key={index} className="server-item">
            <span className="flag">{server.flag}</span>
            <div className="info">
              <strong>{server.city}</strong>
              <p>{server.domain}</p>
            </div>
            <div className="status">
              <span className={`status-chip ${server.status.replace(' ', '-')}`}>{server.status}</span>
              <p>Page Load: <strong>{server.load}</strong></p>
            </div>
          </div>
        ))}
      </div>

      <div className="bar-chart-section">
        <div className="alert-box">
          ⚠️ Too many servers have problems starting!
        </div>

        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={barData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Completed" fill="#4CAF50" />
            <Bar dataKey="Cancelled" fill="#555" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ActiveServers;
