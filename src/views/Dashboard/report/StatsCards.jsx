import React from 'react';
import './StatsCards.css';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';

const cardData = [
  {
    title: 'Laptops sales',
    value: '86.453',
    icon: <NotificationsIcon />,
    change: '+145%',
    changeType: 'positive'
  },
  {
    title: 'Total sales',
    value: '285.483',
    icon: <MonetizationOnIcon />,
    change: '-23%',
    changeType: 'negative'
  },
  {
    title: 'New accounts',
    value: '5843',
    icon: <AssignmentIndIcon />,
    change: '+24%',
    changeType: 'positive'
  }
];

const StatsCards = () => {
  return (
    <div className="stats-cards">
      {cardData.map((card, index) => (
        <div className="card" key={index}>
          <div className={`wave-bg ${card.changeType}`}></div>
          <div className="card-content">
            <div className="card-icon">{card.icon}</div>
            <h2>{card.value}</h2>
            <p>{card.title}</p>
            <span className={`change-badge ${card.changeType}`}>
              {card.change}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
