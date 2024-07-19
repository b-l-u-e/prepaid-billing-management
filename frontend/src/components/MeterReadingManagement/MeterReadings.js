// MeterReadings.js
import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const styles = {
  container: {
    display: 'flex',
    // flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
    gap: '1rem',
    margin: '0 1rem',
  },

  form: {
    marginBottom: '2rem',
    padding: '1rem',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '70%',
    // maxHeight: '100vh',
  },
  list: {
    padding: '1rem',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '100%',
    // maxHeight: '100vh',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '1rem',
  },
  th: {
    borderBottom: '1px solid #ddd',
    padding: '0.5rem',
    textAlign: 'left',
  },
  td: {
    borderBottom: '1px solid #ddd',
    padding: '1rem',
  },
  button: {
    margin: '0.2rem 0.5rem',
    padding: '0.5rem 1rem',
    backgroundColor: '#2c3e50',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  inputCalenderAndButton: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',

  },
  formGroup: {
    marginBottom: '1rem',
  },
  label: {
    display: 'block',
    marginBottom: '0.5rem',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '0.5rem',
    borderRadius: '5px',
    border: '1px solid #ccc',
    margin: '1rem 0',
    gap: '1rem'
  },
};

const dummyReadings = [
  { id: uuidv4(), meterID: "001", customer: "John Doe", lastReading: 120, date: "2024-07-15" },
  { id: uuidv4(), meterID: "002", customer: "Jane Smith", lastReading: 150, date: "2024-07-16" },
];

const MeterReadings = () => {
  const [readings, setReadings] = useState(dummyReadings);
  const [editingReading, setEditingReading] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleAddOrUpdate = (reading) => {
    if (editingReading) {
      setReadings((prevReadings) =>
        prevReadings.map((r) => (r.id === editingReading.id ? { ...reading, id: editingReading.id } : r))
      );
    } else {
      setReadings((prevReadings) => [...prevReadings, { ...reading, id: uuidv4() }]);
    }
    setEditingReading(null);
  };

  const handleEdit = (reading) => {
    setEditingReading(reading);
  };

  const handleDelete = (readingID) => {
    setReadings((prevReadings) => prevReadings.filter((r) => r.id !== readingID));
  };

  const handleSearch = () => {
    if (!searchTerm && !startDate && !endDate) {
      setReadings(dummyReadings);
    } else {
      setReadings(
        dummyReadings.filter(
          (r) =>
            (searchTerm
              ? r.meterID.includes(searchTerm) || r.customer.toLowerCase().includes(searchTerm.toLowerCase())
              : true) &&
            (startDate ? new Date(r.date) >= new Date(startDate) : true) &&
            (endDate ? new Date(r.date) <= new Date(endDate) : true)
        )
      );
    }
  };

  useEffect(() => {
    handleSearch();
  }, [searchTerm, startDate, endDate]);

  return (
    <div style={styles.container}>
      <div style={styles.form}>
        <h2>Manual Entry</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleAddOrUpdate({ meterID: e.target.meterID.value, customer: e.target.customer.value, lastReading: e.target.reading.value, date: e.target.date.value });
            e.target.reset();
          }}
        >
          <div style={styles.formGroup}>
            <label style={styles.label}>Meter ID:</label>
            <input type="text" name="meterID" defaultValue={editingReading ? editingReading.meterID : ''} style={styles.input} required />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Customer Name:</label>
            <input type="text" name="customer" defaultValue={editingReading ? editingReading.customer : ''} style={styles.input} required />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Reading:</label>
            <input type="number" name="reading" defaultValue={editingReading ? editingReading.lastReading : ''} style={styles.input} required />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Date:</label>
            <input type="date" name="date" defaultValue={editingReading ? editingReading.date : ''} style={styles.input} required />
          </div>
          <button type="submit" style={styles.button}>{editingReading ? 'Update Reading' : 'Add Reading'}</button>
        </form>
      </div>

      <div style={styles.list}>
        <h2>Reading List</h2>
        <div style={styles.inputCalenderAndButton}>
          <input
            type="text"
            placeholder="Search by Meter ID or Customer Name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={styles.input}
          />
          <div>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              style={styles.input}
            />
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              style={styles.input}
            />
          <button onClick={handleSearch} style={styles.button}>Filter</button>
          </div>
        </div>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Meter ID</th>
              <th style={styles.th}>Customer Name</th>
              <th style={styles.th}>Last Reading</th>
              <th style={styles.th}>Date</th>
              <th style={styles.th}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {readings.map((reading) => (
              <tr key={reading.id}>
                <td style={styles.td}>{reading.meterID}</td>
                <td style={styles.td}>{reading.customer}</td>
                <td style={styles.td}>{reading.lastReading}</td>
                <td style={styles.td}>{reading.date}</td>
                <td style={styles.td}>
                  <button onClick={() => handleEdit(reading)} style={styles.button}>Edit</button>
                  <button onClick={() => handleDelete(reading.id)} style={styles.button}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MeterReadings;
