import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
const Main = () => {
  return (
    <div className='main'>
      <div className="nav">
        <p>Gemini</p>
        <img src ={assets.user_icon} alt=" "/>
      </div>
      <div className="main-container">
        <div className="greet">
          <p><span>Hello , Ayush.</span></p>
          <p>How can I Help You Today?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Suggest beautiful place to see on an upcoming road trip</p>
            <img src ={assets.compass_icon} alt=''/>
          </div>
          <div className="card">
            <p>Briefly Summarize this concept : Urban Planning</p>
            <img src ={assets.bulb_icon} alt=''/>
          </div>
          <div className="card">
            <p>Brainstrom team bonding activities for our work retreat</p>
            <img src ={assets.message_icon} alt=''/>
          </div>
          <div className="card">
            <p>Improve the Readability of the following Code</p>
            <img src ={assets.code_icon} alt=''/>
          </div>
        </div>


        <div className="main-bottom">
          <div className="search-box">
            <input type="text" placeholder="Type your Prompt here..." />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img src={assets.send_icon} alt="" />
            </div>
          </div>
          <p className='bottom-info'>Disclaimer : I’m still learning, and I may occasionally be incorrect.</p>
        </div>
      </div>
    </div>
  )
}

export default Main
