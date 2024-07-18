import React from "react";

const styles = {
  lowBalanceNotification:  {
    backgroundColor: "ffcccc",
    color: "#cc0000",
    padding: "1rem",
    borderRadius: "5px",
    margin: "10px 0",
  },
};

const LowBalanceNotification = () => {
  const balance = 8.75;
  const lowBalanceThreshold = 10;
  return (
    <div style={styles.lowBalanceNotification}>
      <p>
        Warning: Your balance is less than ${lowBalanceThreshold}. Your current balance is ${balance}.
      </p>
    </div>
  );
};

export default LowBalanceNotification;
