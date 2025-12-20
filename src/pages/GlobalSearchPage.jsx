import React, { useState } from 'react'
import { 
  Search, 
  ChevronDown, 
  Hash,
  Instagram,
  Music,
  Eye,
  ChevronRight,
  ChevronLeft,
  LayoutDashboard,
  Library,
  Globe,
  CalendarDays,
  BarChart3,
  Wallet
} from 'lucide-react'

const talentData = [
  {
    id: 'kevin-oleary',
    name: 'Kevin O\'Leary',
    profession: 'Investor - Shark Tank',
    profilePic: 'https://via.placeholder.com/150',
    followers: {
      instagram: 859000,
      tiktok: 0,
      views: 0
    },
    price: 9880
  },
  {
    id: 'brian-baumgartner',
    name: 'Brian Baumgartner',
    profession: 'Actor - The Office',
    profilePic: 'https://via.placeholder.com/150',
    followers: {
      instagram: 1200000,
      tiktok: 602000,
      views: 452000
    },
    price: 5700
  },
  {
    id: 'jesse-metcalfe',
    name: 'Jesse Metcalfe',
    profession: 'Actor - Desperate Housewives',
    profilePic: 'https://via.placeholder.com/150',
    followers: {
      instagram: 1000000,
      tiktok: 792000,
      views: 286000
    },
    price: 14266
  },
  {
    id: 'christina-milian',
    name: 'Christina Milian',
    profession: 'Actress & Singer',
    profilePic: 'https://via.placeholder.com/150',
    followers: {
      instagram: 0,
      tiktok: 0,
      views: 0
    },
    price: 12160
  },
  {
    id: 'dean-norris',
    name: 'Dean Norris',
    profession: 'Actor - Breaking Bad',
    profilePic: 'https://via.placeholder.com/150',
    followers: {
      instagram: 1700000,
      tiktok: 0,
      views: 859000
    },
    price: 9120
  },
  {
    id: 'jana-kramer',
    name: 'Jana Kramer',
    profession: 'Singer - Actress',
    profilePic: 'https://via.placeholder.com/150',
    followers: {
      instagram: 2000000,
      tiktok: 921000,
      views: 382000
    },
    price: 15200
  }
]

function formatNumber(num) {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M'
  } else if (num >= 1000) {
    return (num / 1000).toFixed(0) + 'K'
  }
  return num.toString()
}

function GlobalSearchPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [showFilters, setShowFilters] = useState(true)
  const [activeTab, setActiveTab] = useState('Talent')

  const filteredTalent = talentData.filter(talent => 
    talent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    talent.profession.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="dashboard-container" style={{ 
      minHeight: '100vh', 
      background: 'white',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <div style={{ 
        padding: '24px',
        marginLeft: '80px'
      }}>
      {/* Top Bar */}
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '16px', 
        marginBottom: '32px',
        flexWrap: 'wrap'
      }}>
        <div style={{ 
          flex: 1, 
          minWidth: '300px',
          position: 'relative',
          maxWidth: '600px'
        }}>
          <Search size={20} style={{ 
            position: 'absolute', 
            left: '12px', 
            top: '50%', 
            transform: 'translateY(-50%)',
            color: '#6b7280'
          }} />
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              padding: '12px 12px 12px 40px',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              fontSize: '16px',
              outline: 'none'
            }}
          />
        </div>
        <button style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '12px 16px',
          background: 'white',
          border: '1px solid #e5e7eb',
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '14px',
          color: '#1f2937'
        }}>
          Featured
          <ChevronDown size={16} />
        </button>
        <button 
          onClick={() => setShowFilters(!showFilters)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '12px 16px',
            background: 'white',
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '14px',
            color: '#1f2937'
          }}
        >
          <Hash size={16} />
          {showFilters ? 'Hide Filters' : 'Show Filters'}
        </button>
      </div>

      <div style={{ display: 'flex', gap: '24px' }}>
        {/* Main Content - Talent Grid */}
        <div style={{ flex: 1 }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '24px'
          }}>
            {filteredTalent.map((talent) => (
              <a
                key={talent.id}
                href={`/talent/${talent.id}.html`}
                style={{
                  textDecoration: 'none',
                  color: 'inherit'
                }}
              >
                <div style={{
                  background: 'white',
                  border: '1px solid #e5e7eb',
                  borderRadius: '12px',
                  padding: '20px',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                    <div style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '50%',
                      background: '#e5e7eb',
                      flexShrink: 0
                    }}></div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <h3 style={{ 
                        fontSize: '18px', 
                        fontWeight: '600', 
                        margin: '0 0 4px 0',
                        color: '#1f2937',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                      }}>
                        {talent.name}
                      </h3>
                      <p style={{ 
                        fontSize: '14px', 
                        color: '#6b7280',
                        margin: 0,
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                      }}>
                        {talent.profession}
                      </p>
                    </div>
                  </div>
                  
                  <div style={{ 
                    display: 'flex', 
                    gap: '16px', 
                    marginBottom: '16px',
                    flexWrap: 'wrap'
                  }}>
                    {talent.followers.instagram > 0 && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Instagram size={16} style={{ color: '#6b7280' }} />
                        <span style={{ fontSize: '12px', color: '#6b7280' }}>
                          {formatNumber(talent.followers.instagram)}
                        </span>
                      </div>
                    )}
                    {talent.followers.tiktok > 0 && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Music size={16} style={{ color: '#6b7280' }} />
                        <span style={{ fontSize: '12px', color: '#6b7280' }}>
                          {formatNumber(talent.followers.tiktok)}
                        </span>
                      </div>
                    )}
                    {talent.followers.views > 0 && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Eye size={16} style={{ color: '#6b7280' }} />
                        <span style={{ fontSize: '12px', color: '#6b7280' }}>
                          {formatNumber(talent.followers.views)}
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <div style={{ 
                    paddingTop: '16px', 
                    borderTop: '1px solid #e5e7eb',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <span style={{ fontSize: '12px', color: '#6b7280' }}>starting video price</span>
                    <span style={{ fontSize: '18px', fontWeight: '600', color: '#1f2937' }}>
                      A${talent.price.toLocaleString()}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Filters Sidebar */}
        {showFilters && (
          <div style={{
            width: '280px',
            background: '#f9fafb',
            borderRadius: '12px',
            padding: '20px',
            border: '1px solid #e5e7eb',
            height: 'fit-content',
            position: 'sticky',
            top: '24px'
          }}>
            <h3 style={{ 
              fontSize: '18px', 
              fontWeight: '600', 
              margin: '0 0 20px 0',
              color: '#1f2937'
            }}>
              Filters
            </h3>
            
            <div style={{ 
              display: 'flex', 
              gap: '8px', 
              marginBottom: '24px',
              background: 'white',
              padding: '4px',
              borderRadius: '8px',
              border: '1px solid #e5e7eb'
            }}>
              <button
                onClick={() => setActiveTab('Talent')}
                style={{
                  flex: 1,
                  padding: '8px 12px',
                  border: 'none',
                  borderRadius: '6px',
                  background: activeTab === 'Talent' ? '#3b82f6' : 'transparent',
                  color: activeTab === 'Talent' ? 'white' : '#6b7280',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: '500'
                }}
              >
                Talent
              </button>
              <button
                onClick={() => setActiveTab('Audience')}
                style={{
                  flex: 1,
                  padding: '8px 12px',
                  border: 'none',
                  borderRadius: '6px',
                  background: activeTab === 'Audience' ? '#3b82f6' : 'transparent',
                  color: activeTab === 'Audience' ? 'white' : '#6b7280',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: '500'
                }}
              >
                Audience
              </button>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <button style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '12px',
                background: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '14px',
                color: '#1f2937'
              }}>
                Category
                <ChevronDown size={16} />
              </button>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <button style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '12px',
                background: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '14px',
                color: '#1f2937'
              }}>
                Price
                <ChevronDown size={16} />
              </button>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <button style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '12px',
                background: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '14px',
                color: '#1f2937'
              }}>
                Follower count
                <ChevronDown size={16} />
              </button>
            </div>

            <div>
              <button style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '12px',
                background: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '14px',
                color: '#1f2937'
              }}>
                Gender
                <ChevronDown size={16} />
              </button>
            </div>
          </div>
        )}
      </div>
      </div>

      {/* Sidebar Navigation */}
      <nav className="sidebar">
        <a href="/home.html" className="sidebar-item" data-tooltip="Dashboard">
          <LayoutDashboard size={20} className="sidebar-icon" />
        </a>
        <a href="/global-search.html" className="sidebar-item active" data-tooltip="Global">
          <Globe size={20} className="sidebar-icon" />
        </a>
        <a href="/analytics.html" className="sidebar-item" data-tooltip="Analytics">
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

export default GlobalSearchPage

