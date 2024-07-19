import React, { useState, useEffect } from 'react';

const styles = {
  formContainer: {
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    maxWidth: '400px',
    marginBottom: '20px',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '8px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '10px 15px',
    backgroundColor: '#2c3e50',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
    marginBottom: '10px',
  },
};

const MeterForm = ({ onSubmit, initialData }) => {
  const [meterID, setMeterID] = useState('');
  const [customer, setCustomer] = useState('');
  const [initialReading, setInitialReading] = useState('');
  const [status, setStatus] = useState('on');
  const [error, setError] = useState('');

  useEffect(() => {
    if (initialData) {
      setMeterID(initialData.meterID);
      setCustomer(initialData.customer);
      setInitialReading(initialData.initialReading);
      setStatus(initialData.status);
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!meterID || !customer || !initialReading) {
      setError('All fields are required.');
      return;
    }

    setError('');
    onSubmit({ meterID, customer, initialReading, status });
    setMeterID('');
    setCustomer('');
    setInitialReading('');
    setStatus('on');
  };

  return (
    <div style={styles.formContainer}>
      <h2>{initialData ? 'Edit Meter' : 'Add Meter'}</h2>
      {error && <div style={styles.error}>{error}</div>}
      <form onSubmit={handleSubmit}>
        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="meterID">Meter ID</label>
          <input
            type="text"
            id="meterID"
            style={styles.input}
            value={meterID}
            onChange={(e) => setMeterID(e.target.value)}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="customer">Customer</label>
          <input
            type="text"
            id="customer"
            style={styles.input}
            value={customer}
            onChange={(e) => setCustomer(e.target.value)}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="initialReading">Initial Reading</label>
          <input
            type="number"
            id="initialReading"
            style={styles.input}
            value={initialReading}
            onChange={(e) => setInitialReading(e.target.value)}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="status">Status</label>
          <select
            id="status"
            style={styles.input}
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="on">On</option>
            <option value="off">Off</option>
          </select>
        </div>
        <button type="submit" style={styles.button}>
          {initialData ? 'Update Meter' : 'Add Meter'}
        </button>
      </form>
    </div>
  );
};

export default MeterForm;
