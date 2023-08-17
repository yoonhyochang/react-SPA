import React, { useContext, useRef } from "react"; // React와 필요한 훅들을 불러옴
import { TestContext } from "./ContextTester"; // TestContext를 불러옴

const UserNameComp = React.memo(() => {
  const renders = useRef(0); // 렌더 횟수를 추적하기 위한 ref
  console.log("renders UserNameComp", renders.current++); // 렌더 횟수를 콘솔에 출력

  const { username } = useContext(TestContext); // TestContext로부터 username을 가져옴
  console.log("username UserNameComp", username); // 가져온 username을 콘솔에 출력

  return <div>{username}</div>; // username을 화면에 표시
});

export default UserNameComp; // UserNameComp 컴포넌트를 내보냄
