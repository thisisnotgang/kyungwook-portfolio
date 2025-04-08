import React from 'react';
import { Link } from 'react-router-dom';
import './Intro.css'; 

function Intro() {
  return (
    <div className="intro-container container">
      {/* None Title Section */}
      <section className="intro-content section-content">
        <div className="intro-top">
          <div className="intro-img">
            <img src="./src/assets/intro-img.jpg" />
          </div>
          <div className="intro-data">
            <h2 className="section-title">안녕하세요.<br/>이경욱입니다.</h2>
            <h3 className="section-subtitle">사업 기획/운영<span></span>사업계획서 작성 총괄<span></span>FE 개발자</h3>
            <h3 className="section-subtitle">창업 생태계를 직접 눈과 몸으로 경험하며,<br/>그 누구보다 기업의 니즈를 잘 파악할 수 있는 능력을 지녔습니다.</h3>
            <a href="">Contact Me<img src="./src/assets/intro-data-contact.svg" /></a>
          </div>
        </div>
        <div className="intro-scroll">
          <a href=""><img src="./src/assets/intro-scroll-mouse.svg" /><span>Scroll Down</span><img src="./src/assets/intro-scroll-arrow.svg" /></a>
        </div>
      </section>
    </div>
  );
}

export default Intro;