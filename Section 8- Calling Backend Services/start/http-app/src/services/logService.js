import Raven from "raven-js";

function init() {
  Raven.config(
    "https://1b54936834bc4a4a80810dcf0c6fe5fe@o1124833.ingest.sentry.io/6163117",
    {
      release: "1-0-0",
      environment: "development-test",
    }
  ).install();
}

function log(error) {
  Raven.captureException(error);
}

export default {
  init,
  log,
};
