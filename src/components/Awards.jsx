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
                            <td>2024 ESG 년 창업진흥원 창업 정책 아이디어 공모전 분야</td>
                            <td>최우수상</td>
                            <td>개인</td>
                            <td>창업진흥원</td>
                            <td>창업진흥원장상</td>
                            <td>1차 심사 대국민 온라인 투표 실시<br/>300,000원 상금</td>
                        </tr>
                    </tbody>

                </table>
            </section>
        </div>
    );
}

export default Awards;