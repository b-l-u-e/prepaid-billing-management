import React from 'react'

const styles = {
    card: {
        backgroundColor: 'white',
        padding: '1rem',
        borderRadius: '5px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        margin: '1rem',
        width: 'calc(100% - 40px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },

    cardTitle: {
        color: '#2c3e50',
        fontSize: '1.5rem',
        margin: '0',
        padding: '1rem',
        textAlign: 'center'
    },

    cardValue: {
        color: '#2c3e50',
        fontSize: '2rem',
        margin: '0',
        // padding: '0'
    }

    
}

const SummaryCard = ({title, value}) => {
  return (
    <div style={styles.card}>
        <h3 style={styles.cardTitle}>{title}</h3>
        <p style={styles.cardValue}>{value}</p>

    </div>
  )
}

export default SummaryCard