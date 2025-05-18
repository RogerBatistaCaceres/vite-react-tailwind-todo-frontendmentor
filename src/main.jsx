import "./utils/darkMode.js";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import TagManager from "react-gtm-module";

// Inicializa GTM
const tagManagerArgs = {
  gtmId: "GTM-PGWW43Z9", // tu GTM ID
};

TagManager.initialize(tagManagerArgs);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
