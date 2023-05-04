import React, {useEffect, useState, useRef} from "react";
/*
  usePreventLeave : 종료시 확인 alert
*/
const usePreventLeave = () => {
  const listener = (event) => {
    event.preventDefault();
    event.returnValue = "";
  };
  const enablePrevent = () =>
    window.addEventListener("beforeunload", listener); // window가 닫히기 전에 function이 실행됨
  const disablePrevent = () =>
    window.addEventListener("beforeunload", listener);
    return { enablePrevent, disablePrevent};
};
const App = () => {
  const {enablePrevent, disablePrevent} = usePreventLeave();
  return (
    <div className="App">
      <button onClick={enablePrevent}>Protect</button>
      <button onClick={disablePrevent}>UnProtect</button>
    </div>
  );
};

export default App;
