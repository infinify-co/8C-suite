import React, { useState, useEffect, useRef } from 'react'
import { 
  Calendar, 
  Clock, 
  MapPin, 
  TrendingUp, 
  TrendingDown, 
  MessageCircle, 
  Plus,
  Check,
  X,
  Library,
  Globe,
  LayoutDashboard,
  Users,
  Wallet,
  BarChart3,
  User,
  Settings,
  Bell,
  LogOut,
  CalendarDays
} from 'lucide-react'
import './index.css'

function App() {
  const [activeTimeFilter, setActiveTimeFilter] = useState('This month')
  const [workMode, setWorkMode] = useState('Office')
  const [showProfileMenu, setShowProfileMenu] = useState(false)
  const profileMenuRef = useRef(null)

  // Close profile menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (profileMenuRef.current && !profileMenuRef.current.contains(event.target)) {
        setShowProfileMenu(false)
      }
    }

    if (showProfileMenu) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [showProfileMenu])

  const leaveData = [
    { name: 'Annual Leave', used: 15, total: 15, progress: 100 },
    { name: 'Casual Leave', used: 12, total: 15, progress: 80 },
    { name: 'Sick Leave', used: 5, total: 8, progress: 62.5 },
    { name: 'Comp Off', used: 2, total: 5, progress: 40 },
    { name: 'Bereavement Leave', used: 1, total: 3, progress: 33.3 }
  ]

  const approvalData = [
    { name: 'Valeria Garza', type: 'Promotion', time: '24 min ago' },
    { name: 'John Smith', type: 'Leave Request', time: '1 hour ago' },
    { name: 'Sarah Johnson', type: 'Expense Claim', time: '2 hours ago' },
    { name: 'Mike Wilson', type: 'Overtime', time: '3 hours ago' }
  ]

  return (
    <div className="dashboard-container">
      <div className="main-content">
        {/* Header */}
        <header className="header">
          <div className="welcome-section">
            <h1>Welcome Back,</h1>
            <h2>Ibrahim Memon</h2>
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
            <div className="profile-pic" onClick={() => setShowProfileMenu(!showProfileMenu)}>
              <span className="profile-initial">I</span>
            </div>
            
            {showProfileMenu && (
              <div className="profile-menu" ref={profileMenuRef}>
                <div className="profile-menu-header">
                  <div className="profile-menu-avatar">
                    <span className="profile-initial">I</span>
                  </div>
                  <div className="profile-menu-info">
                    <h3>Ibrahim Memon</h3>
                    <p>Software Developer</p>
                    <p>ibrahim.memon@company.com</p>
                  </div>
                </div>
                <div className="profile-menu-actions">
                  <button className="profile-menu-btn">
                    <User size={16} />
                    Edit Profile
                  </button>
                  <button className="profile-menu-btn">
                    <Settings size={16} />
                    Account Settings
                  </button>
                  <button className="profile-menu-btn">
                    <Bell size={16} />
                    Notifications
                  </button>
                  <button className="profile-menu-btn logout">
                    <LogOut size={16} />
                    Sign Out
                  </button>
                </div>
              </div>
            )}
          </div>
        </header>

        {/* Dashboard Grid */}
        <div className="dashboard-grid">
          {/* Mark Attendance Widget */}
          <div className="glass-card widget">
            <h3 className="widget-title">Mark Attendance</h3>
            <div className="attendance-toggle">
              <button 
                className={`toggle-btn ${workMode === 'Work From Home' ? 'active' : ''}`}
                onClick={() => setWorkMode('Work From Home')}
              >
                Work From Home
              </button>
              <button 
                className={`toggle-btn ${workMode === 'Office' ? 'active' : ''}`}
                onClick={() => setWorkMode('Office')}
              >
                Office
              </button>
            </div>
            <div className="attendance-info">
              <div className="attendance-date">
                <Calendar size={16} />
                June, Thursday 17
              </div>
              <div className="attendance-location">Blue Cube Head Office</div>
              <div className="attendance-time">You Clocked in 12:40 AM</div>
            </div>
            <div className="work-hours">
              <div className="work-hours-value">00:52:03</div>
              <div className="work-hours-label">Work Hours</div>
            </div>
            <div className="attendance-actions">
              <div className="action-row">
                <button className="btn btn-primary">Out for Lunch</button>
                <button className="btn btn-secondary">Out for Break</button>
              </div>
              <button className="btn btn-danger">
                <Clock size={16} />
                Clock Out
              </button>
            </div>
          </div>

          {/* Income Widget */}
          <div className="glass-card widget">
            <h3 className="widget-title">Income</h3>
            <div className="stat-value">$12,800.00</div>
            <div className="stat-indicator positive">
              <TrendingUp size={12} />
              1.7% Higher
            </div>
          </div>

          {/* Messages Widget */}
          <div className="glass-card widget">
            <h3 className="widget-title">Messages</h3>
            <div className="stat-value">15</div>
            <div style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '12px' }}>
              +2 Unread Chat
            </div>
          </div>

          {/* Leaves Summary Widget */}
          <div className="glass-card widget">
            <h3 className="widget-title">Leaves Summary 2024</h3>
            <div className="widget-subtitle">This year</div>
            {leaveData.map((leave, index) => (
              <div key={index} className="leave-item">
                <div className="leave-info">
                  <div className="leave-icon">
                    <Calendar size={12} />
                  </div>
                  <div className="leave-details">
                    <div className="leave-name">{leave.name}</div>
                    <div className="leave-count">{leave.used}/{leave.total}</div>
                  </div>
                </div>
                <div className="leave-progress">
                  <div 
                    className="leave-progress-bar" 
                    style={{ width: `${leave.progress}%` }}
                  ></div>
                </div>
                {leave.name === 'Comp Off' && (
                  <Plus size={16} style={{ color: '#3b82f6', marginLeft: '8px' }} />
                )}
              </div>
            ))}
          </div>

          {/* Expenses Widget */}
          <div className="glass-card widget">
            <h3 className="widget-title">Expenses</h3>
            <div className="stat-value">$2,800.00</div>
            <div className="stat-indicator negative">
              <TrendingDown size={12} />
              1.2% Lower
            </div>
          </div>

          {/* Attendance Summary Widget */}
          <div className="glass-card widget">
            <h3 className="widget-title">Attendance Summary</h3>
            <div className="widget-subtitle">This Month</div>
            
            <div className="summary-item">
              <div className="summary-label">Avg Time Spent Hours</div>
              <div className="summary-value">6.75</div>
              <div className="summary-progress">
                <div className="summary-progress-bar">
                  <div className="summary-progress-fill blue" style={{ width: '80.2%' }}></div>
                </div>
                <div className="summary-percentage positive">80.2%</div>
              </div>
              <div className="summary-trend positive">
                <TrendingUp size={12} />
                Higher
              </div>
            </div>

            <div className="summary-item">
              <div className="summary-label">Total Late (days)</div>
              <div className="summary-value">02</div>
              <div className="summary-progress">
                <div className="summary-progress-bar">
                  <div className="summary-progress-fill red" style={{ width: '12.4%' }}></div>
                </div>
                <div className="summary-percentage negative">12.4%</div>
              </div>
              <div className="summary-trend negative">
                <TrendingUp size={12} />
                1 late remaining
              </div>
            </div>
          </div>

          {/* HR Letters Widget */}
          <div className="glass-card widget">
            <h3 className="widget-title">HR Letters</h3>
            <div className="stat-value">21</div>
            <div style={{ color: '#10b981', fontSize: '12px', fontWeight: '500' }}>
              Approved
            </div>
          </div>

          {/* Add Widget Placeholder */}
          <div className="glass-card widget add-widget">
            <div className="add-widget-icon">+</div>
            <div className="add-widget-text">Add widget</div>
          </div>

          {/* Waiting For Approval Widget */}
          <div className="glass-card widget">
            <h3 className="widget-title">Waiting For Approval</h3>
            <div className="widget-subtitle">5 Pending Approvals</div>
            {approvalData.map((approval, index) => (
              <div key={index} className="approval-item">
                <div className="approval-avatar"></div>
                <div className="approval-details">
                  <div className="approval-name">{approval.name}</div>
                  <div className="approval-type">{approval.type}</div>
                  <div className="approval-time">{approval.time}</div>
                </div>
                <div className="approval-actions">
                  <button className="approval-btn approve">Approve</button>
                  <button className="approval-btn reject">
                    <X size={12} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Forms Widget */}
          <div className="glass-card widget">
            <h3 className="widget-title">Forms</h3>
            <input 
              type="text" 
              className="form-select" 
              placeholder="Select Forms"
            />
            <button className="btn btn-primary">Fill Form</button>
          </div>

          {/* Another Add Widget Placeholder */}
          <div className="glass-card widget add-widget">
            <div className="add-widget-icon">+</div>
            <div className="add-widget-text">Add widget</div>
          </div>
        </div>
      </div>

      {/* Sidebar Navigation */}
      <nav className="sidebar">
        <a href="#" className="sidebar-item active" data-tooltip="Dashboard">
          <LayoutDashboard size={20} className="sidebar-icon" />
        </a>
        <a href="/global-search.html" className="sidebar-item" data-tooltip="Global">
          <Globe size={20} className="sidebar-icon" />
        </a>
        <a href="/analytics.html" className="sidebar-item" data-tooltip="Analytics">
          <BarChart3 size={20} className="sidebar-icon" />
        </a>
        
        <div className="sidebar-divider"></div>
        
        <a href="#" className="sidebar-item" data-tooltip="Schedule">
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

export default App
