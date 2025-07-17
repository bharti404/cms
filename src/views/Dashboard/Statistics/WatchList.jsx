import React from 'react';
import './watchlist.css';
import CryptoCard from './CryptoCard';

const WatchList = () => {
  return (
    <div className="watchlist">
      <h2>Watch List</h2>
      <div className="crypto-grid">
        <CryptoCard name="Bitcoin" short="BTC" price="$56,475.99" change="+$500" percent="+12.5%" up />
        <CryptoCard name="Ethereum" short="ETH" price="$1,968.00" change="-$90" percent="-3.24%" up={false} />
        <CryptoCard name="Cardano" short="ADA" price="$23.00" change="-$5" percent="-0.33%" up={false} />
      </div>
    </div>
  );
};

export default WatchList;
