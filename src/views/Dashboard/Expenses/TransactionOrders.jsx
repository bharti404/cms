// components/TransactionOrders.jsx
import React from 'react';
import './TransactionOrders.css';

const transactions = [
  {
    id: '39FJDSHE84H',
    name: 'Paypal Withdraw',
    date: 'July 13 2025',
    status: 'Deposit',
    statusColor: 'red',
    iconColor: 'pink',
  },
  {
    id: '76GHJD54HB',
    name: 'Incoming funds',
    date: 'July 12 2025',
    status: 'Processing',
    statusColor: 'blue',
    iconColor: 'lightblue',
  },
  {
    id: '54GDSA98HT',
    name: 'Held funds',
    date: 'July 11 2025',
    status: 'Pending',
    statusColor: 'brown',
    iconColor: 'burlywood',
  },
  {
    id: '54XHGSA34GJ',
    name: 'Fiat deposit',
    date: 'July 10 2025',
    status: 'Withdrawal',
    statusColor: 'green',
    iconColor: 'lightgreen',
  }
];

const TransactionOrders = () => {
  return (
    <div className="transaction-orders">
      <div className="orders-header">
        <img
          className="orders-banner"
          src="https://images.unsplash.com/photo-1534212995387-cb3dde804bc7"
          alt="Banner"
        />
        <button className="live-btn">LIVE TRANSACTIONS</button>
      </div>
      <div className="orders-table">
        <div className="orders-row orders-head">
          <div>Order</div>
          <div>Status</div>
          <div>Actions</div>
        </div>
        {transactions.map((t, idx) => (
          <div key={idx} className="orders-row">
            <div className="orders-name">
              <div className="icon-circle" style={{ backgroundColor: t.iconColor }}>📈</div>
              <div>
                <div className="orders-title">{t.name}</div>
                <div className="orders-date">{t.date}</div>
              </div>
            </div>
            <div>
              <div className="orders-id">{t.id}</div>
              <span className="orders-status" style={{ color: t.statusColor }}>{t.status}</span>
            </div>
            <div className="orders-action">❌</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionOrders;
