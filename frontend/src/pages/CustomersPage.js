// CustomerPage.js
import React, { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import CustomerForm from "../components/CustomerManagement/CustomerForm";
import CustomerList from "../components/CustomerManagement/CustomerList";


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
  formContainer: {
    marginBottom: '2rem',
  },
};

const dummyData = [
  {
    id: "1",
    name: "John Doe",
    contactInfo: "john.doe@example.com",
    address: "123 Main St",
    linkedMeters: ["001", "002"],
    accountStatus: "active",
  },
  {
    id: "2",
    name: "Jane Smith",
    contactInfo: "jane.smith@example.com",
    address: "456 Elm St",
    linkedMeters: ["003"],
    accountStatus: "inactive",
  },
];

const CustomerPage = () => {
  const [customers, setCustomers] = useState(dummyData);
  const [editingCustomer, setEditingCustomer] = useState(null);

  const handleAddOrUpdate = (customer) => {
    if (editingCustomer) {
      // Update existing customer
      setCustomers((prevCustomers) =>
        prevCustomers.map((c) => (c.id === editingCustomer.id ? customer : c))
      );
    } else {
      // Add new customer
      setCustomers((prevCustomers) => [
        ...prevCustomers,
        { ...customer, id: (prevCustomers.length + 1).toString() },
      ]);
    }
    setEditingCustomer(null);
  };

  const handleEdit = (customer) => {
    setEditingCustomer(customer);
  };

  const handleDelete = (customerId) => {
    setCustomers((prevCustomers) =>
      prevCustomers.filter((c) => c.id !== customerId)
    );
  };

  const handleViewHistory = (customerId) => {
    // Handle view history action
    alert(`Viewing history for customer ID: ${customerId}`);
  };

  return (
    <div style={styles.container}>
      <Sidebar />
      <div style={styles.main}>
        <Navbar />
        <div style={styles.content}>
          <h1 style={styles.header}>Customer Management</h1>
          <div style={styles.formContainer}>
            <CustomerForm
              onSubmit={handleAddOrUpdate}
              initialData={editingCustomer}
            />
          </div>
          <CustomerList
            customers={customers}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onViewHistory={handleViewHistory}
          />
        </div>
      </div>
    </div>
  );
};

export default CustomerPage;
