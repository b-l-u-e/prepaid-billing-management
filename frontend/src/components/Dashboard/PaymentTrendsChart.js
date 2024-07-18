import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const styles = {
  barContainer: {
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

const PaymentTrendsChart = () => {
  // Example static data
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Total Payments',
        data: [12000, 19000, 17000, 22000, 15000, 25000],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Payment Trends',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Month',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Payments (USD)',
        },
      },
    },
  };

  return (
    <div style={styles.barContainer}>
      <h2 style={styles.title}>Payment Trends</h2>
      <div style={{ height: '300px', position: 'relative' }}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}

export default PaymentTrendsChart;
