import React from "react";
import { createRoot } from 'react-dom/client';

import App from "./App";
import "./assets/css/index.css";

import "primereact/resources/themes/lara-light-blue/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import "primeflex/primeflex.css"; // flex
import 'bootstrap/dist/css/bootstrap.min.css'; // bootstrap css

// slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import PrimeReact from "primereact/api";
PrimeReact.ripple = true;

const root = createRoot(document.getElementById('root'));
root.render(<React.StrictMode><App /></React.StrictMode>);
