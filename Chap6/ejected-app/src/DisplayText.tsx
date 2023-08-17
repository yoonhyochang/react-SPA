import React, { useState, FC } from "react";
import UserTodos from "./UserTodos";

// 프로퍼티 정의: getUserFullname 함수를 프로퍼티로 받는다.
interface DisplayTextProps {
  getUserFullname: (username: string) => Promise<string>;
}

const DisplayText: FC<DisplayTextProps> = ({ getUserFullname }) => {
  // 상태 정의
  const [txt, setTxt] = useState(""); // 사용자 입력 텍스트 상태
  const [msg, setMsg] = useState(""); // 메시지 상태
  const [todoControl, setTodoControl] = useState<ReturnType<typeof UserTodos>>(); // UserTodos 컴포넌트 상태

  // 입력 변경 핸들러
  const onChangeTxt = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTxt(e.target.value); // 입력 값을 상태에 저장
  };

  // 버튼 클릭 핸들러
  const onClickShowMsg = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault(); // 기본 이벤트 중지
    setTodoControl(null); // todoControl 초기화
    // 메시지 설정, getUserFullname 함수를 사용해 전달받은 텍스트로 사용자 전체 이름을 가져옴
    setMsg(`Welcome to React testing, ${await getUserFullname(txt)}`);
    // UserTodos 컴포넌트를 username으로 생성하여 todoControl 상태에 저장
    setTodoControl(<UserTodos username={txt} />);
  };

  // 반환: 폼 렌더링
  return (
    <form>
      <div>
        <label>Enter your name</label>
      </div>
      <div>
        <input data-testid="user-input" value={txt} onChange={onChangeTxt} />
      </div>
      <div>
        <button data-testid="input-submit" onClick={onClickShowMsg}>
          Show Message
        </button>
      </div>
      <div>
        <label data-testid="final-msg">{msg}</label>
      </div>
      {todoControl}
    </form>
  );
};

export default DisplayText;
