import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import MeterPage from "./pages/MeterPage";
import CustomersPage from "./pages/CustomersPage";
import PaymentsPage from "./pages/PaymentsPage";
import MeterReadingsPage from "./pages/ReadingsPage";

function App() {
  const [user, setUser] = useState(null);
  const handleLogin = (username) => {
    setUser({ username });
  };

  return (
    <Router>
      <div>
        {user ? (
          <Routes>
            <Route path="/dashboard" element={<Dashboard user={user} />} />
            <Route path="/meters" element={<MeterPage />} />
            <Route path="/readings" element={<MeterReadingsPage />} />
            {/* <Route path="/balances" element={<BalancesPage />} /> */}
            <Route path="/customers" element={<CustomersPage />} />
            <Route path="/payments" element={<PaymentsPage />} />
            {/* <Route path="/settings" element={<SettingsPage />} /> */}
            <Route path="/" element={<Dashboard user={user} />} />
          </Routes>
        ) : (
          <Login onLogin={handleLogin} />
        )}
      </div>
    </Router>
  );
}

export default App;
