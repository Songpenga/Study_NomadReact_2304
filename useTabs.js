import "./App.css";
import React, {useState} from "react";

const content = [
  {
    tab: "Sectoin 1",
    content: "I'm the content of the Section1",
  },
  {
    tab: "Sectoin 2",
    content: "I'm the content of the Section2",
  },
];

const useTabs = (initialTab, allTabs) => {
  if (!allTabs || Array.isArray(allTabs)) {
    return;
    //배열이 아닐떄 return
  }
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
};

function App() {
  const [currentItem, changeItem] = useTabs(0, content);
  return (
    <div className="App">
      {content.map((section) => (
        <button onClick={() => changeItem(index)}>
          {section.tab}
        </button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
}

export default App;
