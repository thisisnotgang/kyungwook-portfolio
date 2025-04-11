import React from 'react';
import { Link } from 'react-router-dom';
import './GovSupportProjects.css';

function Supportmeasure() {
  return (
    <div className="govsupportprojects-container container">
      <h2 className="section-title">Support Measure</h2>
      <h3 className="section-subtitle">수행한 정부 및 지자체 지원사업입니다.</h3>
      <section className="govsupportprojects-content section-content">
        <div className="govsupportprojects-list-wrapper">
          <div className="govsupportprojects-list-paging">
            <p className="paging-now"></p><span>/</span><p className="paging-total"></p>
          </div>
          <ul className="govsupportprojects-list-slide">
            <li>
              <img className="govsupportprojects-list-img" src="" />
              <div>
                <h3 className="govsupportprojects-list-header">NVIDIA Inception 파트너 기업 선정</h3>
                <p className="govsupportprojects-list-date">2024.08. ~ 진행중</p>
                <p className="govsupportprojects-list-content">
                  &#183;NVIDIA 주관<br />
                  &#183;NVIDIA 주관 교육, 기술 포럼, 클라우드 크레딧, 네트워킹 등의 다양한 지원 수혜<br />
                </p>
                <p className="govsupportprojects-list-role">협력 기업 신청 총괄 담당</p>
              </div>
            </li>
            <li>
              <img className="govsupportprojects-list-img" src="" />
              <div>
                <h3 className="govsupportprojects-list-header">학생 창업유망팀 300 성장트랙 선정</h3>
                <p className="govsupportprojects-list-date">2024.07. ~ 2024.11.</p>
                <p className="govsupportprojects-list-content">
                  &#183;교육부 한국청년기업가정신재단 주관<br />
                  &#183;모의투자대회, 스타트업 대상 교육 등 진행<br />
                  &#183;선정 팀 대상 IR피칭 대회 참가 지원 수혜
                </p>
                <p className="govsupportprojects-list-role">사업계획서 총괄 작성 담당</p>
              </div>
            </li>
            <li>
              <img className="govsupportprojects-list-img" src="" />
              <div>
                <h3 className="govsupportprojects-list-header">청년 사회적경제기업 마중물 지원사업 선정</h3>
                <p className="govsupportprojects-list-date">2024.07. ~ 2024.12.</p>
                <p className="govsupportprojects-list-content">
                  &#183;부산경제진흥원 주관<br />
                  &#183;2,000,000원 수혜<br />
                  &#183;부산 예비사회적경제기업 인/지정으로의 스텝업 과정 지원<br />
                  &#183;부산 지역 사회 기여를 위한 전문위원의 컨설팅 진행
                </p>
                <p className="govsupportprojects-list-role">사업계획서 총괄 작성 담당</p>
              </div>
            </li>
            <li>
              <img className="govsupportprojects-list-img" src="" />
              <div>
                <h3 className="govsupportprojects-list-header">하나소셜벤처 유니버시티 선정</h3>
                <p className="govsupportprojects-list-date">2024.07. ~ 2024.08.</p>
                <p className="govsupportprojects-list-content">
                  &#183;하나금융그룹 국립한국해양대학교 주관<br />
                  &#183;실무 중심 창업 교육 진행<br />
                  &#183;권역별 최종성과공유회 진행
                </p>
                <p className="govsupportprojects-list-role">사업계획서 총괄 작성 담당</p>
              </div>
            </li>
            <li>
              <img className="govsupportprojects-list-img" src="" />
              <div>
                <h3 className="govsupportprojects-list-header">유라시아플랫폼 액셀러레이팅 All Station 5기 선정</h3>
                <p className="govsupportprojects-list-date">2024.04. ~ 2024.07.</p>
                <p className="govsupportprojects-list-content">
                  &#183;(주)아이파트너즈 주관<br />
                  &#183;부산 지역 사업자의 아이디어 고도화 교육 및 네트워킹 지원
                </p>
                <p className="govsupportprojects-list-role">사업계획서 총괄 작성 담당</p>
              </div>
            </li>
            <li>
              <img className="govsupportprojects-list-img" src="" />
              <div>
                <h3 className="govsupportprojects-list-header">클라우드기반 SW개발환경 지원사업 선정</h3>
                <p className="govsupportprojects-list-date">2024.04. ~ 2024.12.</p>
                <p className="govsupportprojects-list-content">
                  &#183;과학기술정보통신부 클라우드혁신센터<br />
                  &#183;10,000,000원 수혜<br />
                  &#183;스타트업 대상 SW개발 클라우드 크레딧 및 금액 지원<br />
                  &#183;스타트업 아이템의 SaaS 전환 환경 지원
                </p>
                {/* <p className="govsupportprojects-list-role"></p> */}
              </div>
            </li>
            <li>
              <img src="govsupportprojects-list-img" />
              <div>
                <h3 className="govsupportprojects-list-header">창업성공패키지 청년창업사관학교 선정</h3>
                <p className="govsupportprojects-list-date">2024.04. ~ 2024.11.</p>
                <p className="govsupportprojects-list-content">
                  &#183;중소벤처기업부 경남청년창업사관학교 주관<br />
                  &#183;<br />
                  &#183;<br />
                  &#183;
                </p>
                <p className="govsupportprojects-list-role">사업계획서 총괄 작성 담당</p>
              </div>
            </li>
            <li>
              <img src="govsupportprojects-list-img" />
              <div>
                <h3 className="govsupportprojects-list-header">부산정보산업진흥원 신규 입주 선정</h3>
                <p className="govsupportprojects-list-date">2024.04. ~ 2026.12.</p>
                <p className="govsupportprojects-list-content">
                  &#183;부산정보통신연구원 주관<br />
                  &#183;<br />
                  &#183;<br />
                  &#183;
                </p>
                {/* <p className="govsupportprojects-list-role"></p> */}
              </div>
            </li>
            <li>
              <img className="govsupportprojects-list-img" src="" />
              <div>
                <h3 className="govsupportprojects-list-header">20023년 하반기 IBK창공 UNIST캠프 3기 선정</h3>
                <p className="govsupportprojects-list-date">2023.07. ~ 2023.12.</p>
                <p className="govsupportprojects-list-content">
                  &#183;IBK창공 부산 주관<br />
                  &#183;<br />
                  &#183;<br />
                  &#183;
                </p>
                {/* <p className="govsupportprojects-list-role"></p> */}
              </div>
            </li>
            <li>
              <img className="govsupportprojects-list-img" src="" />
              <div>
                <h3 className="govsupportprojects-list-header">학생 창업유망팀 300 성장트랙 선정</h3>
                <p className="govsupportprojects-list-date">2023.07. ~ 2023.11.</p>
                <p className="govsupportprojects-list-content">
                  &#183;교육부 한국청년기업가정신재단 주관<br />
                  &#183;모의투자대회, 스타트업 대상 교육 등 진행<br />
                  &#183;선정 팀 대상 IR피칭 대회 참가 지원 수혜
                </p>
                {/* <p className="govsupportprojects-list-role"></p> */}
              </div>
            </li>
            <li>
              <img className="govsupportprojects-list-img" src="" />
              <div>
                <h3 className="govsupportprojects-list-header">창업중심대학 예비창업자 선정</h3>
                <p className="govsupportprojects-list-date">2023.04. ~ 2023.12.</p>
                <p className="govsupportprojects-list-content">
                  &#183;중소벤처기업부 경상국립대학교 주관<br />
                  &#183;54,5000,000원 수혜<br />
                  &#183;<br />
                  &#183;
                </p>
                <p className="govsupportprojects-list-role">사업계획서 총괄 작성 담당</p>
              </div>
            </li>
            <li>
              <img className="govsupportprojects-list-img" src="" />
              <div>
                <h3 className="govsupportprojects-list-header"></h3>
                <p className="govsupportprojects-list-date">2024.08. ~ 진행중</p>
                <p className="govsupportprojects-list-content">
                  &#183;<br />
                  &#183;<br />
                  &#183;<br />
                  &#183;
                </p>
                <p className="govsupportprojects-list-role"></p>
              </div>
            </li>
            <li>
              <img className="govsupportprojects-list-img" src="" />
              <div>
                <h3 className="govsupportprojects-list-header">학생 창업유망팀 300 성장트랙 선정</h3>
                <p className="govsupportprojects-list-date">2022.07. ~ 2022.11.</p>
                <p className="govsupportprojects-list-content">
                  &#183;교육부 한국청년기업가정신재단 주관<br />
                  &#183;창업배틀 골드리그 시즌2, 3 200팀 중 1위 달성<br />
                  &#183;수원컨벤션 센터 전시 참가 기업 선정<br />
                  &#183;모의투자대회, 스타트업 대상 교육 등 진행<br />
                  &#183;선정 팀 대상 IR피칭 대회 참가 지원 수혜
                </p>
                {/* <p className="govsupportprojects-list-role"></p> */}
              </div>
            </li>
            <li>
              <img className="govsupportprojects-list-img" src="" />
              <div>
                <h3 className="govsupportprojects-list-header">부산 콘텐츠코리아랩 입주 선정</h3>
                <p className="govsupportprojects-list-date">2022.02. ~ 2024.02.</p>
                <p className="govsupportprojects-list-content">
                  &#183;부산정보산업진흥원 주관<br />
                  &#183;<br />
                  &#183;<br />
                  &#183;
                </p>
                <p className="govsupportprojects-list-role"></p>
              </div>
            </li>
            <li>
              <img className="govsupportprojects-list-img" src="" />
              <div>
                <h3 className="govsupportprojects-list-header">생애최초 청년창업 지원사업 선정</h3>
                <p className="govsupportprojects-list-date">2021.06. ~ 2024.12.</p>
                <p className="govsupportprojects-list-content">
                  &#183;중소벤처기업부 인천대학교 주관<br />
                  &#183;6,500,000원 수혜<br />
                  &#183;<br />
                  &#183;
                </p>
                <p className="govsupportprojects-list-role"></p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Supportmeasure;