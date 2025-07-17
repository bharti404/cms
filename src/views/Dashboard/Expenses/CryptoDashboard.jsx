// CryptoDashboard.jsx
import React from "react";
import "./CryptoDashboard.css";
import CryptoBalance from "./CryptoBalance";
import CryptoChart from "./CryptoChart";
import CryptoList from "./CryptoList";
import FinancialStatus from "./FinancialStatus";
import WeeklySalesTable from "./WeeklySalesTable";
import TransactionOrders from "./TransactionOrders";
import RecentActivity from "./RecentActivity";
import MetricsSummary from "./MetricsSummary";
import CryptoWatchlist from "./CryptoWatchlist";

const CryptoDashboard = () => {
  return (
    <div className="dashboard">
      {/* Header */}
      <div className="dashboard-header">
        <div className="dashboard-header-icon">💰</div>
        <div className="dashboard-header-text">
          <h2 className="dashboard-title">Expenses</h2>
          <p className="dashboard-subtitle">Track and analyze your expenses</p>
        </div>
        <button className="export-btn">
          <span className="export-icon">⬇</span> Export
        </button>
      </div>

      {/* Account Balance + Pie Chart */}
      <div className="dashboard-body">
        <div className="dashboard-content">
          <CryptoBalance />
          <CryptoChart />
        </div>
        <CryptoList />
      </div>

      {/* Income/Expense Graph */}
      <div className="dashboard-financial">
        <FinancialStatus />
      </div>

      {/* Weekly Sales Table */}
      <div className="dashboard-sales">
        <WeeklySalesTable />
      </div>

      {/* Transaction Orders + Recent Activity */}
      <div className="dashboard-transactions">
        <TransactionOrders />
        <RecentActivity />
      </div>
      <div>
        <MetricsSummary />
      </div>
      <div>
        <CryptoWatchlist />
      </div>
    </div>

  );
};

export default CryptoDashboard;
