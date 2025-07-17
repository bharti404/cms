import React from 'react';
import './cardgrid.css';
import StatCard from './StatCard';

const CardGrid = () => {
  return (
    <div className="card-grid">
      <StatCard title="Project management" subtitle="+5.46%" color="green" />
      <StatCard title="Analytics statistics" subtitle="487 new users" color="orange" />
      <StatCard title="Tasks overview" subtitle="5 tasks due" color="blue" />
    </div>
  );
};

export default CardGrid;
