import React from 'react'
import { Globe } from 'lucide-react'

function GlobalPage() {
  return (
    <div className="dashboard-container">
      <div className="main-content">
        <header className="header">
          <div className="welcome-section">
            <h1>Global</h1>
            <h2>Global Overview</h2>
          </div>
        </header>
        <div className="glass-card widget">
          <h3 className="widget-title" style={{ color: '#1f2937' }}>Global Page</h3>
          <p style={{ color: '#6b7280' }}>This is the global overview page.</p>
        </div>
      </div>
    </div>
  )
}

export default GlobalPage

