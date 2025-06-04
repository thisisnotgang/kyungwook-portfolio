import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Career.css';

// 이미지 파일 import
import careerImg from '../assets/career-img.jpg';
import downloadIcon from '../assets/career-data-download.svg';

function Career() {
  // 활성 탭 상태 관리 (초기값은 'work')
  const [activeTab, setActiveTab] = useState('work');
  
  // 드래그 스크롤 관련 상태
  const timelineRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // 탭 전환 함수
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  // 마우스 드래그 시작
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - timelineRef.current.offsetLeft);
    setScrollLeft(timelineRef.current.scrollLeft);
    timelineRef.current.style.cursor = 'grabbing';
  };

  // 마우스 드래그 종료
  const handleMouseUp = () => {
    setIsDragging(false);
    if (timelineRef.current) {
      timelineRef.current.style.cursor = 'grab';
    }
  };

  // 마우스 드래그 중
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - timelineRef.current.offsetLeft;
    const walk = (x - startX) * 2; // 스크롤 속도 조절
    timelineRef.current.scrollLeft = scrollLeft - walk;
  };

  // 마우스가 컨테이너를 벗어날 때
  const handleMouseLeave = () => {
    setIsDragging(false);
    if (timelineRef.current) {
      timelineRef.current.style.cursor = 'grab';
    }
  };

  return (
    <div className="career-container container">
      <h2 className="section-title">CAREER</h2>
      <h3 className="section-subtitle">겪어온 커리어 여정입니다.</h3>
      <section className="career-content section-content">
        <div className='career-top'>
          <div className="career-img">
            <img src={careerImg} alt="Career" />
          </div>
          <div className="career-data">
          <p>&nbsp;&nbsp;대학 창업동아리부터 이를 실제 기업 형태까지 발전시키며 창업 생태계를 직접 경험하였습니다. 이 과정에서 스타트업의 니즈가 무엇인지 몸소 체험하며 깊이 이해하게 되었습니다.<br />
          &nbsp;&nbsp;현재는 직접 창업보다는 축적된 경험을 바탕으로 스타트업을 돕는 것에 목표를 두고 있습니다. 창업 컨설턴트 및 멘토를 지향하며, 그 과정의 일환으로 기업과 기관의 창업/취업/직무 등의 역량강화 콘텐츠를 기반으로 교육과 캠프를 진행하는 회사에서 교육운영팀장으로 재직 중입니다.</p>
            <div className='career-count'>
              <ul>
                <li>
                  <p>02+</p>
                  <span>경력</span>
                </li>
                <li>
                  <p>10+</p>
                  <span>수행 정부/지자체 지원사업</span>
                </li>
                <li>
                  <p>04+</p>
                  <span>기획/운영한 서비스</span>
                </li>
              </ul>
            </div>
            <a href="" download>Download CV<img src={downloadIcon} alt="Download" /></a>
          </div>
        </div>
        <div className="career-timeline">
          <div className="timeline-nav">
            <button 
              className={`timeline-work-nav ${activeTab === 'work' ? 'active' : ''}`} 
              onClick={() => handleTabChange('work')}
            >
              Work
            </button>
            <button 
              className={`timeline-edu-nav ${activeTab === 'edu' ? 'active' : ''}`}
              onClick={() => handleTabChange('edu')}
            >
              Education
            </button>
          </div>
          
          {/* Work 탭 - 조건부 렌더링으로 변경 */}
          {activeTab === 'work' && (
            <div 
              className='timeline-chart timeline-work'
              ref={timelineRef}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ cursor: 'grab' }}
            >
              <ol>
                <li>
                  <div>
                    <p className="timeline-date">2025.04.14. ~ </p>
                    <p className="timeline-title">(주)워너비즈<span>재직중</span></p>
                    <p className="timeline-subtitle"><strong>교육운영팀장 | 창업/취업/직무 등의 교육 및 캠프 기획&운영 총괄</strong></p>
                    <p className="timeline-subtitle">고교 및 대학 취창업 교육과 캠프의 프로그램 기획 및 운영 총괄</p>
                    <p className="timeline-subtitle">기업 및 기관의 역량 강화 교육 및 워크숍 프로그램 기획 및 운영 총괄</p>
                    <p className="timeline-subtitle">자사 블로그 및 인스타그램 콘텐츠 기획/디자인/관리 총괄</p>
                  </div>
                </li>
                <li>
                  <div>
                    <p className="timeline-date">2024.08.31. ~ 2024.12.07.</p>
                    <p className="timeline-title">(주)코들링<span>청년창업사관교 지원사업 종료로 인한 퇴사 처리</span></p>
                    <p className="timeline-subtitle"><strong>사업계획서 작성 총괄 | 사업 아이템 기획 | 마케팅 | FE 개발자 | COO 및 법인 감사</strong></p>
                    <p className="timeline-subtitle">패션 쇼핑 중개 플랫폼 '설계장' 운영/개발에 대한 기획 총괄 담당</p>
                    <p className="timeline-subtitle">정부/지자체 지원사업 사업계획서 작성 총괄 담당</p>
                    <p className="timeline-subtitle">패션 쇼핑 중개 플랫폼 '설계장' 운영 및 CS 담당</p>
                    <p className="timeline-subtitle">자사 의류 제작 투표 플랫폼 VOTETO, 자사 외주업 업체 unideefix 웹 총괄 개발 담당</p>
                  </div>
                </li>
                <li>
                  <div>
                    <p className="timeline-date">2024.04.18. ~ 2024.08.31.</p>
                    <p className="timeline-title">코들링(CODLING)<span>법인 기업으로의 양도양수로 인한 퇴사 처리</span></p>
                    <p className="timeline-subtitle"><strong>사업계획서 작성 총괄 | 사업 아이템 기획 | 마케팅 | 협력체 간 PM | COO</strong></p>
                    <p className="timeline-subtitle">패션 쇼핑 중개 플랫폼 '설계장' 운영/개발에 대한 기획 총괄 담당</p>
                    <p className="timeline-subtitle">정부/지자체 지원사업 사업계획서 작성 총괄 담당</p>
                    <p className="timeline-subtitle">2차 개발 협력 업체(하이퍼리티)와의 소통 담당 PM 수행</p>
                  </div>
                </li>
                <li>
                  <div>
                    <p className="timeline-date">2023.06.12. ~ 2024.01.01.</p>
                    <p className="timeline-title">코들링(CODLING)<span>창업중심대학 지원사업 종료로 인한 퇴사 처리</span></p>
                    <p className="timeline-subtitle"><strong>사업계획서 작성 총괄 | 사업 아이템 기획 | 협력체 간 PM | 웹 디자이너 | COO</strong></p>
                    <p className="timeline-subtitle">2021.03.부터 진행한 교내 창업동아리 '스타일매치'의 기업 형태 전환</p>
                    <p className="timeline-subtitle">패션 쇼핑 중개 플랫폼 '설계장' 운영/개발에 대한 기획 총괄 담당</p>
                    <p className="timeline-subtitle">정부/지자체 지원사업 사업계획서 작성 총괄 담당</p>
                    <p className="timeline-subtitle">'설계장' 관리자 어드민 페이지 2종 웹 디자인(FIGMA) 시행</p>
                    <p className="timeline-subtitle">1차 개발 협력 업체(티피엘엔디)와의 소통 담당 PM 수행</p>
                  </div>
                </li>
                <li>
                  <div>
                    <p className="timeline-date">2021.12.22. ~ 2022.02.05.</p>
                    <p className="timeline-title">디엔에프어패럴<span>6주 단기 인턴 : 자사 내 '움클래스' 근무</span></p>
                    <p className="timeline-subtitle"><strong>웹앱 React FE 개발 인턴</strong></p>
                    <p className="timeline-subtitle">원데이클래스 체험 예약 플랫폼 '움클래스' 프론트엔드 개발</p>
                    <p className="timeline-subtitle">입점 관리자 페이지 대시보드, ID/PW 찾기 폼, 고객 예약 리스트 카드 등 개발</p>
                  </div>
                </li>
                <li></li>
              </ol>
            </div>
          )}
          
          {/* Education 탭 - 조건부 렌더링으로 변경 */}
          {activeTab === 'edu' && (
            <div 
              className='timeline-chart timeline-edu'
              ref={timelineRef}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ cursor: 'grab' }}
            >
              <ol>
                <li>
                  <div> 
                    <p className="timeline-date">2023.02.</p>
                    <p className="timeline-title">동서대학교 컴퓨터공학과 졸업</p>
                    <p className="timeline-subtitle">3.80/4.50</p>
                  </div>
                </li>
                <li>
                  <div> 
                    <p className="timeline-date">2022.11.</p>
                    <p className="timeline-title">컴퓨터공학 졸업 작품 및 논문 제출</p>
                    <p className="timeline-subtitle">팀장 역임, 웹 개발 및 논문 작성 총괄</p>
                    <p className="timeline-subtitle">환경 문제 인식을 개선하는 웹 반응형 플랫폼<br />"퓨리바일(FuryByIll)" 졸업작품 구현 및 논문 작성</p>
                  </div>
                </li>
                <li>
                  <div> 
                    <p className="timeline-date">2019.10.</p>
                    <p className="timeline-title">군 제대</p>
                    <p className="timeline-subtitle">육군 병장 만기 전역 : 육군본부 중앙보충대대 소속</p>
                  </div>
                </li>
                <li>
                  <div> 
                    <p className="timeline-date">2018.02.</p>
                    <p className="timeline-title">군 입대</p>
                  </div>
                </li>
                <li>
                  <div> 
                    <p className="timeline-date">2017.03.</p>
                    <p className="timeline-title">동서대학교 컴퓨터공학과 입학</p>
                  </div>
                </li>
                <li>
                  <div> 
                    <p className="timeline-date">2017.02.</p>
                    <p className="timeline-title">부산광역시 성도고등학교 졸업</p>
                    <p className="timeline-subtitle">이과계열</p>
                  </div>
                </li>
                <li></li>
              </ol>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Career;