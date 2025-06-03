import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './GovSupportProjects.css';

function Supportmeasure() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(1); // 한 페이지에 보여줄 항목 수
  const sliderRef = useRef(null);
  
  // 터치 스와이프 관련 상태
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  
  // 최소 스와이프 거리
  const minSwipeDistance = 50;

  // 지원사업 데이터 배열
  const supportProjects = [
    {
      id: 1,
      img: "",
      header: "NVIDIA Inception 파트너 기업 선정",
      date: "2024.08. ~ 진행중",
      content: [
        "NVIDIA 주관",
        "NVIDIA 주관 교육, 기술 포럼, 클라우드 크레딧, 네트워킹 등의 다양한 지원 수혜"
      ],
      role: "협력 기업 신청 총괄 담당"
    },
    {
      id: 2,
      img: "",
      header: "학생 창업유망팀 300 성장트랙 선정",
      date: "2024.07. ~ 2024.11.",
      content: [
        "교육부 한국청년기업가정신재단 주관",
        "모의투자대회, 스타트업 대상 교육 등 진행",
        "선정 팀 대상 IR피칭 대회 참가 지원 수혜"
      ],
      role: "사업계획서 총괄 작성 담당"
    },
    {
      id: 3,
      img: "",
      header: "청년 사회적경제기업 마중물 지원사업 선정",
      date: "2024.07. ~ 2024.12.",
      content: [
        "부산경제진흥원 주관",
        "2,000,000원 수혜",
        "부산 예비사회적경제기업 인/지정으로의 스텝업 과정 지원",
        "부산 지역 사회 기여를 위한 전문위원의 컨설팅 진행"
      ],
      role: "사업계획서 총괄 작성 담당"
    },
    {
      id: 4,
      img: "",
      header: "하나소셜벤처 유니버시티 선정",
      date: "2024.07. ~ 2024.08.",
      content: [
        "하나금융그룹 국립한국해양대학교 주관",
        "실무 중심 창업 교육 진행",
        "권역별 최종성과공유회 진행"
      ],
      role: "사업계획서 총괄 작성 담당"
    },
    {
      id: 5,
      img: "",
      header: "유라시아플랫폼 액셀러레이팅 All Station 5기 선정",
      date: "2024.04. ~ 2024.07.",
      content: [
        "(주)아이파트너즈 주관",
        "부산 지역 사업자의 아이디어 고도화 교육 및 네트워킹 지원"
      ],
      role: "사업계획서 총괄 작성 담당"
    },
    {
      id: 6,
      img: "",
      header: "클라우드기반 SW개발환경 지원사업 선정",
      date: "2024.04. ~ 2024.12.",
      content: [
        "과학기술정보통신부 클라우드혁신센터",
        "10,000,000원 수혜",
        "스타트업 대상 SW개발 클라우드 크레딧 및 금액 지원",
        "스타트업 아이템의 SaaS 전환 환경 지원"
      ],
      role: ""
    },
    {
      id: 7,
      img: "",
      header: "창업성공패키지 청년창업사관학교 선정",
      date: "2024.04. ~ 2024.11.",
      content: [
        "중소벤처기업부 경남청년창업사관학교 주관",
        "",
        "",
        ""
      ],
      role: "사업계획서 총괄 작성 담당"
    },
    {
      id: 8,
      img: "",
      header: "부산정보산업진흥원 신규 입주 선정",
      date: "2024.04. ~ 2026.12.",
      content: [
        "부산정보통신연구원 주관",
        "",
        "",
        ""
      ],
      role: ""
    },
    {
      id: 9,
      img: "",
      header: "2023년 하반기 IBK창공 UNIST캠프 3기 선정",
      date: "2023.07. ~ 2023.12.",
      content: [
        "IBK창공 부산 주관",
        "",
        "",
        ""
      ],
      role: ""
    },
    {
      id: 10,
      img: "",
      header: "학생 창업유망팀 300 성장트랙 선정",
      date: "2023.07. ~ 2023.11.",
      content: [
        "교육부 한국청년기업가정신재단 주관",
        "모의투자대회, 스타트업 대상 교육 등 진행",
        "선정 팀 대상 IR피칭 대회 참가 지원 수혜"
      ],
      role: ""
    },
    {
      id: 11,
      img: "",
      header: "창업중심대학 예비창업자 선정",
      date: "2023.04. ~ 2023.12.",
      content: [
        "중소벤처기업부 경상국립대학교 주관",
        "54,500,000원 수혜",
        "",
        ""
      ],
      role: "사업계획서 총괄 작성 담당"
    },
    {
      id: 12,
      img: "",
      header: "학생 창업유망팀 300 성장트랙 선정",
      date: "2022.07. ~ 2022.11.",
      content: [
        "교육부 한국청년기업가정신재단 주관",
        "창업배틀 골드리그 시즌2, 3 200팀 중 1위 달성",
        "수원컨벤션 센터 전시 참가 기업 선정",
        "모의투자대회, 스타트업 대상 교육 등 진행",
        "선정 팀 대상 IR피칭 대회 참가 지원 수혜"
      ],
      role: ""
    },
    {
      id: 13,
      img: "",
      header: "부산 콘텐츠코리아랩 입주 선정",
      date: "2022.02. ~ 2024.02.",
      content: [
        "부산정보산업진흥원 주관",
        "",
        "",
        ""
      ],
      role: ""
    },
    {
      id: 14,
      img: "",
      header: "생애최초 청년창업 지원사업 선정",
      date: "2021.06. ~ 2024.12.",
      content: [
        "중소벤처기업부 인천대학교 주관",
        "6,500,000원 수혜",
        "",
        ""
      ],
      role: ""
    }
  ];

  // 빈 항목 제거 (header가 비어있는 항목)
  const filteredProjects = supportProjects.filter(project => project.header.trim() !== '');
  
  // 전체 페이지 수 계산
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  
  // 현재 페이지의 항목들 가져오기
  const getCurrentPageItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredProjects.slice(startIndex, endIndex);
  };

  // 이전 페이지로 이동
  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // 다음 페이지로 이동
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // 특정 페이지로 이동
  const goToPage = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  // 터치 시작 이벤트
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  // 터치 이동 이벤트
  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  // 터치 종료 이벤트
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && currentPage < totalPages) {
      goToNextPage();
    }
    if (isRightSwipe && currentPage > 1) {
      goToPrevPage();
    }
  };

  return (
    <div className="govsupportprojects-container container">
      <h2 className="section-title">GOV SUPPORT PROJECTS</h2>
      <h3 className="section-subtitle">수행한 정부 및 지자체 지원사업입니다.</h3>
      <section className="govsupportprojects-content section-content">
        <div className="govsupportprojects-list-wrapper">

          {/* 슬라이드 컨테이너 */}
          <div 
            className="govsupportprojects-list-slide-container" 
            ref={sliderRef}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <ul 
              className="govsupportprojects-list-slide"
              style={{
                transform: `translateX(-${(currentPage - 1) * 100}%)`,
                transition: 'transform 0.3s ease-in-out'
              }}
            >
              {filteredProjects.map((project, index) => (
                <li key={project.id} className="slide-item">
                  <div>
                    <h3 className="govsupportprojects-list-header">{project.header}</h3>
                    <p className="govsupportprojects-list-date">{project.date}</p>
                    <p className="govsupportprojects-list-content">
                      {project.content.map((item, idx) => (
                        item && <span key={idx}>&#183;{item}<br /></span>
                      ))}
                    </p>
                    {project.role && (
                      <p className="govsupportprojects-list-role">{project.role}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* 페이지 인디케이터 (라인) */}
          <div className="page-indicators">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                className={`indicator ${currentPage === index + 1 ? 'active' : ''}`}
                onClick={() => goToPage(index + 1)}
              >
              </button>
            ))}
          </div>

                    
          {/* 페이지네이션 정보 */}
          <div className="govsupportprojects-list-paging">
            <p className="paging-now">{currentPage}</p>
            <span>/</span>
            <p className="paging-total">{totalPages}</p>
          </div>

        </div>
      </section>
    </div>
  );
}

export default Supportmeasure;