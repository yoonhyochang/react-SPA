import React, { createContext, useState } from "react"; // React와 필요한 훅들을 불러옴
import UserNameComp from "./UserNameComp"; // UserNameComp 컴포넌트를 불러옴
import UserAgeComp from "./UserAgeComp"; // UserAgeComp 컴포넌트를 불러옴

// Context를 생성하고 기본 값을 설정
export const TestContext = createContext<{ username: string; userage: number }>(
  { username: "", userage: 0 }
);

const ContextTester = () => {
  const [userage, setUserage] = useState(20); // 사용자 나이 상태를 관리
  const [localState, setLocalState] = useState(0); // 로컬 상태를 관리

  const onClickAge = () => {
    setUserage(userage + 1); // 사용자 나이를 증가시킴
  };

  const onClickLocalState = () => {
    setLocalState(localState + 1); // 로컬 상태를 증가시킴
  };

  return (
    <React.Fragment>
      <button onClick={onClickAge}>Update age</button>
      {/* // Context Provider를 사용하여 값을 전달 */}
      <TestContext.Provider value={{ username: "dave", userage }}> 
      {/* // 사용자 나이 컴포넌트 */}
        <UserAgeComp /> 
        <br />
        {/* // 사용자 이름 컴포넌트 */}
        <UserNameComp /> 
      </TestContext.Provider>
      <br />
      {/* // 로컬 상태 업데이트 버튼 */}
      <button onClick={onClickLocalState}>Update localstate</button> 
      {/* // 로컬 상태를 화면에 표시 */}
      &nbsp;<label>{localState}</label> 
    </React.Fragment>
  );
};

export default ContextTester; // ContextTester 컴포넌트를 내보냄
