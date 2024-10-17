import { createBrowserRouter } from "react-router-dom";

import App from "App";
import Jotai from "components/page/Jotai";
import Query from "components/page/Query";

const BASE_PATH = "/";
const JOTAI_SAMPLE_PATH = "jotai-sample";
const JOTAI_QUERY_SAMPLE_PATH = "jotai-query";

const router = createBrowserRouter([
  {
    path: BASE_PATH,
    element: <App />,
  },
  {
    path: JOTAI_SAMPLE_PATH,
    element: <Jotai />,
  },
  {
    path: JOTAI_QUERY_SAMPLE_PATH,
    element: <Query />,
  },
  {
    path: "*",
    element: (
      <>404 , Its a sample - we can create a 404 page component and use here</>
    ),
  },
]);

export { BASE_PATH, JOTAI_QUERY_SAMPLE_PATH, JOTAI_SAMPLE_PATH };
export default router;
