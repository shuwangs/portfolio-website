import { Link } from "react-router-dom";
import boboImg from "../assets/images/bobo-in-bed.jpg";
import "./Bobo.css";
import { FaPaw, FaCamera, FaVideo, FaHeart } from "react-icons/fa";

function Bobo() {
  return(
    <div className="bobo-page-container">
    {/* 1. 顶部主要介绍卡片 */}
      <div className="bobo-profile-card">
        
        {/* 左侧：Bobo 的“职业照” */}
        <div className="bobo-image-wrapper">
          <img src={boboImg} alt="Bobo the Chief Productivity Officer" className="bobo-photo" />
          <div className="bobo-status">Online (Sleeping)</div>
        </div>

        {/* 右侧：详细介绍 */}
        <div className="bobo-details">
          <header className="bobo-header">
            <p className="bobo-eyebrow">Behind the scenes</p>
            <h1 className="bobo-title">Meet <span>Bobo</span>.</h1>
            <h2 className="bobo-subtitle">Chief Productivity Officer (CPO)</h2>
          </header>

          <p className="bobo-bio">
            Hello! I’m <strong>Bobo Wang-Su</strong>. I specialize in keyboard ergonomics testing 
            (by sitting on them) and ensuring Shu takes mandatory breaks.
          </p>

          <div className="bobo-stats">
            <h3 className="bobo-section-label"><FaHeart aria-hidden="true" /> Skills & Fun Facts</h3>
            <ul className="bobo-facts-list">
              <li>
                <span className="icon"><FaPaw aria-hidden="true" /></span>
                <span>Expert at interrupting Zoom meetings with surprise walk-ins.</span>
              </li>
              <li>
                <span className="icon"><FaPaw aria-hidden="true" /></span>
                <span>Loves sleeping in cozy blankets and warm laptops.</span>
              </li>
              <li>
                <span className="icon"><FaPaw aria-hidden="true" /></span>
                <span>Provides moral support (purring) when tests fail.</span>
              </li>
              <li>
                <span className="icon"><FaPaw aria-hidden="true" /></span>
                <span>The true inspiration behind the <strong>StudyCat Extension</strong>.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 2. 底部功能区：相册入口 */}
      <div className='bobo-actions'>
        <p>Want to see more of my daily work?</p>
        <div className="bobo-action-buttons">
          <Link to="/bobo/album" className="bobo-btn bobo-btn-primary">
            <FaCamera aria-hidden="true" /> Check my Album
          </Link>
          <button className="bobo-btn bobo-btn-outline">
            <FaVideo aria-hidden="true" /> See my Stories
          </button>
        </div>
      </div>

    </div>
  )
}
export default Bobo;