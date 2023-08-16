// React 및 FC (Function Component)를 불러옵니다.
import React, { FC } from "react";

// Home 컴포넌트를 정의합니다. 이 컴포넌트는 함수 컴포넌트로 작성되었습니다.
const Home: FC = () => {
  return <div>Hello World! Home</div>; // 화면에 "Hello World! Home" 텍스트를 표시합니다.
};

export default Home; // 다른 파일에서 Home 컴포넌트를 사용할 수 있도록 내보냅니다. 