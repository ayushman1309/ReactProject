import React, { useContext, useState } from "react";
import "./Sidebarr.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

const SideBar = () => {
  const [extended, setExtended] = useState(false);

  const { previousPrompt, setRecentPrompt, setShowResults, setResultData } =
    useContext(Context);

  const loadPrompt = (item) => {
    // restore old chat
    setRecentPrompt(item.prompt);
    setShowResults(true);
    setResultData(item.response);
  };

  const newChat = () => {
    setRecentPrompt("");
    setResultData("");
    setShowResults(false);
  };

  return (
    <div className="sidebar">
      <div className="top">
        <img
          onClick={() => setExtended((prev) => !prev)}
          className="menu"
          src={assets.menu_icon}
          alt="menu"
        />

        <div className="new-chat" onClick={newChat}>
          <img className="chat-icon" src={assets.plus_icon} alt="new chat" />
          {extended && <p>New Chat</p>}
        </div>

        {extended && (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {previousPrompt.map((item, index) => (
              <div
                key={index}
                onClick={() => loadPrompt(item)}
                className="recent-entry"
              >
                <img src={assets.message_icon} alt="msg" />
                <p>{item.prompt.slice(0, 18)} ...</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="help" />
          {extended && <p>Help</p>}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="history" />
          {extended && <p>History</p>}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="settings" />
          {extended && <p>Settings</p>}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
