import { useState } from "react";
import "./App.css";

function App() {
  const [color, setcolor] = useState("");
  function changeBackgroundColor(color) {
    setColor(newColor);
    document.body.style.backgroundColor = color;
  }
  return (
    <div
      style={{
        textAlign: "center",
        backgroundColor: "#454545",
        height: "100vh",
        width: "100vw ",
      }}
    >
      <button
        onClick={() => changeBackgroundColor("Red")}
        style={{ backgroundColor: "Red" }}
      >
        Red
      </button>
      <button
        onClick={() => changeBackgroundColor("Yellow")}
        style={{ backgroundColor: "Yellow" }}
      >
        Yellow
      </button>
      <button
        onClick={() => changeBackgroundColor("Black")}
        style={{ backgroundColor: "Black", color: "white" }}
      >
        Black
      </button>
      <button
        onClick={() => changeBackgroundColor("Purple")}
        style={{ backgroundColor: "Purple" }}
      >
        Purple
      </button>
      <button
        onClick={() => changeBackgroundColor("Green")}
        style={{ backgroundColor: "Green" }}
      >
        Green
      </button>
      <button
        onClick={() => changeBackgroundColor("Blue")}
        style={{ backgroundColor: "Blue" }}
      >
        Blue
      </button>
      <button
        onClick={() => changeBackgroundColor("Orange")}
        style={{ backgroundColor: "Orange" }}
      >
        Default
      </button>
    </div>
  );
}

export default App;
