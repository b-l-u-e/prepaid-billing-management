// ReadingList.js
import React from "react";

const ReadingList = ({ readings, onView, onEdit }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Meter ID</th>
          <th>Customer Name</th>
          <th>Last Reading</th>
          <th>Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {readings.map((reading) => (
          <tr key={reading.id}>
            <td>{reading.meterID}</td>
            <td>{reading.customer}</td>
            <td>{reading.lastReading}</td>
            <td>{reading.date}</td>
            <td>
              <button onClick={() => onView(reading)}>View</button>
              <button onClick={() => onEdit(reading)}>Edit</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ReadingList;
