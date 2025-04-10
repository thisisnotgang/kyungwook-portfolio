import React from 'react';
import { Link } from 'react-router-dom';
import './Career.css';

// 이미지 파일 import
import careerImg from '../assets/career-img.jpg';
import downloadIcon from '../assets/career-data-download.svg';

function Career() {
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
            <p>대학 창업동아리부터 기업 형태로 발전하면서 창업 생태계를 직접 경험하였으며, 이를 통해 예비 창업자과 초기 창업기업이 정말로 필요한 부분이 어떤 것인지 잘 인지하고 있습니다.<br />
              이러한 경험을 바탕으로, 타 창업자들에게 많은 도움을 주고 싶습니다. 단순 기획자 또는 교육자의 입장이 아닌, 실제로 창업 생태계를 겪어 본 실무자로서 경험을 공유하고 싶습니다.</p>
            <div className='career-count'>
              <ul>
                <li>
                  <p>01 ~ 02</p>
                  <span>경력</span>
                </li>
                <li>
                  <p>10+</p>
                  <span>수행한<br />정부/지자체 지원사업 수</span>
                </li>
                <li>
                  <p>04+</p>
                  <span>기획/운영한<br />서비스 수</span>
                </li>
              </ul>
            </div>
            <a href="" download>Download CV<img src={downloadIcon} alt="Download" /></a>
          </div>
        </div>
        <div className="career-timeline">
          <div className="timeline-nav">
            <button className="timeline-work-nav">Work</button>
            <button className="timeline-edu-nav">Education</button>
          </div>

          <div className='timeline-chart timeline-work'>
            <ol>
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
          <div className='timeline-chart timeline-edu'>
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
        </div>
      </section>
    </div>
  );
}

export default Career;