import React, { useContext } from "react"; // React와 useContext 훅을 불러옴
import { TestContext } from "./ContextTester"; // TestContext를 불러옴

const UserAgeComp = () => {
  const { userage } = useContext(TestContext); // TestContext로부터 userage를 가져옴
  return <div>{userage}</div>; // userage를 디스플레이함
};

export default UserAgeComp; // UserAgeComp 컴포넌트를 내보냄
