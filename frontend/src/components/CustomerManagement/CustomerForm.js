// CustomerForm.js
import React, { useState, useEffect } from "react";

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    marginBottom: '2rem',
    padding: '1rem',
    border: '1px solid #ddd',
    borderRadius: '8px',
  },
  input: {
    padding: '0.5rem',
    borderRadius: '4px',
    border: '1px solid #ddd',
    width: '100%',
  },
  button: {
    padding: '0.5rem 1rem',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    backgroundColor: '#2c3e50',
    color: '#fff',
  },
};

const CustomerForm = ({ onSubmit, initialData }) => {
  const [name, setName] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [address, setAddress] = useState("");
  const [linkedMeters, setLinkedMeters] = useState("");
  const [accountStatus, setAccountStatus] = useState("active");

  useEffect(() => {
    if (initialData) {
      setName(initialData.name);
      setContactInfo(initialData.contactInfo);
      setAddress(initialData.address);
      setLinkedMeters(initialData.linkedMeters.join(", "));
      setAccountStatus(initialData.accountStatus);
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      name,
      contactInfo,
      address,
      linkedMeters: linkedMeters.split(",").map((meter) => meter.trim()),
      accountStatus,
    });
  };

  return (
    <form style={styles.form} onSubmit={handleSubmit}>
      <input
        style={styles.input}
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        style={styles.input}
        type="text"
        placeholder="Contact Info"
        value={contactInfo}
        onChange={(e) => setContactInfo(e.target.value)}
        required
      />
      <input
        style={styles.input}
        type="text"
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        required
      />
      <input
        style={styles.input}
        type="text"
        placeholder="Linked Meters (comma separated)"
        value={linkedMeters}
        onChange={(e) => setLinkedMeters(e.target.value)}
        required
      />
      <select
        style={styles.input}
        value={accountStatus}
        onChange={(e) => setAccountStatus(e.target.value)}
        required
      >
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>
      <button style={styles.button} type="submit">
        {initialData ? "Update Customer" : "Add Customer"}
      </button>
    </form>
  );
};

export default CustomerForm;
