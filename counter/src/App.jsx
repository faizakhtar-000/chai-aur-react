import { useState } from "react";
import "./App.css";

function App() {
  // let count = 0;
  let [count, setCount] = useState(0);
  // onclick = {};
  // const addValue = (count) => {
  //   count += 1;
  // };                                            //Value not updating UI updation
  // const subtractValue = (count) => {
  //   count -= 1;
  // };
  function handleCount() {
    setCount(count + 1);
  }
  function handleSub() {
    if (count < 1) {
      setCount((count = 0));
    } else {
      setCount((count -= 1));
    }
  }

  return (
    <>
      <h1> Chai and React</h1>
      <h2>Counter Value is {count}</h2>
      <div id="abc">
        <button onClick={handleCount}>Add 1</button>
        <button onClick={handleSub}>Subtract 1</button>
      </div>
    </>
  );
}

export default App;
