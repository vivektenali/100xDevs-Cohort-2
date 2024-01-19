import React, { createContext } from "react";
import "./App.css";
import ComponentC from "./components/ComponentC";

export const DataContext = createContext();

function App() {
  const name = "Vivek";
  return (
    <>
      <DataContext.Provider value={name}>
        <ComponentC />
      </DataContext.Provider>
    </>
  );
}

export default App;
