import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Jotai from "../components/page/Jotai";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "jotai-sample",
    element: <Jotai />,
  },
  {
    path: "jotai-query",
    element: <>jotai query</>,
  },
  {
    path: "*",
    element: (
      <>404 , Its a sample - we can create a 404 page component and use here</>
    ),
  },
]);

export default router;
