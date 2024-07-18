import React from 'react'

const styles = {
  balanceDisplay: {
   backgroundColor: "#f0f0f0",
   padding: '1rem',
   borderRadius: '5px',
   margin: '10px 0'
  }
}

const BalanceDisplay = () => {
    const balance = 120.50 //dummy balance
  return (
    <div style={styles.balanceDisplay}>
        <h2>Prepaid Balance</h2>
        <p>Balance: ${balance}</p>

    </div>
  )
}

export default BalanceDisplay