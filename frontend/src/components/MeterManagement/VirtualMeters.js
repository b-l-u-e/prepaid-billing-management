import React, { useState } from 'react';
import MeterForm from './MeterForm';
import MeterList from './MeterList';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    margin: '1rem'
  },

}

const dummyData = [
  { meterID: '001', customer: 'John Doe', status: 'on', initialReading: 100 },
  { meterID: '002', customer: 'Jane Smith', status: 'off', initialReading: 150 },
];

const VirtualMeters = () => {
  const [meters, setMeters] = useState(dummyData); // Ensure initial state is an array
  const [editingMeter, setEditingMeter] = useState(null);

  const handleAddOrUpdate = (meter) => {
    if (editingMeter) {
      // Update existing meter
      setMeters((prevMeters) =>
        prevMeters.map((m) =>
          m.meterID === editingMeter.meterID ? meter : m
        )
      );
    } else {
      // Add new meter
      setMeters((prevMeters) => [...prevMeters, meter]);
    }
    setEditingMeter(null);
  };

  const handleEdit = (meter) => {
    setEditingMeter(meter);
  };

  const handleDelete = (meterID) => {
    setMeters((prevMeters) => prevMeters.filter((m) => m.meterID !== meterID));
  };

  return (
    <div style = {styles.container}>
      <h2>Virtual Meters</h2>
      <MeterForm onSubmit={handleAddOrUpdate} initialData={editingMeter} />
      <MeterList meters={meters} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default VirtualMeters;
