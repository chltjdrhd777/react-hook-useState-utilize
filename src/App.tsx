import React, { useState } from "react";

const content = [
  { key: 1, tab: "Section 1", content: "the content of Section 1" },
  { key: 2, tab: "Section 2", content: "the content of Section 2" },
];

const useTabs = (initialTab: number, allTabs: any) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
};

const App = () => {
  const { currentItem, changeItem } = useTabs(0, content);
  return (
    <div className="App">
      {content.map((section, index) => (
        <button key={section.key} onClick={() => changeItem(index)}>
          {section.tab}
        </button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
};
export default App;
