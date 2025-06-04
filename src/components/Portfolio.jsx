import React from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css'; 

// 이미지 파일 import
import introImg from '../assets/intro-img.jpg';
import contactIcon from '../assets/intro-data-contact.svg';
import scrollMouseIcon from '../assets/intro-scroll-mouse.svg';
import scrollArrowIcon from '../assets/intro-scroll-arrow.svg';

function Portfolio() {
  return (
    <div className="portfolio-container container">
      <h2 className="section-title">PORTFOLIO</h2>
      <h3 className="section-subtitle">진행했던 프로젝트들입니다.</h3>
        <section className="portfolio-content section-content">
            <div className="portfolio-wrapper">
                <ul className="portfolio-header">
                    <li className="portfolio-planning"><p>기획&#183;운영</p><span>PLANNING&#183;OPERATING</span></li>
                    <li className="portfolio-development"><p>개발</p><span>DEVELOPMENT</span></li>
                    <li className="portfolio-evaluation"><p>컨설팅&#183;평가&#183;심사</p><span>CONSULTING&#183;EVALUATION</span></li>
                </ul>
                <div className="portfolio-category">
                  <div className="portfolio-planning-list">
                    <table>
                      <thead>
                        <tr>
                          <th>연번</th>
                          <th>이미지</th>
                          <th>서비스명</th>
                          <th>역할</th>
                          <th>운영일자</th>
                          <th>개발방식</th>
                          <th>현황</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr onClick="location.href='http://www.daum.net/'">
                          <td>1</td>
                          <td><img src="src/assets/seolgyejang.png" /></td>
                          <td>설계장</td>
                          <td>PM, 기획&#183;운영총괄<br/>웹디자인, CS</td>
                          <td>2023.06.<br/>~ 진행중</td>
                          <td>개발업체 협력<br/>1, 2차 분할 개발</td>
                          <td>앱스토어/구글플레이 출시<br/>보수 개발로 인한 운영 일시 중단</td>
                        </tr>
                        <tr onClick="location.href='http://www.daum.net/'">
                          <td>1</td>
                          <td><img src="src/assets/seolgyejang.png" /></td>
                          <td>설계장</td>
                          <td>PM, 기획&#183;운영총괄<br/>웹디자인, CS</td>
                          <td>2023.06.<br/>~ 진행중</td>
                          <td>개발업체 협력<br/>1, 2차 분할 개발</td>
                          <td>앱스토어/구글플레이 출시<br/>보수 개발로 인한 운영 일시 중단</td>
                        </tr>
                        <tr onClick="location.href='http://www.daum.net/'">
                          <td>1</td>
                          <td><img src="src/assets/seolgyejang.png" /></td>
                          <td>설계장</td>
                          <td>PM, 기획&#183;운영총괄<br/>웹디자인, CS</td>
                          <td>2023.06.<br/>~ 진행중</td>
                          <td>개발업체 협력<br/>1, 2차 분할 개발</td>
                          <td>앱스토어/구글플레이 출시<br/>보수 개발로 인한 운영 일시 중단</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="portfolio-development-list"></div>
                  <div className="portfolio-evaluation-list"></div>
                </div>
            </div>
        </section>
    </div>
  );
}

export default Portfolio;