import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Greeting from "./GreetingFunctional";

// 'App' 클래스 컴포넌트 정의
class App extends React.Component {
  constructor(props: any) {
    super(props);

    // 초기 상태 설정
    this.state = {
      enteredName: "",
      message: "",
    };

    // 이벤트 핸들러 바인딩
    this.onChangeName = this.onChangeName.bind(this);
  }

  // 상태 타입 정의
  state: { enteredName: string; message: string };

  // 이름 입력 변경을 처리하는 이벤트 핸들러
  onChangeName(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      enteredName: e.target.value,
      message: `Hello from, ${e.target.value}`,
    });
  }

  render() {
    console.log("rendering App");

    // UI 렌더링
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {
  // 입력란에서 이름을 입력받고 상태 변경
}
          <input value={this.state.enteredName} onChange={this.onChangeName} />
          {
  // 'Greeting' 컴포넌트에 메시지 전달
}
          <Greeting message={this.state.message} />
        </header>
      </div>
    );
  }
}

export default App;
