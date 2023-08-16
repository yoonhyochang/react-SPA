import React from "react";

interface GreetingProps {
  enteredName: string; // 입력란에 표시할 이름
  message: string; // 표시할 메시지
  greetingDispatcher: React.Dispatch<{ type: string; payload: string }>; // 상태 변경 디스패처
}

export default function Greeting(props: GreetingProps) {
  // 입력란의 값이 변경될 때 호출되는 함수
  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    // "enteredName" 상태 업데이트
    props.greetingDispatcher({ type: "enteredName", payload: e.target.value });
    // "message" 상태 업데이트
    props.greetingDispatcher({ type: "message", payload: e.target.value });
  };

  return (
    <div>
      {/* // 입력란: props.enteredName 값 사용 */}
      <input value={props.enteredName} onChange={onChangeName} />
      {/* // 메시지 표시: props.message 값 사용 */}
      <div>{props.message}</div>
    </div>
  );
}
