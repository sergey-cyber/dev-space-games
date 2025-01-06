import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app/App.tsx";
import { BrowserRouter } from "react-router";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename="/dev-space-games">
      <App />
    </BrowserRouter>
  </StrictMode>
);
