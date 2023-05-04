import React, {useEffect, useState, useRef} from "react";

/* ======  useFullscreen     ======== */
// element를 fullscreen으로

const useFullscreen = (clallback) => {
  const element = useRef();
  const triggerFull = () => {
    if (element.current) {
      element.current.requestFullscreen();
      if (clallback && typeof clallback === "function") {
        clallback(true);
      }
    }
  };
  const exitFull = () => {
    document.exitFullscreen();
    if (clallback && typeof clallback === "function") {
      clallback(false);
    }
  };
  return {element, triggerFull, exitFull};
};

const App = () => {
  const onFullS = (isFull) =>{
    //isFull is boolean
    console.log(isFull ? "we are full" : "we are small");
  };
  const {element, triggerFull, exitFull} = useFullscreen(onFullS);
  return (
    <div className="App" style={{height: "1000vh"}}>
      <div ref={element}>
        <img
          ref={element}
          src="https://media.npr.org/assets/img/2018/03/09/penguin-selfie_custom-708a6ce4d7a9eb447eab75bb51fa4b4034ed0fed-s800-c85.webp"></img>
        <button onClick={exitFull}>Make exitScreen</button>
      </div>
      <button onClick={triggerFull}>Make fullscreen</button>
    </div>
  );
};

export default App;
