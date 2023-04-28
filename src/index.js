import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components";
import "./assets/css/app.min.css";
import "./assets/css/skins/dark-skin.min.css";
import "./assets/css/style.css";

const root = document.getElementById("root");
const reactRoot = ReactDOM.createRoot(root);
reactRoot.render(<App />);
