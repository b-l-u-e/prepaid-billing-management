import React, { useState } from "react";
import PropTypes from "prop-types";

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    width: "50%",
    margin: "0 auto",
  },
  input: {
    padding: "0.5rem",
  },
  button: {
    padding: "0.5rem",
    backgroundColor: "blue",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
};

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username);
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <label htmlFor="username">Username</label>
      <input
        style={styles.input}
        id="username"
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input style={styles.input} type="password" placeholder="Password" />
      <button style={styles.button} type="submit">Login</button>
    </form>
  );
};

LoginForm.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default LoginForm;
