import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

// 웹 페이지의 'root' 요소를 가져옵니다.
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

// 'root' 요소 안에 React 애플리케이션을 렌더링합니다.
root.render(
  // StrictMode는 개발 모드에서 잠재적 문제를 검사하기 위해 사용됩니다.
  <React.StrictMode>
    {/* // BrowserRouter는 React Router로 SPA(Single Page Application) 라우팅을 제공합니다. */}
    <BrowserRouter>
      {/* // App 컴포넌트는 애플리케이션의 주요 컴포넌트로써, 여기에서 시작됩니다. */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// 앱에서 성능 측정을 시작하려면 결과를 로그에 기록하는 함수
// 함수를 전달하여 결과를 기록하거나(예: reportWebVitals(console.log))
//함수를 전달하거나  분석 엔드포인트로 전송하세요. 자세히 알아보기: https://bit.ly/CRA-vitals




// reportWebVitals는 웹 앱의 성능을 측정하고 분석하기 위해 사용됩니다. 
// 이는 사용자의 경험을 향상시키기 위해 중요한 지표를 모니터링하는 데 도움이 됩니다.
reportWebVitals();
 