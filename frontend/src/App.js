import React, { useState } from "react";
import "./App.css";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  const [user, setUser] = useState(null);
  const handleLogin = (username) => {
    setUser({ username });
  };
  return (
    <div>
      {user ? <Dashboard user={user} /> : <Login onLogin={handleLogin} />}
    </div>
  );
}

export default App;
