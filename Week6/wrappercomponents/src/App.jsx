import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <CardWrapper>
        <div>hi there</div>
      </CardWrapper>
      <CardWrapper>
        <div>hi there 1</div>
      </CardWrapper>
      <CardWrapper>
        <div>hi there 2</div>
      </CardWrapper>
    </>
  );
}

function CardWrapper({ children }) {
  return (
    <div style={{ border: "2px solid black", color: "black", padding: "20px" }}>
      {children}
    </div>
  );
}

export default App;
