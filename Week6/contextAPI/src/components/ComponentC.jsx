import React, { useContext } from "react";
import { DataContext } from "../App";

function ComponentC() {
  const name = useContext(DataContext);

  return (
    <div>
      <p>Name from context: {name}</p>
    </div>
  );
}

export default ComponentC;
