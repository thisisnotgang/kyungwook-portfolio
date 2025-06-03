import React from 'react';
import { Link } from 'react-router-dom';
import './Awards.css';

function Awards() {
    return (
        <div className="awards-container container">
            <h2 className="section-title">AWARDS</h2>
            <h3 className="section-subtitle">수상 경력입니다.</h3>
            <section className="awards-content section-content">
                <table>
                    <thead>
                        <tr>
                            <th>연번</th>
                            <th>수상일자</th>
                            <th>수상명</th>
                            <th>상훈명</th>
                            <th>수상자구분</th>
                            <th>수상기관</th>
                            <th>수상급</th>
                            <th>비고</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>2024.11.18.</td>
                            <td>창업진흥원 창업 정책<br/>아이디어 공모전 ESG 분야</td>
                            <td>최우수상</td>
                            <td>개인</td>
                            <td>창업진흥원</td>
                            <td>창업진흥원장상</td>
                            <td>1차 심사 대국민 온라인 투표 실시<br/>300,000원 상금</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>2022.01.21.</td>
                            <td>동서대학교 우수장학생 선발전</td>
                            <td>우수상</td>
                            <td>개인</td>
                            <td>동서대학교<br/>LINC+ 사업단</td>
                            <td>동서대학교<br/>LINC+ 사업단장상</td>
                            <td>300,000원 상금</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>2022.01.18.</td>
                            <td>2022 DSU 실전창업 경진대회</td>
                            <td>대상</td>
                            <td>4인팀</td>
                            <td>동서대학교<br/>창업지원단</td>
                            <td>동서대학교<br/>창업지원단장상</td>
                            <td>5,000,000원 상금</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>2021.09.29.</td>
                            <td>부경지역 골목상권 활성화를 위한<br/>콘텐츠 활용 창업경진대회</td>
                            <td>우수상</td>
                            <td>2인팀</td>
                            <td>부산 6개 대학<br/>LINC+ 사업단</td>
                            <td>동명대학교<br/>LINC+ 사업단장상</td>
                            <td>500,000원 상금</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>2021.08.27.</td>
                            <td>PIVOTING 온라인 창업 캠프</td>
                            <td>대상</td>
                            <td>5인팀</td>
                            <td>부산 6개 대학<br/>LINC+ 사업단</td>
                            <td>동서대학교<br/>LINC+ 사업단장상</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>2021.07.07.</td>
                            <td>제주지역 관광활성화를 위한<br/>콘텐츠 활용 창업경진대회</td>
                            <td>장려상</td>
                            <td>2인팀</td>
                            <td>부산 6개 대학<br/>LINC+ 사업단</td>
                            <td>동명대학교<br/>LINC+ 사업단장상</td>
                            <td>150,000원 상금</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>2021.06.28.</td>
                            <td>2021 PASTEL Convergence<br/>DSU 창업캠프 창업아이디어 경진대회</td>
                            <td>우수상</td>
                            <td>4인팀</td>
                            <td>동서대학교<br/>LINC+ 사업단</td>
                            <td>동서대학교<br/>LINC+ 사업단장상</td>
                            <td>200,000원 상금</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>2021.04.21.</td>
                            <td>동서인 아이디어 경진대회</td>
                            <td>장려상</td>
                            <td>2인팀</td>
                            <td>동서대학교<br/>SW중심대학사업단</td>
                            <td>동서대학교<br/>SW중심대학사업단장상</td>
                            <td>200,000원 상금</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    );
}

export default Awards;