// React 라이브러리와 필요한 훅들을 불러옵니다.
import React, { FC, useState, useEffect } from "react";

// 'GreetingProps'라는 인터페이스를 정의하여 'name' 속성이 선택적으로 포함될 수 있게 합니다.
interface GreetingProps {
  name?: string;
}

// 'Greeting' 함수형 컴포넌트를 정의합니다. 'name' props가 있으면 해당 이름으로 인사말을 생성하고,
// 없으면 "no name given" 메시지를 출력합니다.
const Greeting: FC<GreetingProps> = ({ name }: GreetingProps) => {
  // 'message'라는 로컬 상태를 선언하고 초기화합니다. 이 상태는 화면에 표시될 메시지를 담습니다.
  const [message, setMessage] = useState("");

  // 'name' props가 변경될 때마다 실행되는 useEffect 훅을 사용하여 'message' 상태를 업데이트합니다.
  useEffect(() => {
    if (name) {
      setMessage(`Hello from, ${name}`);
    }
  }, [name]);

  // 'name' props가 없으면 "no name given" 메시지를 출력합니다.
  if (!name) {
    return <div>no name given</div>;
  }

  // 'name' props가 있으면 해당 이름을 포함한 인사말을 출력합니다.
  return <div>{message}</div>;
};

// 'Greeting' 컴포넌트를 내보냅니다.
export default Greeting;
