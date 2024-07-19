// PaymentsPage.js
import React, { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import PaymentForm from "../components/PaymentTracking/PaymentForm";
import PaymentHistory from "../components/PaymentTracking/PaymentHistory";

const styles = {
  container: {
    display: 'flex',
    height: '100vh',
    overflow: 'hidden',
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    padding: '2rem',
    overflowY: 'auto',
    backgroundColor: '#f9f9f9',
  },
  content: {
    width: '100%',
    maxWidth: '1200px',
    margin: '1rem auto',
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  header: {
    fontSize: '2rem',
    marginBottom: '2rem',
    color: '#2c3e50',
  },
  section: {
    marginBottom: '2rem',
  },
};

const PaymentsPage = () => {
  const [payments, setPayments] = useState([]);

  const addPayment = (payment) => {
    setPayments([...payments, payment]);
  };

  return (
    <div style={styles.container}>
      <Sidebar />
      <div style={styles.main}>
        <Navbar />
        <div style={styles.content}>
          <h1 style={styles.header}>Payments Management</h1>
          <div style={styles.section}>
            <PaymentForm onAddPayment={addPayment} />
          </div>
          <div style={styles.section}>
            <PaymentHistory payments={payments} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentsPage;