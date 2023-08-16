import React, { FC } from "react";

// 'AnotherScreen'은 함수형 컴포넌트로, 화면에 "Hello World! Another Screen" 문구를 표시합니다.
const AnotherScreen: FC = () => {
  return <div>Hello World! Another Screen</div>;
};

// 다른 파일에서 'AnotherScreen' 컴포넌트를 사용할 수 있게 내보냅니다.
export default AnotherScreen;
