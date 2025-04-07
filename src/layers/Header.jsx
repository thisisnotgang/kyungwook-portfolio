import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="site-header">
      <div className="header-container">   
        <nav className="main-nav">
          <ul>
            <li><Link to="/">메인</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;