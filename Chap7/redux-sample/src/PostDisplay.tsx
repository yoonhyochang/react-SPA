import React, { useRef } from "react";
import { AppState } from "./store/AppState"; // 리덕스 상태 타입 가져오기
import { useSelector } from "react-redux"; // 리덕스 상태 선택 훅

const PostDisplay = React.memo(() => {
  const renderCount = useRef(0); // 렌더링 횟수 추적
  console.log("renders PostDisplay", renderCount.current++);
  const post = useSelector((state: AppState) => state.post); // 현재 포스트 상태 선택

  if (post) { // 포스트가 있으면 출력
    return (
      <React.Fragment>
        <div>
          <label>title:</label>
          &nbsp;{post.title} // 포스트 제목
        </div>
        <div>
          <label>body:</label>
          &nbsp;{post.body} // 포스트 본문
        </div>
      </React.Fragment>
    );
  } else {
    return null; // 포스트가 없으면 아무 것도 반환하지 않음
  }
});

export default PostDisplay; // PostDisplay 컴포넌트 내보내기
