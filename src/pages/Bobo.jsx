import React,  { useState, useEffect} from 'react';
import boboImg from "../assets/images/bobo-in-bed.jpg";
import "./Bobo.css";
// import introMd from "../data/bobo/intro.md";

function Bobo() {
  return(
    <> 
      <div className="bobo-container">
        <div className="bobo-description">
          <h1 className="bobo-title"> Meet <span>Bobo</span> 🐾 </h1> 
          <p className="bobo-intro"> Hello! I’m <strong>Bobo Wang ~ Su</strong> — the Chief Productivity Officer, professional sleeper, and unofficial mascot of this portfolio. </p>
          <img src={boboImg} alt="Bobo in bed" className="bobo-image" />
          
          <h2 className="section-title">Fun Facts</h2> 
          <ul className="bobo-facts"> 
            <li>🐾 Loves sleeping in cozy blankets and warm laptops.</li>
            <li>🐾 Expert at interrupting Zoom meetings with surprise walk-ins.</li>
            <li>🐾 Provides moral support when tests fail.</li>
            <li>🐾 Thinks every bug is a personal attack on Shu.</li>
            <li>🐾 Inspiration behind the StudyCat Extension.</li>
          </ul>
        </div>
        <div className='bobos-corner'>
          <button>Check my Album</button>
          <button>See my Stories</button>
        </div>

      </div>
    </>
  )
}
export default Bobo;