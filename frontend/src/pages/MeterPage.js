import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import VirtualMeters from "../components/MeterManagement/VirtualMeters";

const styles = {
  container: {
    display: "flex",
    height: "100vh",
    // overflow: "hidden",
    
  },
  main: {
    display: "flex",
    // flexDirection: 'column',
    // flexGrow: 1,
    padding: "2rem",
    overflowY: "auto",
    backgroundColor: "#f9f9f9",
    // gap: '1rem'
  },
  content: {
    width: "100%",
    // maxWidth: '1200px',
    margin: "0 auto",
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

const MeterPage = () => {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <Navbar />
        <div style={styles.main}>
          <Sidebar />
          <VirtualMeters />
        </div>
      </div>
    </div>
  );
};

export default MeterPage;
