import React, {useEffect, useState, useRef} from "react";
/* ======  useScroll    ======== */
//user가 스크롤해서 무언갈 지나쳤을때, 색상을 바꾸거나 무언가를 변경할때 사용

const useScroll = () => {
  const [state, setState] = useState({
    x: 0,
    y: 0,
  });
  const onScroll = (event) => {
    setState({y: window.scrollY, x: window.scrollX});
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return state;
};

const App = () => {
  const {y} = useScroll();
  return (
    <div className="App" style={{height: "1000vh"}}>
      <h1
        style={{position: "fixed", color: y > 100 ? "red" : "blue"}}>
        Hi
      </h1>
    </div>
  );
};

export default App;
