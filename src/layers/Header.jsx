import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="site-header">
      <div className="header-container">
        <div className="main-logo">
          <p>이 경 욱</p><span>LEE KYUNG-WOOK</span>
        </div>

        <nav className="main-nav">
          <ul>
            <li><Link to="/">INTRO</Link></li>
            <li><Link to="/">HISTORY</Link></li>
            <li><Link to="/">SUPPORT MEASURE</Link></li>
            <li><Link to="/">SKILLS</Link></li>
            <li><Link to="/">AWARDS</Link></li>
            <li><Link to="/">PROJECTS</Link></li>
            <li><Link to="/">MEDIA</Link></li>
            <li><Link to="/">LICENSE</Link></li>
            <li><Link to="/">CONTACT</Link></li>
          </ul>
        </nav>

        <div className="main-mode">
          <img src="./src/assets/header-darkmode-change.svg" className="darkmode-change" />
          <img src="./src/assets/header-brightmode-change.svg" className="brightmode-change" />
        </div>
        
      </div>
    </header>
  );
}

export default Header;