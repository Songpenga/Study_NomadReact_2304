import React, {useEffect, useState ,useRef} from "react";

/*
  reference : 기본적으로 component의 어떤부분을 선택할 수 있는 방법
  document.getElementById와 동일함
  reat에 있는 모든 component는 reference element를 가지고 있다.
*/
const App = () => {
  const peng = useRef();
  setTimeout(() => peng.current?.focus(), 5000);
  return (    
    <div className="App">
      <div>Hi</div>
      <input ref = {peng} placeholder="la" />

    </div>
  );
};

// [Cannot read property 'focus' of undefined 오류 해결 방법 2가지]
// 첫 번째 방법: potato.current.focus()를 -> potato.current?.focus()로 변경해주기

// 두 번째 방법: useEffect를 이용해서 마운트가 끝난 후 focus해주기
// useEffect(() => {
// setTimeout(() => {
// potato.current.focus();
// }, 5000);
// });
export default App;
