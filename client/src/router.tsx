import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layouts/Layout";
import { Products, productsLoader } from "./views/Products";
import { NewProduct, newProductAction } from "./views/NewProduct";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Products />,
        loader: productsLoader
      },
      {
        path: "products/nuevo",
        element: <NewProduct />,
        action: newProductAction,
      },
    ],
  },
]);
