import React from "react";


const styles = {
  quickActions: {
    border: '1px solid #dfe4ea',
    padding: "1rem 2rem",
    margin: '2rem auto',
    borderRadius: "5px",
    backgroundColor: "#ffffff",
    maxWidth: "800px"
  },

  title: {
    textAlign: "center",
    marginBottom: "1rem",
    fontSize: "1.5rem",
    color: "#2c3e50",
  },

  listButtons: {
    display: "flex",
    justifyContent: "space-around",
    gap: "1rem",
    marginTop: "1rem",
  },

  button: {
    backgroundColor: '#2c3e50',
    color: '#ffffff',
    padding: '0.5rem 1rem',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    // fontSize: '1rem',
  },

  buttonHover: {
    backgroundColor: '#2c4f50',
  },
  
};


const QuickActions = () => {
  const handleMouseEnter = (e) => {
    e.target.style.backgroundColor = styles.buttonHover.backgroundColor;
  };

  const handleMouseLeave = (e) => {
    e.target.style.backgroundColor = styles.button.backgroundColor;
  };

  return (
    <div style={styles.quickActions}>
      <h2 style={styles.title}>Quick Actions</h2>
      <div style={styles.listButtons}>
        <button style={styles.button} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Add Meter</button>
        <button style={styles.button} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Add Customer</button>
        <button style={styles.button} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Add Reading</button>
        <button style={styles.button} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Add Payment</button>
      </div>
    </div>
  );
};

export default QuickActions;
