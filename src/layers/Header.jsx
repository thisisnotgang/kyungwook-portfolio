import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

// 이미지 파일 import
import darkmodeImg from '../assets/header-darkmode-change.svg';
import brightmodeImg from '../assets/header-brightmode-change.svg';

function Header() {
  return (
    <header className="site-header">
      <div className="header-container">
        <div className="main-logo">
          <p>이 경 욱</p><span>LEE KYUNG-WOOK</span>
        </div>

        <div className="main-mode">
          <img src={darkmodeImg} alt="Darkmode" className="darkmode-change" />
          <img src={brightmodeImg} alt="Brightmode" className="brightmode-change" />
        </div>

        <nav className="main-nav">
          <ul>
            <li><Link to="/">INTRO</Link></li>
            <li><Link to="/">HISTORY</Link></li>
            <li><Link to="/">PORTFOLIO</Link></li>
            <li><Link to="/">GOV SUPPORT PROJECTS</Link></li>
            <li><Link to="/">SKILLS</Link></li>
            <li><Link to="/">AWARDS</Link></li>
            <li><Link to="/">MEDIA</Link></li>
            <li><Link to="/">LICENSE</Link></li>
            <li><Link to="/">CONTACT</Link></li>
          </ul>
        </nav>     
      </div>
    </header>
  );
}

export default Header;