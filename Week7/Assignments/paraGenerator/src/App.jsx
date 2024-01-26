import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState("");
  const [para, setPara] = useState("");

  function generateParagraph() {
    const wordCount = parseInt(count);
    if (isNaN(wordCount) || wordCount <= 0) {
      alert("Please enter a valid positive number.");
      return;
    }

    const words = [
      "Lorem",
      "ipsum",
      "dolor",
      "sit",
      "amet",
      "consectetur",
      "adipiscing",
      "elit",
    ];
    let generatedParagraph = "";

    for (let i = 0; i < wordCount; i++) {
      const randomIndex = Math.floor(Math.random() * words.length);
      generatedParagraph += words[randomIndex] + " ";
    }

    setPara(generatedParagraph.trim());
  }

  return (
    <>
      <h1>Para Generator</h1>
      <input
        type="number"
        placeholder="Enter Number of Words"
        value={count}
        onChange={(e) => {
          setCount(e.target.value);
        }}
      />
      <button onClick={generateParagraph}>Generate</button>

      <p>{para}</p>
    </>
  );
}

export default App;
