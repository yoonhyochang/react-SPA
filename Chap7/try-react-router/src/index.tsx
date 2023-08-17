import React from "react"; // React 라이브러리 불러오기
import ReactDOM from "react-dom/client"; // ReactDOM 라이브러리 불러오기 (끝에 "/client"는 주의해야 함)
import "./index.css"; // 전역 CSS 불러오기
import App from "./App"; // App 컴포넌트 불러오기
import reportWebVitals from "./reportWebVitals"; // 웹 성능을 분석하는 유틸리티 함수 불러오기 (사용되지 않음)
import { BrowserRouter } from "react-router-dom"; // React Router의 BrowserRouter 컴포넌트 불러오기

// 'root' 엘리먼트를 선택하여 React root 생성
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

// React 애플리케이션 렌더링
root.render(
  // 엄격 모드 활성화 (개발 중 일반적인 문제를 캐치하는 데 도움이 됨)
  <React.StrictMode>
     {/* // React Router를 사용하여 라우팅 지원 */}
    <BrowserRouter> 
    {/* // App 컴포넌트 렌더링 */}
      <App /> 
    </BrowserRouter>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
