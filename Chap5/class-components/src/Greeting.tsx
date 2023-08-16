import React from "react";

// GreetingProps 인터페이스는 선택적인 name 속성을 가집니다.
interface GreetingProps {
  name?: string;
}

// GreetingState 인터페이스는 message 문자열을 상태로 가집니다.
interface GreetingState {
  message: string;
}

export default class Greeting extends React.Component<GreetingProps, GreetingState> {
  constructor(props: GreetingProps) {
    super(props);

    // 컴포넌트의 초기 상태를 설정합니다. 이름이 주어지면 해당 이름을 사용해 메시지를 생성합니다.
    this.state = {
      message: Greeting.getNewMessage(props.name),
    };
  }

  // props가 변경될 때 상태도 함께 업데이트합니다. 이는 리액트의 생명주기 메서드 중 하나로, props의 변경을 감지해 상태를 업데이트하는 데 사용됩니다.
  static getDerivedStateFromProps(props: GreetingProps, state: GreetingState) {
    if (props.name && props.name !== state.message) {
      const newState = { ...state };
      newState.message = Greeting.getNewMessage(props.name); // 새로운 이름을 사용해 메시지를 업데이트합니다.
      return newState; // 변경된 상태를 반환합니다.
    }
    return state; // 변경이 없으면 기존 상태를 그대로 반환합니다.
  }

  // 주어진 이름으로 새로운 인사말 메시지를 생성합니다. 이름이 없으면 빈 문자열을 사용합니다.
  static getNewMessage(name: string = "") {
    return `Hello from, ${name}`;
  }

  // 컴포넌트를 렌더링합니다. 이름이 없으면 특정 메시지를 표시하고, 그렇지 않으면 상태에서 메시지를 표시합니다.
  render() {
    if (!this.props.name) {
      return <div>no name given</div>; // 이름이 없을 때 반환될 JSX
    }
    return <div>{this.state.message}</div>; // 인사말 메시지를 표시할 JSX
  }
}
