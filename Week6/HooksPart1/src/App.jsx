import React, { useState } from "react";
import "./App.css";
let count = 4;
function App() {
  const [todo, settodo] = useState([
    {
      id: 1,
      title: "title 1",
      description: "description 1",
    },
    {
      id: 2,
      title: "title 2",
      description: "description 2",
    },
    {
      id: 3,
      title: "title 3",
      description: "description 3",
    },
  ]);

  function addTodo() {
    settodo([
      ...todo,
      {
        id: count++,
        title: Math.random(),
        description: Math.random(),
      },
    ]);
  }

  return (
    <div>
      <button onClick={addTodo}>add to do</button>
      {todo.map(function (todo) {
        return (
          <Todo
            key={todo.id}
            title={todo.title}
            description={todo.description}
          ></Todo>
        );
      })}
    </div>
  );
}

function Todo({ title, description }) {
  return (
    <>
      <h1>{title}</h1>
      <h2>{description}</h2>
    </>
  );
}

export default App;
