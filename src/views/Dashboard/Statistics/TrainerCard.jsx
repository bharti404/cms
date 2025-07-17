import React from 'react';
import './trainercard.css';

const TrainerCard = ({ img, name, title, rating, online }) => (
  <div className="trainer-card">
    <img className="avatar" src={img} alt={name} />
    <div className="trainer-info">
      <h4>{name}</h4>
      <p>{title}</p>
    </div>
    <div className={`status-dot ${online ? 'online' : 'offline'}`}></div>
    <div className="trainer-rating">
      <span>★</span>
      <span>{rating}</span>
    </div>
    <button className="profile-btn">Profile</button>
  </div>
);

export default TrainerCard;
