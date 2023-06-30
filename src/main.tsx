import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Global from "./styles/Global.styled.ts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Global />
    <App />
  </React.StrictMode>
);
