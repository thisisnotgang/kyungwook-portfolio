import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Skills.css'; 

function Skills() {
    // 각 스킬 섹션의 열림/닫힘 상태 관리
    const [openSections, setOpenSections] = useState({
        business: false,
        frontend: false,
        designer: false
    });

    // 섹션 토글 함수 - 하나만 열리도록 수정
    const toggleSection = (section) => {
        console.log('토글할 섹션:', section);
        
        setOpenSections(prev => {
            // 모든 섹션을 false로 설정한 후, 클릭한 섹션만 토글
            const newState = {
                business: false,
                frontend: false,
                designer: false
            };
            
            // 클릭한 섹션이 이미 열려있으면 닫고, 닫혀있으면 열기
            newState[section] = !prev[section];
            
            return newState;
        });
    };

    console.log('현재 openSections 상태:', openSections);
    
    return (
      <div className="skills-container container">
        <h2 className="section-title">SKILLS</h2>
        <h3 className="section-subtitle">각종 툴 활용 능력입니다.</h3>
        <section className="skills-content section-content">
            <div className="skills-grid">
                {/* Business Planner */}
                <div className="skills-job business-section">
                    <div 
                        className={`skills-header ${openSections.business ? 'active' : ''}`}
                        onClick={() => toggleSection('business')}
                    >
                        <i className="skills-icon"></i>
                        <div>
                            <h2 className="skills-title">Business Planner</h2>
                            <p className="skills-subtitle">사업 기획/운영자</p>
                        </div>
                        <i className="skills-arrow"></i>
                    </div>
                    <div className={`skills-list ${openSections.business ? 'active' : ''}`}>
                        <div className="skills-data">
                            <div className="skills-title">
                                <div className="skills-name">Business Plan&Proposal</div>
                                <div className="skills-number">90%</div>
                            </div>
                            <div className="skills-bar">
                                <span className="skills-percentage business-skill-1"></span>
                            </div>
                        </div>
                        <div className="skills-data">
                            <div className="skills-title">
                                <div className="skills-name">WORD</div>
                                <div className="skills-number">90%</div>
                            </div>
                            <div className="skills-bar">
                                <span className="skills-percentage business-skill-2"></span>
                            </div>
                        </div>
                        <div className="skills-data">
                            <div className="skills-title">
                                <div className="skills-name">PPT</div>
                                <div className="skills-number">80%</div>
                            </div>
                            <div className="skills-bar">
                                <span className="skills-percentage business-skill-3"></span>
                            </div>
                        </div>
                        <div className="skills-data">
                            <div className="skills-title">
                                <div className="skills-name">EXCEL</div>
                                <div className="skills-number">60%</div>
                            </div>
                            <div className="skills-bar">
                                <span className="skills-percentage business-skill-4"></span>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Frontend Developer */}
                <div className="skills-job frontend-section">
                    <div 
                        className={`skills-header ${openSections.frontend ? 'active' : ''}`}
                        onClick={() => toggleSection('frontend')}
                    >
                        <i className="skills-icon"></i>
                        <div>
                            <h2 className="skills-title">Frontend Developer</h2>
                            <p className="skills-subtitle">프론트엔드 개발자</p>
                        </div>
                        <i className="skills-arrow"></i>
                    </div>
                    <div className={`skills-list ${openSections.frontend ? 'active' : ''}`}>
                        <div className="skills-data">
                            <div className="skills-title">
                                <div className="skills-name">HTML</div>
                                <div className="skills-number">80%</div>
                            </div>
                            <div className="skills-bar">
                                <span className="skills-percentage frontend-skill-1"></span>
                            </div>
                        </div>
                        <div className="skills-data">
                            <div className="skills-title">
                                <div className="skills-name">CSS</div>
                                <div className="skills-number">80%</div>
                            </div>
                            <div className="skills-bar">
                                <span className="skills-percentage frontend-skill-2"></span>
                            </div>
                        </div>
                        <div className="skills-data">
                            <div className="skills-title">
                                <div className="skills-name">JAVASCRIPT</div>
                                <div className="skills-number">60%</div>
                            </div>
                            <div className="skills-bar">
                                <span className="skills-percentage frontend-skill-3"></span>
                            </div>
                        </div>
                        <div className="skills-data">
                            <div className="skills-title">
                                <div className="skills-name">React</div>
                                <div className="skills-number">60%</div>
                            </div>
                            <div className="skills-bar">
                                <span className="skills-percentage frontend-skill-4"></span>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Designer */}
                <div className="skills-job designer-section">
                    <div 
                        className={`skills-header ${openSections.designer ? 'active' : ''}`}
                        onClick={() => toggleSection('designer')}
                    >
                        <i className="skills-icon"></i>
                        <div>
                            <h2 className="skills-title">Designer</h2>
                            <p className="skills-subtitle">디자이너</p>
                        </div>
                        <i className="skills-arrow"></i>
                    </div>
                    <div className={`skills-list ${openSections.designer ? 'active' : ''}`}>
                        <div className="skills-data">
                            <div className="skills-title">
                                <div className="skills-name">FIGMA</div>
                                <div className="skills-number">80%</div>
                            </div>
                            <div className="skills-bar">
                                <span className="skills-percentage designer-skill-1"></span>
                            </div>
                        </div>
                        <div className="skills-data">
                            <div className="skills-title">
                                <div className="skills-name">Illustrator</div>
                                <div className="skills-number">60%</div>
                            </div>
                            <div className="skills-bar">
                                <span className="skills-percentage designer-skill-2"></span>
                            </div>
                        </div>
                        <div className="skills-data">
                            <div className="skills-title">
                                <div className="skills-name">Photoshop</div>
                                <div className="skills-number">40%</div>
                            </div>
                            <div className="skills-bar">
                                <span className="skills-percentage designer-skill-3"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </div>
    );
  }
  
  export default Skills;