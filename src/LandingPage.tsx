import React from 'react'
import { Globe } from './components/Globe'
import './landing.css'

export default function LandingPage() {
  return (
    <>
      <header>
        <div className="logo-container">
          <span className="logo-text">8C SUITE</span>
        </div>
        <nav>
          <a href="#">Product</a>
          <a href="#">Solutions</a>
          <a href="#">Resources</a>
          <a href="#">Clients</a>
          <a href="#">Pricing</a>
          <a href="#">Contact</a>
        </nav>
        <div className="header-actions">
          <a href="#" className="btn-login">Log in</a>
          <a href="#" className="btn-signup">Sign up</a>
        </div>
      </header>
      <div 
        style={{ 
          position: 'relative', 
          width: '100%', 
          minHeight: '100vh', 
          background: 'transparent',
        }}
      >
        {/* First Section - Hero */}
        <section
          style={{ 
            position: 'relative', 
            width: '100%', 
            height: '100vh', 
            overflow: 'hidden', 
            marginTop: '0px', 
            background: 'transparent',
            touchAction: 'none',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onWheel={(e) => e.preventDefault()}
          onTouchStart={(e) => e.preventDefault()}
          onTouchMove={(e) => e.preventDefault()}
        >
          <div style={{ transform: 'translateY(-52px)' }}>
            <Globe />
          </div>
          <h1 
            style={{
              fontSize: '5rem',
              fontWeight: 'bold',
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
              background: 'linear-gradient(to right, #4a4a4a, #a0a0a0)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              margin: 0,
              padding: 0,
              lineHeight: 1,
              zIndex: 1,
              position: 'relative',
              marginTop: '2rem',
              transform: 'translateY(-100px)',
              textAlign: 'center',
            }}
          >
            Reach Modern Markets
          </h1>
          <p
            style={{
              fontSize: '1.25rem',
              fontWeight: 'normal',
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
              color: '#666',
              margin: 0,
              padding: 0,
              marginTop: '1rem',
              transform: 'translateY(-100px)',
              zIndex: 1,
              position: 'relative',
              textAlign: 'center',
              maxWidth: '800px',
              lineHeight: 1.6,
            }}
          >
            Marketing and consumers are moving away from traditional marketing, there are new key drivers of traffic.
          </p>
        </section>

        {/* Second Section */}
        <section
          style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '4rem 2rem',
            background: 'transparent',
          }}
        >
          <h2
            style={{
              fontSize: '4rem',
              fontWeight: 'bold',
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
              background: 'linear-gradient(to right, #4a4a4a, #a0a0a0)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              margin: 0,
              padding: 0,
              lineHeight: 1.2,
              textAlign: 'center',
              marginBottom: '2rem',
            }}
          >
            Global Expansion
          </h2>
          <p
            style={{
              fontSize: '1.25rem',
              fontWeight: 'normal',
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
              color: '#666',
              margin: 0,
              padding: 0,
              textAlign: 'center',
              maxWidth: '800px',
              lineHeight: 1.6,
            }}
          >
            Expand your reach across borders with data-driven insights and localized strategies that resonate with international audiences.
          </p>
        </section>

        {/* Third Section */}
        <section
          style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '4rem 2rem',
            background: 'transparent',
          }}
        >
          <h2
            style={{
              fontSize: '4rem',
              fontWeight: 'bold',
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
              background: 'linear-gradient(to right, #4a4a4a, #a0a0a0)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              margin: 0,
              padding: 0,
              lineHeight: 1.2,
              textAlign: 'center',
              marginBottom: '2rem',
            }}
          >
            Digital Transformation
          </h2>
          <p
            style={{
              fontSize: '1.25rem',
              fontWeight: 'normal',
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
              color: '#666',
              margin: 0,
              padding: 0,
              textAlign: 'center',
              maxWidth: '800px',
              lineHeight: 1.6,
            }}
          >
            Embrace the future of marketing with cutting-edge digital tools and platforms that connect you directly with your target market.
          </p>
        </section>

        {/* Fourth Section */}
        <section
          style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '4rem 2rem',
            background: 'transparent',
          }}
        >
          <h2
            style={{
              fontSize: '4rem',
              fontWeight: 'bold',
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
              background: 'linear-gradient(to right, #4a4a4a, #a0a0a0)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              margin: 0,
              padding: 0,
              lineHeight: 1.2,
              textAlign: 'center',
              marginBottom: '2rem',
            }}
          >
            Strategic Growth
          </h2>
          <p
            style={{
              fontSize: '1.25rem',
              fontWeight: 'normal',
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
              color: '#666',
              margin: 0,
              padding: 0,
              textAlign: 'center',
              maxWidth: '800px',
              lineHeight: 1.6,
            }}
          >
            Build sustainable growth through strategic partnerships and innovative marketing approaches that adapt to changing consumer behaviors.
          </p>
        </section>
      </div>
    </>
  )
}

