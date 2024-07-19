import React from "react";

const styles = {
  tableContainer: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginBottom: '2rem',
  },
  th: {
    borderBottom: '2px solid #ddd',
    padding: '1rem',
    textAlign: 'left',
    backgroundColor: '#f4f4f4',
  },
  td: {
    borderBottom: '1px solid #ddd',
    padding: '1rem',
  },
  actions: {
    display: 'flex',
    gap: '0.5rem',
  },
  button: {
    padding: '0.5rem 1rem',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  editButton: {
    backgroundColor: '#2c3e50',
    color: '#fff',
  },
  deleteButton: {
    backgroundColor: '#e74c3c',
    color: '#fff',
  },
  viewButton: {
    backgroundColor: '#2ecc71',
    color: '#fff',
  },
};

const CustomerList = ({ customers, onEdit, onDelete, onViewHistory }) => {
  return (
    <div style={styles.tableContainer}>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Customer Name</th>
            <th style={styles.th}>Contact Info</th>
            <th style={styles.th}>Linked Meters</th>
            <th style={styles.th}>Account Status</th>
            <th style={styles.th}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td style={styles.td}>{customer.name}</td>
              <td style={styles.td}>{customer.contactInfo}</td>
              <td style={styles.td}>{customer.linkedMeters.join(", ")}</td>
              <td style={styles.td}>{customer.accountStatus}</td>
              <td style={styles.td}>
                <div style={styles.actions}>
                  <button
                    style={{ ...styles.button, ...styles.editButton }}
                    onClick={() => onEdit(customer)}
                  >
                    Edit
                  </button>
                  <button
                    style={{ ...styles.button, ...styles.deleteButton }}
                    onClick={() => onDelete(customer.id)}
                  >
                    Delete
                  </button>
                  <button
                    style={{ ...styles.button, ...styles.viewButton }}
                    onClick={() => onViewHistory(customer.id)}
                  >
                    View History
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerList;
