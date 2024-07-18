import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const styles = {
  graphContainer: {
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

const UsageTrendsGraph = () => {
  // Sample data for the graph
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Water Usage (in cubic meters)',
        data: [10, 20, 15, 30, 25, 35, 40], // Replace with your actual data
        borderColor: '#3498db',
        backgroundColor: 'rgba(52, 152, 219, 0.2)',
        fill: true,
      },
    ],
  };

  // Options for the graph
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Water Usage Trends',
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
          text: 'Usage (cubic meters)',
        },
      },
    },
  };

  return (
    <div style={styles.graphContainer}>
      <h2 style={styles.title}>Usage Trends</h2>
      <div style={{ height: '300px', position: 'relative' }}>
        <Line data={data} options={options} />
      </div>
    </div>
  );
}

export default UsageTrendsGraph;
