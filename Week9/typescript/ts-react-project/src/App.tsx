import React from "react";
import "./App.css";

function App() {
  return (
    <>
      <Todo title="hi" description="Some description" done={false}></Todo>
    </>
  );
}

interface TodoProp {
  title: string;
  description: string;
  done: boolean;
}

function Todo(props: TodoProp) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <p>{props.done ? "Done" : "Not Done"}</p>
    </div>
  );
}

export default App;
