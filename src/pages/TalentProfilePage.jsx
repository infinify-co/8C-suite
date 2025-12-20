import React, { useState } from 'react'
import { 
  Link,
  Check,
  Info,
  Play,
  Volume2,
  Maximize,
  ChevronLeft,
  ChevronRight,
  Star
} from 'lucide-react'

const talentDatabase = {
  'jana-kramer': {
    name: 'Jana Kramer',
    profession: 'Singer - Actress',
    profilePic: 'https://via.placeholder.com/200',
    description: 'Actress, singer, wife, mom of two, podcast "Whine Down with Jana Kramer. Alex Dupre from One Tree Hill.',
    fullDescription: 'Actress, singer, wife, mom of two, podcast "Whine Down with Jana Kramer. Alex Dupre from One Tree Hill. Known for her roles in television and music career.',
    rating: 4.81,
    reviews: 115,
    age: 42,
    gender: 'Female',
    location: 'United States',
    price: 15200,
    videos: [
      { id: 1, thumbnail: 'https://via.placeholder.com/300', duration: '1:19', current: '0:02' },
      { id: 2, thumbnail: 'https://via.placeholder.com/300', duration: '1:17', current: '0:00' },
      { id: 3, thumbnail: 'https://via.placeholder.com/300', duration: '1:24', current: '0:00' },
      { id: 4, thumbnail: 'https://via.placeholder.com/300', duration: '1:09', current: '0:07' }
    ]
  },
  'kevin-oleary': {
    name: 'Kevin O\'Leary',
    profession: 'Investor - Shark Tank',
    profilePic: 'https://via.placeholder.com/200',
    description: 'Canadian businessman, investor, and television personality. Best known as "Mr. Wonderful" on Shark Tank.',
    fullDescription: 'Canadian businessman, investor, and television personality. Best known as "Mr. Wonderful" on Shark Tank. Co-founder of SoftKey Software Products and O\'Leary Funds.',
    rating: 4.9,
    reviews: 89,
    age: 69,
    gender: 'Male',
    location: 'Canada',
    price: 9880,
    videos: []
  },
  'brian-baumgartner': {
    name: 'Brian Baumgartner',
    profession: 'Actor - The Office',
    profilePic: 'https://via.placeholder.com/200',
    description: 'American actor best known for playing Kevin Malone on the NBC sitcom The Office.',
    fullDescription: 'American actor best known for playing Kevin Malone on the NBC sitcom The Office. Also known for his podcast "The Office Deep Dive".',
    rating: 4.85,
    reviews: 203,
    age: 51,
    gender: 'Male',
    location: 'United States',
    price: 5700,
    videos: []
  },
  'jesse-metcalfe': {
    name: 'Jesse Metcalfe',
    profession: 'Actor - Desperate Housewives',
    profilePic: 'https://via.placeholder.com/200',
    description: 'American actor and model, best known for his role as John Rowland on Desperate Housewives.',
    fullDescription: 'American actor and model, best known for his role as John Rowland on Desperate Housewives. Also appeared in films and other television series.',
    rating: 4.7,
    reviews: 156,
    age: 45,
    gender: 'Male',
    location: 'United States',
    price: 14266,
    videos: []
  },
  'christina-milian': {
    name: 'Christina Milian',
    profession: 'Actress & Singer',
    profilePic: 'https://via.placeholder.com/200',
    description: 'American singer, songwriter, and actress. Known for her music career and roles in films.',
    fullDescription: 'American singer, songwriter, and actress. Known for her music career and roles in films like Love Don\'t Cost a Thing and Be Cool.',
    rating: 4.6,
    reviews: 98,
    age: 42,
    gender: 'Female',
    location: 'United States',
    price: 12160,
    videos: []
  },
  'dean-norris': {
    name: 'Dean Norris',
    profession: 'Actor - Breaking Bad',
    profilePic: 'https://via.placeholder.com/200',
    description: 'American actor best known for his role as DEA agent Hank Schrader on the AMC series Breaking Bad.',
    fullDescription: 'American actor best known for his role as DEA agent Hank Schrader on the AMC series Breaking Bad. Also appeared in Under the Dome and Claws.',
    rating: 4.88,
    reviews: 187,
    age: 60,
    gender: 'Male',
    location: 'United States',
    price: 9120,
    videos: []
  }
}

function TalentProfilePage({ talentId }) {
  const talent = talentDatabase[talentId] || talentDatabase['jana-kramer']
  const [showFullDescription, setShowFullDescription] = useState(false)
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)

  if (!talent) {
    return <div>Talent not found</div>
  }

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'white',
      padding: '24px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
          {/* Left Column */}
          <div style={{ flex: 1, minWidth: '300px' }}>
            {/* Profile Header */}
            <div style={{ display: 'flex', gap: '24px', marginBottom: '32px', flexWrap: 'wrap' }}>
              <div style={{
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                background: '#e5e7eb',
                flexShrink: 0
              }}></div>
              <div style={{ flex: 1, minWidth: '200px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                  <h1 style={{ 
                    fontSize: '32px', 
                    fontWeight: '700', 
                    margin: 0,
                    color: '#1f2937'
                  }}>
                    {talent.name}
                  </h1>
                  <Link size={20} style={{ color: '#6b7280' }} />
                </div>
                <p style={{ 
                  fontSize: '18px', 
                  color: '#6b7280',
                  margin: '0 0 12px 0'
                }}>
                  {talent.profession}
                </p>
                <p style={{ 
                  fontSize: '14px', 
                  color: '#4b5563',
                  margin: '0 0 12px 0',
                  lineHeight: '1.6'
                }}>
                  {showFullDescription ? talent.fullDescription : talent.description}
                  {!showFullDescription && (
                    <button
                      onClick={() => setShowFullDescription(true)}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: '#3b82f6',
                        cursor: 'pointer',
                        padding: 0,
                        marginLeft: '4px',
                        textDecoration: 'underline'
                      }}
                    >
                      Read more
                    </button>
                  )}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Star size={16} style={{ color: '#fbbf24', fill: '#fbbf24' }} />
                    <span style={{ fontSize: '16px', fontWeight: '600', color: '#1f2937' }}>
                      {talent.rating}
                    </span>
                  </div>
                  <span style={{ fontSize: '14px', color: '#6b7280' }}>
                    ({talent.reviews} reviews)
                  </span>
                </div>
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(3, 1fr)', 
                  gap: '16px',
                  padding: '16px',
                  background: '#f9fafb',
                  borderRadius: '8px'
                }}>
                  <div>
                    <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '4px' }}>Age</div>
                    <div style={{ fontSize: '16px', fontWeight: '600', color: '#1f2937' }}>{talent.age}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '4px' }}>Gender</div>
                    <div style={{ fontSize: '16px', fontWeight: '600', color: '#1f2937' }}>{talent.gender}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '4px' }}>Location</div>
                    <div style={{ fontSize: '16px', fontWeight: '600', color: '#1f2937' }}>{talent.location}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sample Videos */}
            {talent.videos && talent.videos.length > 0 && (
              <div style={{ marginBottom: '32px' }}>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  marginBottom: '16px'
                }}>
                  <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#1f2937', margin: 0 }}>
                    Sample videos
                  </h2>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      border: '1px solid #e5e7eb',
                      background: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer'
                    }}>
                      <ChevronLeft size={16} style={{ color: '#6b7280' }} />
                    </button>
                    <button style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      border: '1px solid #e5e7eb',
                      background: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer'
                    }}>
                      <ChevronRight size={16} style={{ color: '#6b7280' }} />
                    </button>
                  </div>
                </div>
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '16px'
                }}>
                  {talent.videos.map((video, idx) => (
                    <div key={video.id} style={{ position: 'relative' }}>
                      <div style={{
                        width: '100%',
                        aspectRatio: '16/9',
                        background: '#e5e7eb',
                        borderRadius: '8px',
                        position: 'relative',
                        overflow: 'hidden'
                      }}>
                        <div style={{
                          position: 'absolute',
                          bottom: '8px',
                          left: '8px',
                          right: '8px',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center'
                        }}>
                          <span style={{
                            background: 'rgba(0,0,0,0.7)',
                            color: 'white',
                            padding: '4px 8px',
                            borderRadius: '4px',
                            fontSize: '12px'
                          }}>
                            {video.current}/{video.duration}
                          </span>
                          <div style={{ display: 'flex', gap: '8px' }}>
                            <Play size={16} style={{ color: 'white' }} />
                            <Volume2 size={16} style={{ color: 'white' }} />
                            <Maximize size={16} style={{ color: 'white' }} />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column */}
          <div style={{ width: '400px', flexShrink: 0 }}>
            {/* Book a business video card */}
            <div style={{
              background: '#f9fafb',
              borderRadius: '12px',
              padding: '24px',
              border: '1px solid #e5e7eb',
              marginBottom: '16px'
            }}>
              <h3 style={{ 
                fontSize: '20px', 
                fontWeight: '600', 
                margin: '0 0 8px 0',
                color: '#1f2937'
              }}>
                Book a business video now
              </h3>
              <p style={{ 
                fontSize: '18px', 
                fontWeight: '600', 
                margin: '0 0 20px 0',
                color: '#1f2937'
              }}>
                starting at A${talent.price.toLocaleString()}
              </p>
              <div style={{ marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                  <Check size={16} style={{ color: '#10b981' }} />
                  <span style={{ fontSize: '14px', color: '#1f2937' }}>
                    Selfie style video within 7 days
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                  <Check size={16} style={{ color: '#10b981' }} />
                  <span style={{ fontSize: '14px', color: '#1f2937' }}>
                    15 day license for marketing & event use
                  </span>
                  <Info size={14} style={{ color: '#6b7280' }} />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Check size={16} style={{ color: '#10b981' }} />
                  <span style={{ fontSize: '14px', color: '#1f2937' }}>
                    Flexible license activation & extension
                  </span>
                </div>
              </div>
              <button style={{
                width: '100%',
                padding: '12px',
                background: '#7c3aed',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer'
              }}>
                Book now
              </button>
            </div>

            {/* Separator */}
            <div style={{ 
              textAlign: 'center', 
              margin: '16px 0',
              color: '#6b7280',
              fontSize: '14px'
            }}>
              or
            </div>

            {/* Looking for more card */}
            <div style={{
              background: '#f9fafb',
              borderRadius: '12px',
              padding: '24px',
              border: '1px solid #e5e7eb'
            }}>
              <h3 style={{ 
                fontSize: '20px', 
                fontWeight: '600', 
                margin: '0 0 12px 0',
                color: '#1f2937'
              }}>
                Looking for more?
              </h3>
              <p style={{ 
                fontSize: '14px', 
                color: '#6b7280',
                margin: '0 0 20px 0',
                lineHeight: '1.6'
              }}>
                From multi-video bundles to custom brand activations, our team can help bring your bigger campaign ideas to life.
              </p>
              <button style={{
                width: '100%',
                padding: '12px',
                background: 'white',
                color: '#1f2937',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer'
              }}>
                Contact sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TalentProfilePage

