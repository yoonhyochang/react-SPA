import React from "react";
import "./App.css";
import Home from "./Home";
import AnotherScreen from "./AnotherScreen";
import { Switch, Route } from "react-router";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          { /* "/" 경로에서 Home 컴포넌트 표시 */ }
          <Route exact={true} path="/" component={Home}></Route>
          { /* "/another" 경로에서 AnotherScreen 컴포넌트 표시 */ }
          <Route path="/another" component={AnotherScreen}></Route> 
        </Switch>
      </header>
    </div>
  );
}

export default App; // 다른 파일에서 사용 가능하게 함 
