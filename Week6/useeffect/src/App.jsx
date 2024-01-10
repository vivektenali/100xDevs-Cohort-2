import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [todos, settodos] = useState([]);

  useEffect(() => {
    setInterval(() => {
      fetch("https://sum-server.100xdevs.com/todos")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          settodos(data.todos);
        });
    }, 2000);
  }, []);
  return (
    <>
      {todos.map(function (todo) {
        return (
          <Todo
            key={todo.id}
            title={todo.title}
            description={todo.description}
          ></Todo>
        );
      })}
    </>
  );
}

function Todo({ title, description }) {
  return (
    <>
      <h1>{title}</h1>
      <h4>{description}</h4>
    </>
  );
}

export default App;
