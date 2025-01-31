import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Catalog from "../components/categories/Catalog";
import Electronics from "../components/categories/Electronics";
import Home from "../components/categories/Home";
import Jewelry from "../components/categories/Jewelery";
import MenClothings from "../components/categories/MenClothings";
import WomenClothings from "../components/categories/WomenClothings";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
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
