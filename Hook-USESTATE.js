import React, {useState} from "react";


function App() {
  const [item, setItem] = useState(1);
  const incrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);
  return (
    <div className="App">
      <h2>{item}</h2>
      <button onClick={incrementItem}>increase</button>
      <button onClick={decrementItem}>decrease</button>
    </div>
  );
};

class AppUgly extends React.Component {
  state = {
    item: 1,
  };
  render() {
    const {item} = this.state;
    return (
      <div className="App">
        <h2>{item}</h2>
        <button onClick={this.incrementItem}>increase</button>
        <button onClick={this.decrementItem}>decrease</button>
      </div>
    );
  }
  incrementItem = () => {
    this.setState((state) => {
      return {
        item: state.item + 1
      };
    });
  };
  decrementItem = () => {
    this.setState((state) => {
      return {
        item: state.item -1
      };
    });
  };
}
const rootElement = document.getElementById("root");
React.render(<AppUgly />, rootElement); ;
export default App;
