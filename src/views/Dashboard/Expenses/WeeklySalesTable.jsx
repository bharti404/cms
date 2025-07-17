import React from "react";
import "./WeeklySalesTable.css";

const salesData = [
  {
    name: "Inez Conley",
    role: "Project Manager",
    income: "$754",
    expenses: "-$2,584",
    status: "Overdue",
    trend: "📈",
    total: "$68,492",
    trendType: "up"
  },
  {
    name: "Isaiah Ruiz",
    role: "Senior Web Developer",
    income: "$654",
    expenses: "-$463",
    status: "Pending",
    trend: "📉",
    total: "$54,230",
    trendType: "up"
  },
  {
    name: "Beck Simpson",
    role: "Senior Consultant",
    income: "$5,468",
    expenses: "+$685",
    status: "Done",
    trend: "📉",
    total: "$23,654",
    trendType: "down"
  },
  {
    name: "Emily Johnson",
    role: "Frontend Developer",
    income: "$1,250",
    expenses: "+$780",
    status: "Done",
    trend: "📉",
    total: "$45,678",
    trendType: "up"
  },
  {
    name: "Michael Stevens",
    role: "Backend Developer",
    income: "$3,154",
    expenses: "-$210",
    status: "Pending",
    trend: "📈",
    total: "$30,154",
    trendType: "down"
  },
  {
    name: "Clara Oswald",
    role: "UI/UX Designer",
    income: "$2,854",
    expenses: "+$500",
    status: "Overdue",
    trend: "📈",
    total: "$38,985",
    trendType: "up"
  },
  {
    name: "Robert Smith",
    role: "QA Tester",
    income: "$1,450",
    expenses: "+$780",
    status: "Done",
    trend: "📉",
    total: "$27,985",
    trendType: "down"
  }
];

const WeeklySalesTable = () => {
  return (
    <div className="sales-table-wrapper">
      <h3>Weekly sales</h3>
      <p className="subtitle">Reports for what we sold this week</p>
      <table className="sales-table">
        <thead>
          <tr>
            <th>Employee</th>
            <th>Income</th>
            <th>Expenses</th>
            <th>Status</th>
            <th>Trends</th>
            <th>Totals</th>
          </tr>
        </thead>
        <tbody>
          {salesData.map((person, index) => (
            <tr key={index}>
              <td>
                <span className="name">{person.name}</span>
                <br />
                <span className="role">{person.role}</span>
              </td>
              <td>{person.income}</td>
              <td>{person.expenses}</td>
              <td>
                <span className={`status ${person.status.toLowerCase()}`}>
                  {person.status}
                </span>
              </td>
              <td className="trend-graph">📈📉📊</td>
              <td>
                <span
                  className={`total ${
                    person.trendType === "up" ? "up" : "down"
                  }`}
                >
                  {person.total}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WeeklySalesTable;
