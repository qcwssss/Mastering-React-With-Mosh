import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import Raven from "raven-js";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

Raven.config(
  "https://1b54936834bc4a4a80810dcf0c6fe5fe@o1124833.ingest.sentry.io/6163117",
  {
    release: "1-0-0",
    environment: "development-test",
  }
).install();

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
