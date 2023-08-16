import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// HTML 문서에서 "root"라는 ID를 가진 엘리먼트를 찾아서,
// 해당 엘리먼트를 렌더링의 기점(root)으로 사용하기 위한 root를 생성합니다.
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

// React.Fragment를 사용하여 <App /> 컴포넌트를 렌더링합니다.
// React.Fragment는 불필요한 추가 DOM 요소를 생성하지 않으며 자식 컴포넌트들을 그룹화하는데 사용됩니다.
// 이 경우에는 단일 <App /> 컴포넌트만 렌더링하므로 React.Fragment가 필수적이지는 않습니다.
root.render(
  <React.Fragment>
    <App />
  </React.Fragment>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
