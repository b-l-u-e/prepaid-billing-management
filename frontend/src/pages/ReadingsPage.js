import React from "react";
import MeterReadings from "../components/MeterReadingManagement/MeterReadings";
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";

const styles = {
  container: {
    display: "flex",
    flexDirection: "row", // Adjusted to row to place sidebar and main content side by side
    height: "100vh",
    overflow: "hidden",
  },
  main: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    padding: "2rem",
    overflowY: "auto",
    backgroundColor: "#f9f9f9",
  },
  content: {
    width: "100%",
    maxWidth: "1200px",
    margin: "1rem auto",
    backgroundColor: "#fff",
    padding: "2rem",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  header: {
    fontSize: "2rem",
    marginBottom: "2rem",
    color: "#2c3e50",
  },
};

const MeterReadingsPage = () => {
  return (
    <div style={styles.container}>
      <Sidebar />
      <div style={styles.main}>
        <Navbar />
        <div style={styles.content}>
          <h1 style={styles.header}>Meter Readings Management</h1>
          <MeterReadings />
        </div>
      </div>
    </div>
  );
};

export default MeterReadingsPage;