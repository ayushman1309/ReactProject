import React, { useState } from 'react'
import './SideBarr.css'
import { assets } from '../../assets/assets'

const SideBar = () => {
  const [extended, setExtended] = useState(false)

  return (
    <div className='sidebar'>
      <div className="top">
        <img 
          onClick={() => setExtended(prev => !prev)}  // ✅ toggle state correctly
          className='menu' 
          src={assets.menu_icon} 
          alt="logo" 
        />

        <div className="new-chat">
          <img className='chat-icon' src={assets.plus_icon} alt="logo" />
          {extended && <p>New Chat</p>}
        </div>

        {extended && (
          <div className="recent">
            <p className="recent-title">Recent</p>   {/* ✅ fixed typo "tittle" */}
            <div className="recent-entry">
              <img src={assets.message_icon} alt="logo" />
              <p>What is React ...</p>
            </div>
          </div>
        )}
      </div>

      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="logo" />
          {extended && <p>Help</p>}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="logo" />
          {extended && <p>History</p>}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="logo" />
          {extended && <p>Settings</p>}
        </div>
      </div>
    </div>
  )
}

export default SideBar
