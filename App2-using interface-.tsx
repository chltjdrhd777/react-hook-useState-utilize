import React, { useState } from "react";

const tapStore = [
  { key: 0, name: "class1", description: "Scare Tactics" },
  { key: 1, name: "class2", description: "Magic for humans" },
];

interface PropsType {
  indexProp: number;
  designateObject: {}[];
}

const Taps = (props: PropsType) => {
  const [index, updateIndex] = useState(props.indexProp);

  return { items: tapStore[index], updateIndex };
};

const App2 = () => {
  const { items, updateIndex } = Taps({
    indexProp: 0,
    designateObject: tapStore,
  });
  return (
    <div>
      {tapStore.map((everyTap, index) => (
        <button key={everyTap.key} onClick={() => updateIndex(index)}>
          {everyTap.name}
        </button>
      ))}
      <div>{items.description}</div>
    </div>
  );
};

export default App2;
