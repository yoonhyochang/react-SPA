import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { USER_TYPE } from "./store/UserReducer";
import UserDisplay from "./UserDisplay";
import PostDisplay from "./PostDisplay";
import { POST_TYPE } from "./store/PostReducer";

function App() {
    // 사용자 ID 및 게시물 ID를 관리하기 위한 상태
  const [userid, setUserid] = useState(0);
  const dispatch = useDispatch();
  const [postid, setPostId] = useState(0);
  // 사용자 ID 변경 처리기
  const onChangeUserId = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const useridFromInput = e.target.value ? Number(e.target.value) : 0;
    console.log("userid", useridFromInput);
    setUserid(useridFromInput);

    const usersResponse = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );
    if (usersResponse.ok) {
      const users = await usersResponse.json();
      console.log("users", users);
      const usr = users.find((userItem: any) => {
        return userItem && userItem.id === useridFromInput;
      });
      console.log("usr", usr);
      dispatch({
        type: USER_TYPE,
        payload: {
          id: usr.id,
          username: usr.username,
          email: usr.email,
          city: usr.address.city,
        },
      });
    }
  };
// 게시물 ID 변경 처리기
  const onChangePostId = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const postIdFromInput = e.target.value ? Number(e.target.value) : 0;
    setPostId(postIdFromInput);

    const postResponse = await fetch(
      "https://jsonplaceholder.typicode.com/posts/" + postIdFromInput
    );
    if (postResponse.ok) {
      const post = await postResponse.json();
      console.log("post", post);
      dispatch({
        type: POST_TYPE,
        payload: {
          id: post.id,
          title: post.title,
          body: post.body,
        },
      });
    }
  };

  return (
    <React.Fragment>
      <div style={{ width: "300px" }}>
        <div className="App">
        {/* // 사용자 ID 레이블 및 입력 필드 */}
          <label>user id</label> 
          <input value={userid} onChange={onChangeUserId} />
        </div>
        {/* // 사용자 정보 표시 컴포넌트 */}
        <UserDisplay /> 
      </div>
      <br />
      <div style={{ width: "300px" }}>
        <div className="App">
        {/* // 게시물 ID 레이블 및 입력 필드 */}
          <label>post id</label>
          <input value={postid} onChange={onChangePostId} />
        </div>
        {/* // 게시물 정보 표시 컴포넌트 */}
        <PostDisplay /> 
      </div>
    </React.Fragment>
  );
}

export default App;
