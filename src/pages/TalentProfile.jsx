import React from 'react'
import ReactDOM from 'react-dom/client'
import TalentProfilePage from './TalentProfilePage'
import '../index.css'

// Extract talent ID from URL path
function getTalentId() {
  const path = window.location.pathname
  const parts = path.split('/')
  const filename = parts[parts.length - 1]
  return filename.replace('.html', '')
}

const talentId = getTalentId()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TalentProfilePage talentId={talentId} />
  </React.StrictMode>,
)

