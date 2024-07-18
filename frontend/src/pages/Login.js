import React from "react";
import LoginForm from "../components/Security/LoginForm";

const styles = {
  loginContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "1rem",
    width: "80%",
    margin: "0 auto",
  },
};

const Login = ({onLogin}) => {
 
  return (
    <div style={styles.loginContainer}>
      <h2>Login</h2>
      <LoginForm onLogin = {onLogin}/>
    </div>
  );
};

export default Login;
