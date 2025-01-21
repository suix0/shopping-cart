import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Catalog from "../components/Catalog";
import Electronics from "../components/Electronics";
import Home from "../components/Home";
import Jewelry from "../components/Jewelery";
import MenClothings from "../components/MenClothings";
import WomenClothings from "../components/WomenClothings";

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
      {
        path: "/electronics",
        element: <Electronics />,
      },
      {
        path: "/jewelery",
        element: <Jewelry />,
      },
      {
        path: "/menClothings",
        element: <MenClothings />,
      },
      {
        path: "/womenClothings",
        element: <WomenClothings />,
      },
    ],
  },
]);

export default routes;
