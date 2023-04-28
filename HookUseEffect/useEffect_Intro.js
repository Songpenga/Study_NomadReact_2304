import React, {useEffect, useState} from "react";


const App = () => {
  const sayHello = () => console.log("Hello");
  
  const [number, setNumber] = useState(0);
  const [aNumber, setAnumber] = useState(0);
  useEffect(sayHello, [number]);
  // useEffect(sayHello, [0]);
  return (
    <div>
      <button onClick={() => setNumber(number + 1)}></button>
      <button onClick={() => setAnumber(aNumber + 1)}></button>
    </div>
  );
}

export default App;
