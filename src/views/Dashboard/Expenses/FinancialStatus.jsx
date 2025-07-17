import React from "react";
import "./FinancialStatus.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const data = [
  { name: "JAN", completed: 100, cancelled: 500 },
  { name: "FEB", completed: 120, cancelled: 300 },
  { name: "MAR", completed: 700, cancelled: 900 },
  { name: "APR", completed: 500, cancelled: 300 },
  { name: "MAY", completed: 800, cancelled: 200 },
  { name: "JUN", completed: 600, cancelled: 700 },
  { name: "JUL", completed: 1000, cancelled: 500 }
];

const FinancialStatus = () => {
  return (
    <div className="financial-status-container">
      <div className="financial-cards">
        <div className="income-card">
          <h3 className="income-amount">$32,865</h3>
          <p className="label">Income</p>
          <div className="income-graph"></div>
        </div>
        <div className="expense-card">
          <h3 className="expense-amount">$71,684</h3>
          <p className="label">Expenses</p>
          <div className="expense-graph"></div>
        </div>
      </div>

      <div className="financial-chart-section">
        <div className="chart-header">
          <h3>Monthly Financial Status</h3>
          <p>Check how you're doing financially for current month</p>
        </div>

        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="completed" stackId="a" fill="#4CAF50" />
            <Bar dataKey="cancelled" stackId="a" fill="#616161" />
          </BarChart>
        </ResponsiveContainer>

        <button className="download-btn">⬇ Download report</button>
      </div>
    </div>
  );
};

export default FinancialStatus;
