import React, { FC, useEffect, useRef } from "react";

// ListItem과 ListItems 인터페이스 정의
export interface ListItem {
  id: number;
}

export interface ListItems {
  listItems?: Array<ListItem>;
}
// `ListCreator`는 `listItems` 프로퍼티를 받는 컴포넌트로, `React.memo`로 감싸져 최적화되어 있습니다.
const ListCreator: FC<ListItems> = React.memo(({ listItems }: ListItems) => {
  // 현재 렌더링 된 아이템을 저장하는 useRef
  let renderItems = useRef<Array<JSX.Element> | undefined>();

  // listItems props가 변경될 때마다 아이템 재렌더링
  useEffect(() => {
    console.log("listItems updated");
    renderItems.current = listItems?.map((item, index) => {
      return <div key={item.id}>{item.id}</div>; // 각 아이템 렌더링
    });
  }, [listItems]);

  console.log("ListCreator render");
  // 렌더링 된 아이템 반환
  return <React.Fragment>{renderItems.current}</React.Fragment>;
});

// ListCreator 컴포넌트 내보내기
export default ListCreator;
