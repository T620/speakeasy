import React from "react";
import ReactDOM from "react-dom";
import "./assets/index.css";

import IndexWrapper from "./IndexWrapper";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<IndexWrapper />, document.getElementById("root"));
serviceWorker.unregister();
