import React,  { useState, useEffect} from 'react';
import boboImg from "../assets/images/bobo-in-bed.jpg";
import "./Bobo.css";
import { FaPaw, FaCamera, FaVideo, FaHeart } from "react-icons/fa";
// import introMd from "../data/bobo/intro.md";

function Bobo() {
  return(
    <div className="bobo-page-container">
    {/* 1. 顶部主要介绍卡片 */}
      <div className="bobo-profile-card">
        
        {/* 左侧：Bobo 的“职业照” */}
        <div className="bobo-image-wrapper">
          <img src={boboImg} alt="Bobo the Chief Productivity Officer" className="bobo-photo" />
          <div className="status-badge">🟢 Online (Sleeping)</div>
        </div>

        {/* 右侧：详细介绍 */}
        <div className="bobo-details">
          <header className="bobo-header">
            <h1 className="bobo-title">Meet <span className="highlight">Bobo</span> 🐾</h1>
            <h2 className="bobo-subtitle">Chief Productivity Officer (CPO)</h2>
          </header>

          <p className="bobo-bio">
            Hello! I’m <strong>Bobo Wang-Su</strong>. I specialize in keyboard ergonomics testing 
            (by sitting on them) and ensuring Shu takes mandatory breaks.
          </p>

          <div className="bobo-stats">
            <h3 className="section-label"><FaHeart /> Skills & Fun Facts</h3>
            <ul className="bobo-facts-list">
              <li>
                <span className="icon"><FaPaw /></span>
                <span>Expert at interrupting Zoom meetings with surprise walk-ins.</span>
              </li>
              <li>
                <span className="icon"><FaPaw /></span>
                <span>Loves sleeping in cozy blankets and warm laptops.</span>
              </li>
              <li>
                <span className="icon"><FaPaw /></span>
                <span>Provides moral support (purring) when tests fail.</span>
              </li>
              <li>
                <span className="icon"><FaPaw /></span>
                <span>The true inspiration behind the <strong>StudyCat Extension</strong>.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 2. 底部功能区：相册入口 */}
      <div className='bobo-actions'>
        <p>Want to see more of my daily work?</p>
        <div className="action-buttons">
          <button className="btn btn-primary">
            <FaCamera /> Check my Album
          </button>
          <button className="btn btn-outline">
            <FaVideo /> See my Stories
          </button>
        </div>
      </div>

    </div>
  )
}
export default Bobo;