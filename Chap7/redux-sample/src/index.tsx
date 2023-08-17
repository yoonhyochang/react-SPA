import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import reportWebVitals from "./reportWebVitals";

// 루트 요소 가져오기
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

// 앱 렌더링 (리덕스 스토어와 함께)
root.render(
  <React.StrictMode>
    <Provider store={configureStore()}>
      <App />
    </Provider>
  </React.StrictMode>
);

// 웹 성능 분석을 시작하려면 함수를 전달하십시오
// 결과를 기록하기 위한 예제: reportWebVitals(console.log)
// 또는 분석 엔드포인트로 보내기. 더 알아보기: https://bit.ly/CRA-vitals
reportWebVitals();
