import React from "react";
import ReactDOM from "react-dom/client";
import Global from "./styles/Global.styled.ts";
import { RouterProvider } from "react-router-dom";
import router from "./routes/index.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Global />
    <RouterProvider router={router} />
  </React.StrictMode>
);
