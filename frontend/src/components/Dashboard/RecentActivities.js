import React from 'react'

const styles = {
  recentActivities: {
    backgroundColor: '#ffffff',
    border: '1px solid #dfe4ea',
    borderRadius: '5px',
    padding: '1rem 2rem',
    margin: '0 auto',
    maxWidth: '800px',

  },
  title: {
    textAlign: 'center',
    color: '#2c3e50',
    fontSize: '1.5rem',
    marginBottom: '1rem',
    fontWeight: 'bold',
  },

  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },

  listItem: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0.5rem',
    borderBottom: '1px solid #dfe4ea',
  },
  
  description: {
    color: '#2c3e50',
  },
  
  time: {
    marginLeft: '1rem',
    color: '#7f8c8d',
  },
  
  
}


const RecentActivities = () => {
    // Sample activities data
    const activities = [
      { id: 1, description: 'New meter added: Meter #1234', time: '2024-07-18 10:30 AM' },
      { id: 2, description: 'Payment received: $200 from Customer #5678', time: '2024-07-17 04:15 PM' },
      { id: 3, description: 'Low balance alert for Meter #9876', time: '2024-07-16 09:00 AM' },
    ];


  return (
    <div style={styles.recentActivities}>
      <h2 style={styles.title}>Recent Activities</h2>
      <ul style={styles.list}>
        {activities.map((activity, id) => (
          <li key={activity.id} style={styles.listItem}>
            <span style={styles.description}>{activity.description}</span>
            <span style={styles.time}>{activity.time}</span>
          </li>

        ))}
      </ul>
    </div>
  )
}

export default RecentActivities