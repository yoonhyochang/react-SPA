import React from "react";
import "./App.css"; // 앱의 CSS 스타일 불러오기
import { Switch, Route } from "react-router-dom"; // react-router-dom에서 필요한 컴포넌트 불러오기
import ScreenA from "./ScreenA";
import ScreenB from "./ScreenB";
import ScreenC from "./ScreenC"; // 각각의 화면 컴포넌트 불러오기

function App() {
  // ScreenC 컴포넌트를 렌더링하기 위한 함수
  const renderScreenC = (props: any) => {
    console.log("ScreenC props", props);
    return <ScreenC {...props} message="This is Screen C" />;
  };

  return (
    <Switch>
      {/* // 기본 경로로 ScreenA 컴포넌트 렌더링 */}
      <Route exact={true} path="/" component={ScreenA} /> 
      {/* // "/b" 경로로 ScreenB 컴포넌트 렌더링 */}
      <Route path="/b" component={ScreenB} /> 
      {/* // "/c/:userid" 경로로 renderScreenC 함수를 이용해 ScreenC 컴포넌트 렌더링 */}
      <Route path="/c/:userid" render={renderScreenC} /> 
    </Switch>
  );
}

export default App; // App 컴포넌트를 기본으로 내보내기
