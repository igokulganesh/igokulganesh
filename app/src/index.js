import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import "./assets/css/index.css";

import "primereact/resources/themes/md-dark-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import "primeflex/primeflex.css"; // flex

import { PrimeReactProvider } from "primereact/api";

const root = createRoot(document.getElementById("root"));
root.render(
  <PrimeReactProvider>
    <App />
  </PrimeReactProvider>
);
