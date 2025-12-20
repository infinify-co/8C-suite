import React from 'react'
import { Users } from 'lucide-react'

function TeamPage() {
  return (
    <div className="dashboard-container">
      <div className="main-content">
        <header className="header">
          <div className="welcome-section">
            <h1>Team</h1>
            <h2>Team Management</h2>
          </div>
        </header>
        <div className="glass-card widget">
          <h3 className="widget-title" style={{ color: '#1f2937' }}>Team Page</h3>
          <p style={{ color: '#6b7280' }}>This is the team management page.</p>
        </div>
      </div>
    </div>
  )
}

export default TeamPage

