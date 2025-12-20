import React, { useState } from 'react'
import { 
  BarChart3,
  LayoutDashboard,
  Library,
  Globe,
  CalendarDays,
  Wallet,
  Calendar
} from 'lucide-react'

function AnalyticsPage() {
  const [activeTimeFilter, setActiveTimeFilter] = useState('This month')

  return (
    <div className="dashboard-container">
      <div className="main-content">
        <header className="header">
          <div className="welcome-section">
            <h1>Analytics</h1>
            <h2>View Reports and Analytics</h2>
          </div>
          <div className="header-controls">
            <div className="time-filters">
              <button 
                className={`time-filter-btn ${activeTimeFilter === 'Today' ? 'active' : ''}`}
                onClick={() => setActiveTimeFilter('Today')}
              >
                Today
              </button>
              <button 
                className={`time-filter-btn ${activeTimeFilter === 'This month' ? 'active' : ''}`}
                onClick={() => setActiveTimeFilter('This month')}
              >
                This month
              </button>
              <button className="date-btn">
                <Calendar size={16} />
                Date
              </button>
            </div>
          </div>
        </header>
      </div>

      {/* Sidebar Navigation */}
      <nav className="sidebar">
        <a href="/home.html" className="sidebar-item" data-tooltip="Dashboard">
          <LayoutDashboard size={20} className="sidebar-icon" />
        </a>
        <a href="/global-search.html" className="sidebar-item" data-tooltip="Global">
          <Globe size={20} className="sidebar-icon" />
        </a>
        <a href="/analytics.html" className="sidebar-item active" data-tooltip="Analytics">
          <BarChart3 size={20} className="sidebar-icon" />
        </a>
        
        <div className="sidebar-divider"></div>
        
        <a href="/schedule.html" className="sidebar-item" data-tooltip="Schedule">
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

export default AnalyticsPage

