import { useEffect, useState } from "react";

import "./App.css";
import axios from "axios";

function App() {
  const [button, setbutton] = useState(1);
  return (
    <>
      <button
        onClick={function () {
          setbutton(1);
        }}
      >
        1
      </button>
      <button
        onClick={function () {
          setbutton(2);
        }}
      >
        2
      </button>
      <button
        onClick={function () {
          setbutton(3);
        }}
      >
        3
      </button>
      <Todo id={button}></Todo>
      {button}
    </>
  );
}

function Todo({ id }) {
  const [todo, settodo] = useState([]);

  useEffect(() => {
    axios
      .get(`https://sum-server.100xdevs.com/todo?id=${id}`)
      .then((response) => {
        settodo(response.data.todo);
      });
  }, [id]);

  return (
    <div>
      <h1>{todo.title}</h1>
      <h3>{todo.description}</h3>
    </div>
  );
}

export default App;
