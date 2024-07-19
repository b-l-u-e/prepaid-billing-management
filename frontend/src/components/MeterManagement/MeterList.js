import React from 'react';
import PropTypes from 'prop-types';

const styles = {
    tableContainer: {
      margin: '1.2rem 0',
      padding: '1rem',
      border: '1px solid #ccc',
      borderRadius: '5px',
      maxWidth: '800px',
      backgroundColor: '#fff',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
    },
    tableHeader: {
      backgroundColor: '#2c3e50',
      color: '#fff',
    },
    tableRow: {
      borderBottom: '1px solid #ccc',
    },
    tableCell: {
      padding: '1rem',
      textAlign: 'left',
    },
    actionButton: {
      marginRight: '1rem',
      padding: '0.5rem 1rem',
      border: 'none',
      borderRadius: '5px',
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
  };

const MeterList = ({ meters = [], onEdit, onDelete }) => { // Default to empty array
  return (
    <div style={styles.tableContainer}>
      <table style={styles.table}>
        <thead style={styles.tableHeader}>
          <tr>
            <th style={styles.tableCell}>Meter ID</th>
            <th style={styles.tableCell}>Customer Name</th>
            <th style={styles.tableCell}>Status</th>
            <th style={styles.tableCell}>Last Reading</th>
            <th style={styles.tableCell}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {meters.map((meter) => (
            <tr key={meter.meterID} style={styles.tableRow}>
              <td style={styles.tableCell}>{meter.meterID}</td>
              <td style={styles.tableCell}>{meter.customer}</td>
              <td style={styles.tableCell}>{meter.status}</td>
              <td style={styles.tableCell}>{meter.lastReading}</td>
              <td style={styles.tableCell}>
                <button
                  style={{ ...styles.actionButton, ...styles.editButton }}
                  onClick={() => onEdit(meter)}
                >
                  Edit
                </button>
                <button
                  style={{ ...styles.actionButton, ...styles.deleteButton }}
                  onClick={() => onDelete(meter.meterID)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

MeterList.propTypes = {
  meters: PropTypes.array,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func
};

export default MeterList;
