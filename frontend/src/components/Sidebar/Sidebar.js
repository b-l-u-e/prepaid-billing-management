import React from 'react'

const styles = {
    sidebar: {
        display: 'flex',
        flexDirection: 'column',
        // alignItems: 'space-around',
        // justifyContent: 'space-around',
        height: '100vh',
        width: '250px',
        backgroundColor: '#f0f0f0',
        padding: '20px',
    },

    sidebarNav: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        // justifyContent: 'center',
        // alignItems: 'center',
        
    },

   

    sidebarItem: {
        padding: '1rem',
        marginBottom: '1rem',
        backgroundColor: '#fff',
        borderRadius: '5px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        color: '#2c3e50',
        textDecoration: 'none',
        // width: '100%',
    },

    sidebarItemActive: {
        padding: '1rem',
        marginBottom: '1rem',
        backgroundColor: '#2c3e50',
        color: '#fff',
        borderRadius: '5px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        // width: '100%',
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
    
}

const Sidebar = () => {
  return (
    <aside style={styles.sidebar}>
        <nav style={styles.sidebarNav}>
            <a href="/dashboard" style={styles.sidebarItemActive}>Dashboard</a>
            <a href="/meters" style={styles.sidebarItem}>Meters</a>
            <a href="/readings" style={styles.sidebarItem}>Readings</a>
            <a href="/balances" style={styles.sidebarItem}>Balances</a>
            <a href="/customers" style={styles.sidebarItem}>Customers</a>
            <a href="/payments" style={styles.sidebarItem}>Payments</a>
            <a href="/settings" style={styles.sidebarItem}>Settings</a>
        </nav>

        <div style={styles.sidebarFooter}>
            <button style={styles.logoutBtn}>Logout</button>
        </div>
           

        

    </aside>
  )
}

export default Sidebar