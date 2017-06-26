import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";

const Root = () => {
  return <App />;
};

ReactDOM.render(<Root />, document.getElementById("root"));
registerServiceWorker();
