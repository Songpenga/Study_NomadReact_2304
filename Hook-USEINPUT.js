import React, {useState} from "react";

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChange = event => {
    console.log(event.target);
  };
  return {value, onChange};
};

function App() {
  const name = useInput("Mr.");
  return (
    <div className="App">
      <input placeholder="Name" {...name}/>
      {/* <input placeholder="Name" value={name.value}/> */}
    </div>
  );
};

export default App;
