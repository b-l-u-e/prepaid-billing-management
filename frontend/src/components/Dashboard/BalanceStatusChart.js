import React from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';

const styles = {
  pieContainer: {
    border: '1px solid black',
    padding: '1rem',
    maxWidth: '100%',
    maxHeight: '400px',
    overflow: 'hidden',
    position: 'relative',
  },
  title: {
    textAlign: 'center',
    marginBottom: '1rem',
    fontSize: '1.5rem',
    color: '#2c3e50',
  },
};

const data = {
  labels: ['Low Balance', 'Sufficient Balance', 'High Balance'],
  datasets: [
    {
      label: 'Customer Balance Status',
      data: [15, 50, 35], // Replace with your actual data
      backgroundColor: ['#e74c3c', '#f39c12', '#2ecc71'],
      borderColor: '#ffffff',
      borderWidth: 2,
    },
  ],
};

// Options for the pie chart
const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
    },
    tooltip: {
      callbacks: {
        label: (tooltipItem) => {
          const label = tooltipItem.label || '';
          const value = tooltipItem.raw || 0;
          return `${label}: ${value} (${((value / data.datasets[0].data.reduce((a, b) => a + b, 0)) * 100).toFixed(2)}%)`;
        },
      },
    },
  },
};

const BalanceStatusChart = () => {
  return (
    <div style={styles.pieContainer}>
      <h2 style={styles.title}>Balance Status</h2>
      <div style={{ height: '300px', position: 'relative' }}>
        <Pie data={data} options={options} />
      </div>
    </div>
  );
}

export default BalanceStatusChart;
