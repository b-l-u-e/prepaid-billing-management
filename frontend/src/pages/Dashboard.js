import React from "react";
import PropTypes from "prop-types";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import UsageTrendsGraph from "../components/Dashboard/UsageTrendsGraph";
import PaymentTrendsChart from "../components/Dashboard/PaymentTrendsChart";

import RecentActivities from "../components/Dashboard/RecentActivities";
import QuickActions from "../components/Dashboard/QuickActions";
import SummaryCard from "../components/Dashboard/SummaryCard";

const styles = {
  dashboardContainer: {
    display: "flex",
    flexDirection: "column",
    maxHeight: "100vh",
    overflow: "hidden",
  },
  dashboardContent: {
    display: "flex",
    flexGrow: 1,
    overflowY: "auto",
  },
  dashboard: {
    flexGrow: 1,
    padding: "1rem",
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "1rem",
    height: "100%",
  },
  summaryCards: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "1rem",
    // marginBottom: "1rem",
  },
  graphCharts: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "1rem",
    // marginBottom: "1rem",
  },
 
};

const Dashboard = ({ user }) => {
  return (
    <div style={styles.dashboardContainer}>
      <Navbar />
      <div style={styles.dashboardContent}>
        <Sidebar />
        {/* dashboard content */}
        <div style={styles.dashboard}>
          {/* summary cards */}
          <div style={styles.summaryCards}>
            <SummaryCard title="Total Meters" value="100" />
            <SummaryCard title="Total Customers" value="50" />
            <SummaryCard title="Total Readings" value="1000" />
            <SummaryCard title="Total Payments" value="$5,000" />
            <SummaryCard title="Meters Off" value="10" />
          </div>

          {/* graphs-charts */}
          <div style={styles.graphCharts}>
            <UsageTrendsGraph />
            <PaymentTrendsChart />
          </div>

          <div>
            {/* recent activities */}
            <RecentActivities />

            {/* quick Actions */}
            <QuickActions />
          </div>
        </div>
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  user: PropTypes.object.isRequired,
};

export default Dashboard;
