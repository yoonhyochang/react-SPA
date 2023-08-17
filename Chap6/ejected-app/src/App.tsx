import React from "react";
import DisplayText from "./DisplayText";
import "./App.css";

function App() {
  // 비동기 함수로 사용자 이름을 받아 해당 사용자의 전체 이름을 반환합니다.
  // "https://jsonplaceholder.typicode.com/users" 주소에서 사용자 정보를 가져옵니다.
  const getUserFullname = async (username: string): Promise<string> => {
    const usersResponse = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );
    if (usersResponse.ok) { // 응답이 정상적인 경우
      const users = await usersResponse.json();
      const userByName = users.find((usr: any) => {
        return usr.username.toLowerCase() === username; // 해당 사용자 이름과 일치하는 사용자를 찾습니다.
      });
      return userByName.name; // 사용자의 전체 이름을 반환합니다.
    }
    return ""; // 응답이 정상적이지 않은 경우 빈 문자열을 반환합니다.
  };

  return (
    <div className="App">
      <DisplayText getUserFullname={getUserFullname} /> {/* DisplayText 컴포넌트를 렌더링하고 getUserFullname 함수를 전달합니다. */}
    </div>
  );
}

export default App; // App 컴포넌트를 내보냅니다.
