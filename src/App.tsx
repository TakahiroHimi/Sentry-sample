import React from "react";
import logo from "./logo.svg";
import "./App.css";
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn:
    "https://0f72329b55ec4df58527870c31c11e91@o577387.ingest.sentry.io/5732089",
});

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button
          type="button"
          onClick={() => {
            throw new Error("Test Error");
          }}
        >
          throwError
        </button>
        <img src={logo} className="App-logo" alt="logo" />
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
}

export default App;
