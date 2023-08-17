import React, { useRef } from "react";
import { AppState } from "./store/AppState";
import { useSelector } from "react-redux";

const UserDisplay = React.memo(() => {
  const renderCount = useRef(0); // 렌더링 횟수를 추적하기 위한 참조
  console.log("renders UserDisplay", renderCount.current++);
  const user = useSelector((state: AppState) => state.user); // 현재 사용자 상태 가져오기

  if (user) { // 사용자가 존재하면 정보 표시
    console.log("user", user);
    return (
      <React.Fragment>
        <div>
          <label>username:</label> 
          {/* // 사용자 이름 */}
          &nbsp;{user.username}
        </div>
        <div>
          <label>email:</label>
          {/* // 이메일 */}
          &nbsp;{user.email} 
        </div>
        <div>
          <label>city:</label>
          {/* // 도시 */}
          &nbsp;{user.city} 
        </div>
      </React.Fragment>
    );
  } else { // 사용자가 없으면 null 반환
    return null;
  }
});

export default UserDisplay; // UserDisplay 컴포넌트 내보내기
