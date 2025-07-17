import React from 'react';
import './Statistics.css';
import HeaderSection from './HeaderSection';
import CardGrid from './CardGrid';
import WatchList from './WatchList';
import ActiveSubscriptions from './ActiveSubscriptions';
import TopTrainers from './TopTrainers';
import UserProfile from './UserProfile';
import TopProducts from './TopProducts';

const Statistics = () => {
  return (
    
    <div className="statistics">
      <HeaderSection />
      <CardGrid />
      <WatchList />

      <div className="stats-grid">
        <ActiveSubscriptions />
        <TopTrainers />
      </div>

      <div className="profile-products-wrapper">
        <UserProfile />
        <TopProducts />
      </div>

    </div>
    
  );
};

export default Statistics;
