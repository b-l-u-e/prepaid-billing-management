import React from 'react';
import { NavLink } from 'react-router-dom';

const styles = {
  sidebar: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    width: '250px',
    backgroundColor: '#f0f0f0',
    padding: '20px',
  },
  sidebarNav: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  sidebarItem: {
    padding: '1rem',
    marginBottom: '1rem',
    backgroundColor: '#fff',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    color: '#2c3e50',
    textDecoration: 'none',
  },
  sidebarItemActive: {
    padding: '1rem',
    marginBottom: '1rem',
    backgroundColor: '#2c3e50',
    color: '#fff',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  sidebarFooter: {
    display: 'flex',
    justifyContent: 'center',
    padding: '1rem',
    backgroundColor: '#fff',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  logoutBtn: {
    padding: '10px',
    backgroundColor: '#2c3e50',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '100%',
  },
};

const Sidebar = () => {
  return (
    <aside style={styles.sidebar}>
      <nav style={styles.sidebarNav}>
        <NavLink
          to="/dashboard"
          style={({ isActive }) =>
            isActive ? styles.sidebarItemActive : styles.sidebarItem
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/meters"
          style={({ isActive }) =>
            isActive ? styles.sidebarItemActive : styles.sidebarItem
          }
        >
          Meters
        </NavLink>
        <NavLink
          to="/readings"
          style={({ isActive }) =>
            isActive ? styles.sidebarItemActive : styles.sidebarItem
          }
        >
          Readings
        </NavLink>
        <NavLink
          to="/balances"
          style={({ isActive }) =>
            isActive ? styles.sidebarItemActive : styles.sidebarItem
          }
        >
          Balances
        </NavLink>
        <NavLink
          to="/customers"
          style={({ isActive }) =>
            isActive ? styles.sidebarItemActive : styles.sidebarItem
          }
        >
          Customers
        </NavLink>
        <NavLink
          to="/payments"
          style={({ isActive }) =>
            isActive ? styles.sidebarItemActive : styles.sidebarItem
          }
        >
          Payments
        </NavLink>
        <NavLink
          to="/settings"
          style={({ isActive }) =>
            isActive ? styles.sidebarItemActive : styles.sidebarItem
          }
        >
          Settings
        </NavLink>
      </nav>
      <div style={styles.sidebarFooter}>
        <button style={styles.logoutBtn}>Logout</button>
      </div>
    </aside>
  );
};

export default Sidebar;
