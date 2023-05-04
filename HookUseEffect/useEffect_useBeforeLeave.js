import React, {useEffect, useState, useRef} from "react";
/* ======  useBeforeLeave ======== */

// mouse가 document를 벗어났을때 실행시킬 함수 handle

const useBeforeLeave = (onBefore) => {
  if(typeof onBefore !== "function"){
    return;
  }

  const handle = (event) =>{
    const {clientY} = event;
    // console.log(event);
    if(clientY <= 0){
      onBefore();
    }    
  };

  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
};

const App = () => {
  const begForLife = () => console.log("Plz dont leave");
  useBeforeLeave(begForLife);
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
};

export default App;
