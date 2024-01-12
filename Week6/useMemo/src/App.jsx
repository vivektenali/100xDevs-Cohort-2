import { useMemo, useState } from "react";
import "./App.css";

function App() {
  const [count, setcount] = useState(0);
  const [sum, setsum] = useState(0);

  let counnt = useMemo(() => {
    console.log("memo got called");
    let counter = 0;
    for (let i = 1; i <= sum; i++) {
      counter = counter + i;
    }
    return counter;
  }, [sum]);

  return (
    <>
      <input
        placeholder="Enter a value"
        onChange={(e) => {
          setsum(e.target.value);
        }}
      ></input>
      <h1>Sum is {counnt}</h1>
      <button
        onClick={() => {
          setcount(count + 1);
        }}
      >
        Count is {count}
      </button>
    </>
  );
}

export default App;
