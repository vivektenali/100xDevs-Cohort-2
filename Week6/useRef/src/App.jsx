import { useRef } from "react";
import "./App.css";

function App() {
  const inputElement = useRef(null);

  const focusInput = () => {
    inputElement.current.focus();
  };

  return (
    <>
      <input type="text" ref={inputElement}></input>
      <button onClick={focusInput}>Click</button>
    </>
  );
}

export default App;
