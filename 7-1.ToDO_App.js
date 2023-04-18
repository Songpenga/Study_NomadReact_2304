import {useState, useEffect} from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    /* toDo =""
    =>절대 State를 직접적으로 수정하지 않는다
    항상 State를 수정하는 함수를 사용한다.
    */
    setToDos((currentArray) => [toDo, ...currentArray]);
    // => setToDos((["hello"]) => ["bye bye", ["helo"]]);;
    setToDo(""); // <= 값 전달
  };
  console.log(toDos);
  return (
    <div>
      <h1>My To Dos {toDos.length} </h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add to Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
        {/*map은 하나의 array에 있는 item을 내가 원하는 무엇이든지로 바꿔주는 역할을 한다.*/}
        {/*map은 함수의 첫번째  argument 로 현재의 item 을 가져 올 수 있다*/}
      </ul>
    </div>
  );
}

export default App;
