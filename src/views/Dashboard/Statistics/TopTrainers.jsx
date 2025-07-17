import React from 'react';
import './toptrainers.css';
import TrainerCard from './TrainerCard';

const TopTrainers = () => (
  <div className="top-trainers">
    <h2>Top Trainers</h2>
    <TrainerCard
      img="https://randomuser.me/api/portraits/men/32.jpg"
      name="Allison Torff"
      title="React Front End Developer"
      rating="4.8"
      online
    />
    <TrainerCard
      img="https://randomuser.me/api/portraits/men/54.jpg"
      name="Brandon Jonas"
      title="Lead UX Designer"
      rating="4.5"
      online={false}
    />
    <button className="view-all-trainers">View all trainers</button>
  </div>
);

export default TopTrainers;
