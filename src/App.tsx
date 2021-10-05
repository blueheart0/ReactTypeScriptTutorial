import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { FirstLoading } from "./components";

const App: React.FC = () => {
  console.log("test");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <FirstLoading msg={"Testing"} />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
