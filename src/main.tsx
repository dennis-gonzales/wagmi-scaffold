import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HelloWorld from "./components/HelloWorld";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelloWorld />
  </StrictMode>
);
