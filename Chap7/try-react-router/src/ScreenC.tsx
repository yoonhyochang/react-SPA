import React, { FC } from "react";
import { useHistory, useParams } from "react-router-dom";


// ScreenCProps 인터페이스를 정의합니다. message라는 문자열 타입의 속성과 history, match 객체를 포함합니다.
interface ScreenCProps {
  message: string;
  history: any;
  match: any;
}

// Params 인터페이스는 userid라는 문자열 타입의 속성을 정의합니다.
interface Params {
  userid: string;
}


// ScreenC라는 함수형 컴포넌트를 정의하며, ScreenCProps 인터페이스를 사용하여 props의 타입을 지정합니다.
const ScreenC: FC<ScreenCProps> = (props) => {
  // useEffect(() => {
  //   setTimeout(() => {
  //     props.history.push("/");
  //   }, 3000);
  // });
  const history = useHistory();
  const { userid } = useParams<Params>();

   // 사용자가 'Go back' 버튼을 클릭하면 이전 페이지로 돌아가는 함수입니다.
  const onClickGoback = () => {
    // props.history.goBack();
    history.goBack();
  };

  return (
    <div>
       {/* URL 파라미터로부터 받은 userid를 출력합니다. */}
      {/* <div>{"Your id is " + props.match.params.userid}</div> */}
      <div>{"Your id is " + userid}</div>
      {/* 부모 컴포넌트로부터 전달된 메시지를 출력합니다. */}
      <div>{props.message}</div>
      <div>
        {/* 'Go back' 버튼을 클릭하면 onClickGoback 함수가 호출됩니다. */}
        <button onClick={onClickGoback}>Go back</button>
      </div>
    </div>
  );
};

export default ScreenC;
