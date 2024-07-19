// PaymentHistory.js
import React from 'react';

const tableStyles = {
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  th: {
    backgroundColor: '#2c3e50',
    color: 'white',
    padding: '10px',
    textAlign: 'left',
  },
  td: {
    padding: '8px',
    textAlign: 'left',
    borderBottom: '1px solid #ddd',
  },
};

const PaymentHistory = ({ payments }) => {
  return (
    <table style={tableStyles.table}>
      <thead>
        <tr>
          <th style={tableStyles.th}>Name</th>
          <th style={tableStyles.th}>Amount</th>
        </tr>
      </thead>
      <tbody>
        {payments.map((payment, index) => (
          <tr key={index}>
            <td style={tableStyles.td}>{payment.name}</td>
            <td style={tableStyles.td}>${payment.amount.toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PaymentHistory;