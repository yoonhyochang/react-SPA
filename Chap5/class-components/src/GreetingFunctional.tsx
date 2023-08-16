// React 라이브러리를 불러옵니다.
import React from "react";

// 'GreetingProps'라는 인터페이스를 정의합니다.
// 이 인터페이스는 'Greeting' 컴포넌트에 전달될 props의 타입을 설명합니다.
// 이 경우, 'message'라는 문자열 속성이 필요합니다.
interface GreetingProps {
  message: string;
}

// 'Greeting'이라는 함수형 컴포넌트를 정의하고 내보냅니다.
// 이 컴포넌트는 'GreetingProps' 인터페이스에 정의된 대로 'message'라는 props를 받습니다.
export default function Greeting(props: GreetingProps) {
  // 현재 컴포넌트가 렌더링되는 시점을 콘솔에 출력합니다.
  console.log("rendering Greeting");

  // 'message' props를 사용하여 문자열을 화면에 표시하는 div 엘리먼트를 반환합니다.
  return <div>{props.message}</div>;
}
