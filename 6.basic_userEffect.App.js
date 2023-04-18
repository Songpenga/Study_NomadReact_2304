
import Button from "./Button";
import styles from "./App.module.css";
import {useState, useEffect} from "react";
function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  console.log("i run all the tile");

  useEffect(() => {
    console.log("I run only once");
  }, []); // 배열에 값이 명시되지 않아 초기 1회만 실행
  useEffect(() => {
    console.log("I ren when 'keyword' changes");
  }, [keyword]); // keyword가 '변화'할 떄 코드가 항상 실행 됨
  useEffect(() => {
    console.log("I ren when keyword & counter changes");
  }, [counter]);
  useEffect(() => {
    console.log("I ren when 'counter' changes");
  }, [keyword, counter]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>cclick me</button>
    </div>
  );
}

export default App;
