// 액션 타입 상수 정의
export const USER_TYPE = "USER_TYPE";

// 사용자 인터페이스 정의
export interface User {
  id: number;
  username: string;
  email: string;
  city: string;
}

// 사용자 액션 인터페이스 정의
export interface UserAction {
  type: string; // 액션 타입
  payload: User | null; // 사용자 데이터 또는 null
}

// 사용자 리듀서 정의
export const UserReducer = (
  state: User | null = null, // 초기 상태
  action: UserAction // 디스패치된 액션
): User | null => {
  switch (action.type) {
    case USER_TYPE:
      return action.payload; // USER_TYPE일 경우, payload로 상태 업데이트
    default:
      return state; // 그 외의 경우, 현재 상태 유지
  }
};
