// 게시물 작업 유형 상수 정의
export const POST_TYPE = "POST_TYPE";

// 게시물 인터페이스 정의
export interface Post {
  id: number;
  title: string;
  body: string;
}

// 게시물 작업 인터페이스 정의
export interface PostAction {
  type: string;
  payload: Post | null;
}

// 게시물 리듀서 함수 정의
export const PostReducer = (
  state: Post | null = null, // 초기 상태 설정
  action: PostAction         // 수행할 작업
): Post | null => {
  switch (action.type) {
    case POST_TYPE:
      return action.payload; // POST_TYPE 작업의 경우 페이로드로 상태 업데이트
    default:
      return state; // 알 수 없는 작업 유형의 경우 상태 그대로 반환
  }
};
