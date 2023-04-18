import {useState, useEffect} from "react";
function Hello() {
  // function byFn() {
  //   console.log("bye :<");
  // }
  // function hiFn() {
  //   console.log("CREATED :)");
  //   return byFn;
  // }
  // useEffect(hiFn, []);
  // return <h1>Hello</h1>;

  /*==================*/
  useEffect(() => {
    console.log("hi: ");
    return () => console.log("bye :<");
  }, []);
  
  useEffect(function(){
    console.log('hi: ');
    return function(){
      console.log("bye :<");
    }
  }, []);
}

function App() {
  /* Cleanup */
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
