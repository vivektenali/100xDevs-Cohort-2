import "./App.css";
import useFetch from "./UseFetch";

function App() {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/posts/");
  return (
    <>
      {data.map((d) => (
        <h1 key={d.userId}>{d.title}</h1>
      ))}
    </>
  );
}

export default App;
