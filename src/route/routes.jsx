import App from "../App";
import Catalog from "../components/Catalog";
import Home from "../components/Home";
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: 1,
        element: <Home />,
      },
      {
        path: "/catalog",
        element: <Catalog />,
      },
    ],
  },
]);

export default routes;
