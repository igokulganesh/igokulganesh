import React from "react";
import App from "./App";
import "./assets/css/index.css";

import "primereact/resources/themes/md-dark-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import "primeflex/primeflex.css"; // flex
import "primeflex/themes/primeone-dark.css";

import { PrimeReactProvider } from "primereact/api";

export const Main = () => {
  return (
    <PrimeReactProvider>
      <App />
    </PrimeReactProvider>
  );
};

export default Main;
