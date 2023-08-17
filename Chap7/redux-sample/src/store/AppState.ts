import { combineReducers } from "redux";
import { UserReducer } from "./UserReducer";
import { PostReducer } from "./PostReducer";

// rootReducer를 생성하며, 사용자와 게시물 관련 리듀서를 결합
export const rootReducer = combineReducers({
  user: UserReducer, // 사용자 관련 리듀서
  post: PostReducer, // 게시물 관련 리듀서
});

// AppState 타입을 rootReducer의 반환 타입으로 정의
export type AppState = ReturnType<typeof rootReducer>;
