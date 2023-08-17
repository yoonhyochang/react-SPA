import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

// 테스트 케이스 정의
test("renders learn react link", () => {
  // <App /> 컴포넌트를 렌더링하고, 반환된 객체에서 baseElement를 추출
  const { baseElement } = render(<App />);

  // baseElement가 문서 내에 존재하는지 확인하는 테스트
  // 이것은 <App /> 컴포넌트가 정상적으로 렌더링되었는지 검증하기 위한 단순한 테스트
  expect(baseElement).toBeInTheDocument();
});
