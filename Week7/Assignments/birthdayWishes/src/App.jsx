import { useState } from "react";
import "./App.css";
import Card from "./Component/Card";

function App() {
  const [name, setname] = useState("");
  const [showCard, setShowCard] = useState(false);
  const handleButtonClick = () => {
    setShowCard(true);
  };
  return (
    <>
      <div>
        <h1>Enter Your Name</h1>
        <input
          placeholder="Enter Your Name"
          onChange={(e) => {
            setname(e.target.value);
          }}
        ></input>
        <button onClick={handleButtonClick}>Done</button>
        {showCard && <Card name={name} />}{" "}
      </div>
    </>
  );
}

export default App;
