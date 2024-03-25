import React, { useState, useEffect } from "react";
import "./Dashboard.css";

const Dashboard = () => {
  const [columns, setColumns] = useState(3);

  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth < 1000) {
        setColumns(2);
      } else {
        setColumns(3);
      }
    };

    window.addEventListener("resize", updateColumns);
    updateColumns();

    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  const renderWidgets = () => {
    const widgets = [];

    for (let i = 0; i < 12; i++) {
      widgets.push(<div key={i} className="widget">Widget {i + 1}</div>);
    }

    return (
      <div className={`column-container ${columns === 2 ? "two-columns" : ""}`}>
        {widgets.map((widget, index) => (
          <div key={index} className="dashboard-column">
            {widget}
          </div>
        ))}
      </div>
    );
  };

  return <div className="dashboard">{renderWidgets()}</div>;
};

export default Dashboard;