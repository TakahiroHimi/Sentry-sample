import React from "react";
import "./App.css";
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: process.env.REACT_APP_SENTRY_DSN,
  environment: process.env.REACT_APP_SENTRY_ENVIRONMENT,
});

function App() {
  return (
    <div className="App">
      <button
        type="button"
        onClick={() => {
          throw new Error("Test Error");
        }}
      >
        throwError
      </button>
    </div>
  );
}

export default App;
