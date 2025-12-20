import React, { useState } from 'react'
import { 
  Wallet,
  LayoutDashboard,
  Library,
  Globe,
  CalendarDays,
  BarChart3,
  TrendingUp,
  TrendingDown,
  FileText,
  DollarSign,
  ArrowRight,
  ChevronDown,
  Plus
} from 'lucide-react'

function WalletPage() {
  const [buySellTab, setBuySellTab] = useState('Buy')

  return (
    <div className="dashboard-container">
      <div className="main-content" style={{ padding: '24px', marginLeft: '80px' }}>
        {/* Top Row - Overview Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginBottom: '24px' }}>
          {/* Balance Card */}
          <div style={{ 
            background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)', 
            borderRadius: '16px', 
            padding: '24px',
            color: 'white',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
              <Wallet size={24} style={{ color: 'white' }} />
              <div style={{ width: '60px', height: '40px', background: 'rgba(255,255,255,0.2)', borderRadius: '8px' }}></div>
            </div>
            <div style={{ fontSize: '14px', opacity: 0.9, marginBottom: '8px' }}>Balance</div>
            <div style={{ fontSize: '32px', fontWeight: '700', marginBottom: '8px' }}>$40,000.063</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px' }}>
              <TrendingUp size={16} />
              <span>+35,74%</span>
            </div>
          </div>

          {/* Spending Card */}
          <div style={{ 
            background: 'white', 
            borderRadius: '16px', 
            padding: '24px',
            border: '1px solid #e5e7eb',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
              <FileText size={24} style={{ color: '#6b7280' }} />
              <div style={{ width: '60px', height: '40px', background: '#fee2e2', borderRadius: '8px' }}></div>
            </div>
            <div style={{ fontSize: '14px', color: '#6b7280', marginBottom: '8px' }}>Spending</div>
            <div style={{ fontSize: '32px', fontWeight: '700', marginBottom: '8px', color: '#1f2937' }}>-$103,000</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#ef4444' }}>
              <TrendingDown size={16} />
              <span>+10,74%</span>
            </div>
          </div>

          {/* Saved Card */}
          <div style={{ 
            background: 'white', 
            borderRadius: '16px', 
            padding: '24px',
            border: '1px solid #e5e7eb',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
              <DollarSign size={24} style={{ color: '#6b7280' }} />
              <div style={{ width: '60px', height: '40px', background: '#d1fae5', borderRadius: '8px' }}></div>
            </div>
            <div style={{ fontSize: '14px', color: '#6b7280', marginBottom: '8px' }}>Saved</div>
            <div style={{ fontSize: '32px', fontWeight: '700', marginBottom: '8px', color: '#1f2937' }}>$103,000</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#10b981' }}>
              <TrendingUp size={16} />
              <span>+10,74%</span>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px' }}>
          {/* Left Column */}
          <div>
            {/* Statistics Section */}
            <div style={{ 
              background: 'white', 
              borderRadius: '16px', 
              padding: '24px',
              border: '1px solid #e5e7eb',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              marginBottom: '24px'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#1f2937' }}>Statistics</h3>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <select style={{ 
                    padding: '8px 12px', 
                    borderRadius: '8px', 
                    border: '1px solid #e5e7eb',
                    fontSize: '14px',
                    color: '#1f2937',
                    background: 'white'
                  }}>
                    <option>Spending</option>
                  </select>
                  <select style={{ 
                    padding: '8px 12px', 
                    borderRadius: '8px', 
                    border: '1px solid #e5e7eb',
                    fontSize: '14px',
                    color: '#1f2937',
                    background: 'white'
                  }}>
                    <option>2022</option>
                  </select>
                </div>
              </div>
              <div style={{ height: '200px', display: 'flex', alignItems: 'flex-end', gap: '8px', padding: '16px 0' }}>
                {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Des'].map((month, idx) => (
                  <div key={month} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                    <div style={{ 
                      width: '100%', 
                      height: `${Math.random() * 60 + 40}%`, 
                      background: idx === 3 ? '#3b82f6' : '#dbeafe',
                      borderRadius: '4px 4px 0 0',
                      minHeight: '20px'
                    }}></div>
                    <span style={{ fontSize: '12px', color: '#6b7280' }}>{month}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Trending Market Section */}
            <div style={{ 
              background: 'white', 
              borderRadius: '16px', 
              padding: '24px',
              border: '1px solid #e5e7eb',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#1f2937' }}>Trending Market</h3>
                <a href="#" style={{ fontSize: '14px', color: '#3b82f6', textDecoration: 'none' }}>View more markets</a>
              </div>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                    <th style={{ textAlign: 'left', padding: '12px 0', fontSize: '14px', color: '#6b7280', fontWeight: '500' }}>Token</th>
                    <th style={{ textAlign: 'left', padding: '12px 0', fontSize: '14px', color: '#6b7280', fontWeight: '500' }}>Symbol</th>
                    <th style={{ textAlign: 'left', padding: '12px 0', fontSize: '14px', color: '#6b7280', fontWeight: '500' }}>Last Price</th>
                    <th style={{ textAlign: 'left', padding: '12px 0', fontSize: '14px', color: '#6b7280', fontWeight: '500' }}>24H Change</th>
                    <th style={{ textAlign: 'left', padding: '12px 0', fontSize: '14px', color: '#6b7280', fontWeight: '500' }}>Market Cap</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                    <td style={{ padding: '16px 0', display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#fbbf24' }}></div>
                      <span style={{ fontSize: '14px', fontWeight: '500', color: '#1f2937' }}>BNB</span>
                    </td>
                    <td style={{ padding: '16px 0', fontSize: '14px', color: '#1f2937' }}>BNB</td>
                    <td style={{ padding: '16px 0', fontSize: '14px', color: '#1f2937' }}>$41.263,00</td>
                    <td style={{ padding: '16px 0', fontSize: '14px', color: '#10b981', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <TrendingUp size={14} />
                      +35,74%
                    </td>
                    <td style={{ padding: '16px 0', fontSize: '14px', color: '#1f2937' }}>$784,393M</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '16px 0', display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#f97316' }}></div>
                      <span style={{ fontSize: '14px', fontWeight: '500', color: '#1f2937' }}>Bitcoin</span>
                    </td>
                    <td style={{ padding: '16px 0', fontSize: '14px', color: '#1f2937' }}>BTC</td>
                    <td style={{ padding: '16px 0', fontSize: '14px', color: '#1f2937' }}>$41.263,00</td>
                    <td style={{ padding: '16px 0', fontSize: '14px', color: '#10b981', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <TrendingUp size={14} />
                      +35,74%
                    </td>
                    <td style={{ padding: '16px 0', fontSize: '14px', color: '#1f2937' }}>$784,393M</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Right Column */}
          <div>
            {/* Buy/Sell Section */}
            <div style={{ 
              background: 'white', 
              borderRadius: '16px', 
              padding: '24px',
              border: '1px solid #e5e7eb',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              marginBottom: '24px'
            }}>
              <div style={{ display: 'flex', gap: '16px', marginBottom: '16px', borderBottom: '1px solid #e5e7eb' }}>
                <button 
                  onClick={() => setBuySellTab('Buy')}
                  style={{ 
                    padding: '8px 0', 
                    border: 'none', 
                    background: 'transparent',
                    color: buySellTab === 'Buy' ? '#3b82f6' : '#6b7280',
                    borderBottom: buySellTab === 'Buy' ? '2px solid #3b82f6' : '2px solid transparent',
                    cursor: 'pointer',
                    fontSize: '14px',
                    fontWeight: '500'
                  }}
                >
                  Buy
                </button>
                <button 
                  onClick={() => setBuySellTab('Sell')}
                  style={{ 
                    padding: '8px 0', 
                    border: 'none', 
                    background: 'transparent',
                    color: buySellTab === 'Sell' ? '#3b82f6' : '#6b7280',
                    borderBottom: buySellTab === 'Sell' ? '2px solid #3b82f6' : '2px solid transparent',
                    cursor: 'pointer',
                    fontSize: '14px',
                    fontWeight: '500'
                  }}
                >
                  Sell
                </button>
              </div>
              <div style={{ marginBottom: '16px', fontSize: '14px', color: '#6b7280' }}>Ethereum Price: $3.110,31</div>
              <div style={{ marginBottom: '16px' }}>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '8px',
                  padding: '12px',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  marginBottom: '12px'
                }}>
                  <input type="text" value="0.1824" style={{ flex: 1, border: 'none', outline: 'none', fontSize: '16px' }} />
                  <select style={{ border: 'none', outline: 'none', fontSize: '14px', color: '#1f2937' }}>
                    <option>BTC</option>
                  </select>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', margin: '8px 0' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <ArrowRight size={16} style={{ color: '#6b7280' }} />
                  </div>
                </div>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '8px',
                  padding: '12px',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px'
                }}>
                  <input type="text" value="0.1824" style={{ flex: 1, border: 'none', outline: 'none', fontSize: '16px' }} />
                  <select style={{ border: 'none', outline: 'none', fontSize: '14px', color: '#1f2937' }}>
                    <option>ETH</option>
                  </select>
                </div>
              </div>
              <button style={{ 
                width: '100%', 
                padding: '12px', 
                background: '#3b82f6', 
                color: 'white', 
                border: 'none', 
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: '500',
                cursor: 'pointer'
              }}>
                Buy ETH
              </button>
            </div>

            {/* Quick Transfer Section */}
            <div style={{ 
              background: 'white', 
              borderRadius: '16px', 
              padding: '24px',
              border: '1px solid #e5e7eb',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              marginBottom: '24px'
            }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#1f2937', marginBottom: '16px' }}>Quick Transfer</h3>
              <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} style={{ 
                    width: '48px', 
                    height: '48px', 
                    borderRadius: '50%', 
                    background: '#e5e7eb',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}></div>
                ))}
                <div style={{ 
                  width: '48px', 
                  height: '48px', 
                  borderRadius: '50%', 
                  background: '#f3f4f6',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px dashed #d1d5db',
                  cursor: 'pointer'
                }}>
                  <Plus size={20} style={{ color: '#6b7280' }} />
                </div>
              </div>
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '14px', color: '#6b7280', marginBottom: '8px' }}>Amount</label>
                <input type="text" value="$1,500" style={{ 
                  width: '100%', 
                  padding: '12px', 
                  border: '1px solid #e5e7eb', 
                  borderRadius: '8px',
                  fontSize: '16px'
                }} />
              </div>
              <button style={{ 
                width: '100%', 
                padding: '12px', 
                background: '#3b82f6', 
                color: 'white', 
                border: 'none', 
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: '500',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}>
                Transfer
                <ArrowRight size={16} />
              </button>
            </div>

            {/* New Cryptocurrency Section */}
            <div style={{ 
              background: 'white', 
              borderRadius: '16px', 
              padding: '24px',
              border: '1px solid #e5e7eb',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#1f2937' }}>New Cryptocurrency</h3>
                <a href="#" style={{ fontSize: '14px', color: '#3b82f6', textDecoration: 'none' }}>See all</a>
              </div>
              <div style={{ fontSize: '14px', color: '#1f2937' }}>Litecoin</div>
            </div>
          </div>
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
        
        <a href="/schedule.html" className="sidebar-item" data-tooltip="Schedule">
          <CalendarDays size={20} className="sidebar-icon" />
        </a>
        <a href="/wallet.html" className="sidebar-item active" data-tooltip="Wallet">
          <Wallet size={20} className="sidebar-icon" />
        </a>
        <a href="/campaigns.html" className="sidebar-item" data-tooltip="Campaigns">
          <Library size={20} className="sidebar-icon" />
        </a>
      </nav>
    </div>
  )
}

export default WalletPage

