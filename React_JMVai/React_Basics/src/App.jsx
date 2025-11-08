import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./";

function App() {
  const [count, setCount] = useState(0);

  var person = {
    name: "Denesh",
    job: "Student",
  };

  var style = {
    color: "blue",
    background: "yellow",
  };
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <h1 style={style}>My name {person.name}</h1>

      {/* first {} is to make it dynamic, inner{} is to operate*/}
      <h1 style={{ color: "green", background: "yellow" }}>
        I am a {person.job}
      </h1>
      <p>My first React Paragraph</p>
      <h2>{(2 + 5) * 25}</h2>
    </>
  );
}

export default App;
