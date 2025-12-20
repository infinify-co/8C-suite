import React from 'react'
import { 
  CalendarDays,
  LayoutDashboard,
  Library,
  Globe,
  BarChart3,
  Wallet
} from 'lucide-react'

function SchedulePage() {
  return (
    <div className="dashboard-container">
      <div className="main-content">
        <header className="header">
          <div className="welcome-section">
            <h1>Schedule</h1>
            <h2>View Your Schedule</h2>
          </div>
        </header>
        <div className="glass-card widget">
          <h3 className="widget-title" style={{ color: '#1f2937' }}>Schedule Page</h3>
          <p style={{ color: '#6b7280' }}>This is the schedule page.</p>
        </div>
      </div>

      {/* Sidebar Navigation */}
      <nav className="sidebar">
        <a href="/home.html" className="sidebar-item" data-tooltip="Dashboard">
          <LayoutDashboard size={20} className="sidebar-icon" />
        </a>
        <a href="/global-search.html" className="sidebar-item" data-tooltip="Global">
          <Globe size={20} className="sidebar-icon" />
        </a>
        <a href="/analytics.html" className="sidebar-item" data-tooltip="Analytics">
          <BarChart3 size={20} className="sidebar-icon" />
        </a>
        
        <div className="sidebar-divider"></div>
        
        <a href="/schedule.html" className="sidebar-item active" data-tooltip="Schedule">
          <CalendarDays size={20} className="sidebar-icon" />
        </a>
        <a href="/wallet.html" className="sidebar-item" data-tooltip="Wallet">
          <Wallet size={20} className="sidebar-icon" />
        </a>
        <a href="/campaigns.html" className="sidebar-item" data-tooltip="Campaigns">
          <Library size={20} className="sidebar-icon" />
        </a>
      </nav>
    </div>
  )
}

export default SchedulePage

