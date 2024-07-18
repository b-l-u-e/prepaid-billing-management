import React from 'react'

const styles = {
    navbar: {
        display: 'grid',
        gridTemplateColumns: '1fr 2fr 0.5fr',
        alignItems: 'center',
        padding: '1rem',
        backgroundColor: '#2c3e50',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        width: '100%',
        fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif', // Font family
    },
    navbarBrand: {
        display: 'flex',
        alignItems: 'center',
        marginRight: '2rem',
    },
    navbarBrandName: {
       color: '#f5f5f5',
       fontSize: '1.5rem',
       fontWeight: 'bold',
    },
    navbarSearch: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1,
        margin: '0 1rem',
        maxWidth: '500px',
    },
    searchInput: {
        padding: '0.5rem',
        width: '100%',
        borderRadius: '5px',
        border: 'none',
    },
    navbarLinks: {
        display: 'flex',
        marginLeft: 'auto',
        gap: '1rem',
        listStyle: 'none',
        padding: 0,
        margin: 0,
    },
    navItem: {
        color: '#f5f5f5',
        textDecoration: 'none',
        fontSize: '1rem',
        padding: '0.5rem 1rem',
        borderRadius: '5px',
        transition: 'background-color 0.3s ease',
    },
    navItemHover: {
        backgroundColor: '#34495e', // Slightly darker background on hover
    }
}

const Navbar = () => {
  return (
   <nav style={styles.navbar} >
    {/* left */}
        <div style={styles.navbarBrand}>
            <span style={styles.navbarBrandName}>AquaTrack</span>
        </div>

        {/* middle */}
        <div style={styles.navbarSearch}>
            <input type="text" placeholder="Search..." style={styles.searchInput}/>
            {/* search icon */}
        </div>

        {/* right */}
        <ul style={styles.navbarLinks}>
           <li><a href="/Notifications" style={styles.navItem}>Notifications</a></li> 
           <li><a href="/User" style={styles.navItem}>User</a></li> 
           <li><a href="/Logout" style={styles.navItem}>Logout</a></li> 
        </ul>
   </nav>
  )
}

export default Navbar
