import React from "react";
import { render, fireEvent, cleanup, waitFor } from "@testing-library/react"; // 테스팅 라이브러리에서 필요한 메서드를 가져옴
import DisplayText from "./DisplayText"; // 테스트할 컴포넌트 임포트
import "@testing-library/jest-dom/extend-expect"; // jest-dom의 확장 메서드를 사용하도록 설정

// render: 컴포넌트를 가상 DOM에 렌더링합니다.
// fireEvent: 사용자 액션(클릭, 입력 등)을 시뮬레이션합니다.
// cleanup: 테스트간 상태를 초기화하여, 테스트 간섭을 최소화합니다.
// waitFor: 비동기 작업이 완료될 때까지 기다립니다.


jest.mock("./UserTodos");

describe("Test DisplayText", () => {
  const userFullName = "John Tester"; // 테스트에서 사용할 고정된 사용자의 전체 이름

  // 사용자 이름을 입력하면 전체 이름을 반환하는 모의 함수
  const getUserFullnameMock = (
    username: string
  ): [Promise<string>, jest.Mock<Promise<string>, [string]>] => {
     // Promise를 사용하여 비동기적으로 전체 이름을 반환하는 로직을 생성
    const promise = new Promise<string>((res, rej) => {
      res(userFullName); // 해당 프로미스는 항상 userFullName로 해결됩니다.
    });
    
    // jest.fn을 사용하여 해당 로직을 담은 함수를 생성
  // 이 함수는 입력된 username에 상관없이 동일한 프로미스를 반환합니다.
    const getUserFullname = jest.fn(
      async (username: string): Promise<string> => {
        return promise;
      }
      
    );

    // 생성된 프로미스와 함수를 튜플로 반환
    return [promise, getUserFullname];


  };
  // 컴포넌트가 렌더링 되는지 테스트
  it("renders without crashing", () => {
    const username = "testuser";
    const [promise, getUserFullname] = getUserFullnameMock(username);

    const { baseElement } = render(
      
      <DisplayText getUserFullname={getUserFullname} />
      
    );
    expect(baseElement).toBeInTheDocument();
    
  });

  // 스냅샷 매치 테스트
  it("matches snapshot", () => {
    const username = "testuser";
    const [promise, getUserFullname] = getUserFullnameMock(username);

    const { baseElement } = render(
      <DisplayText getUserFullname={getUserFullname} />
    );
    expect(baseElement).toMatchSnapshot();
  });

  // 입력 텍스트를 받는지 테스트
  it("receive input text", () => {
    const username = "testuser";
    const [promise, getUserFullname] = getUserFullnameMock(username);

    const { getByTestId } = render(
      <DisplayText getUserFullname={getUserFullname} />
    );
    const input = getByTestId("user-input");
    fireEvent.change(input, { target: { value: username } });
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue(username);
  });

  // 웰컴 메시지가 표시되는지 테스트
  it("shows welcome message", async () => {
    const username = "testuser"; // 테스트할 사용자 이름 설정
    const [promise, getUserFullname] = getUserFullnameMock(username); // 사용자의 전체 이름을 가져오는 목(Mock) 함수

    const msg = `Welcome to React testing, ${userFullName}`; // 표시될 메시지 구성
    const { getByTestId } = render(
      <DisplayText getUserFullname={getUserFullname} />
    ); // DisplayText 컴포넌트 렌더링
    const input = getByTestId("user-input"); // 입력 필드 선택
    const label = getByTestId("final-msg"); // 레이블 선택
    fireEvent.change(input, { target: { value: username } }); // 입력 필드에 사용자 이름 입력
    const btn = getByTestId("input-submit"); // 제출 버튼 선택
    fireEvent.click(btn); // 제출 버튼 클릭

    expect(label).toBeInTheDocument(); // 레이블이 문서에 있는지 확인
    await waitFor(() => expect(label.innerHTML).toBe(msg)); // 웰컴 메시지가 표시되는지 확인
  });

});

