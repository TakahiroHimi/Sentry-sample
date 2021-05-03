import React from "react";
import "./App.css";
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

Sentry.init({
  dsn: process.env.REACT_APP_SENTRY_DSN,
  autoSessionTracking: true,
  // integrations: [new Integrations.BrowserTracing()],
  tracesSampleRate: 1.0,
});

function App() {
  return (
    <div className="App">
      <button
        type="button"
        onClick={() => {
          throw new Error("Test Error！");
        }}
      >
        throwError
      </button>
      <button
        type="button"
        onClick={() => {
          // do nothing
        }}
      >
        do nothing!!
      </button>
    </div>
  );
}

export default App;
