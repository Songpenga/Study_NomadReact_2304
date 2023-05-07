import React, {useEffect, useState, useRef} from "react";

/* ======  useNotification      ======== */
// 알람이 실행됨

const useNotification = (title, options) =>{
  if(!("Notification" in window)){
    return;
  }
  const fireNotif = () => {
    if(Notification.permission !== "granted"){
      Notification.requestPermission().then(permission => {// default, denied, granted
        if(permission === "granted"){
          new Notification(title, options);
        }else{
          return;
        }
      });
    }else {
      new Notification(title, options);
    }
  };
  return fireNotif;
};

const App = () => {
  const triggerNotif = useNotification("I still love you", {
    body : "I love you more than you think"
  });
  return (
    <div className="App" style={{height: "1000vh"}}>
      <button onClick={triggerNotif}>Hello</button>
    </div>
  );
};

export default App;
