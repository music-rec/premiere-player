import { useStrict } from "mobx";
import React from "react";
import ReactDOM from "react-dom";

import { api } from "premiere";

import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "animate.css/animate.min.css";

useStrict();

api.base = "https://premiere-player-api.herokuapp.com";

ReactDOM.render(<App />, document.getElementById("root"));

registerServiceWorker();
