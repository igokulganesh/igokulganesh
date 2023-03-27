import React from "react";
import ReactDOM from "react-dom";

import "primereact/resources/themes/lara-light-blue/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import "primeflex/primeflex.css"; // flex
import PrimeReact from "primereact/api";
import App from "./App";

PrimeReact.ripple = true;

ReactDOM.render(<App />, document.getElementById("root"));
