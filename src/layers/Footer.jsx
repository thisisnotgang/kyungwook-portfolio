import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>이경욱</h3>
            <p>Front-end Developer</p>
            <p>Republic of Korea, Busan</p>
          </div>
          
          <div className="footer-links">
            <h3>링크</h3>
            <ul>
              <li><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="mailto:thisisnotgang" target="_blank" rel="noopener noreferrer">Email</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} 이경욱. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;