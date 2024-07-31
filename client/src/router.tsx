import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layouts/Layout";
import { Products, productsLoader } from "./views/Products";
import { NewProduct, newProductAction } from "./views/NewProduct";
import { EditProduct, editProductLoader } from "./views/EditProducts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Products />,
        loader: productsLoader,
      },
      {
        path: "products/nuevo",
        element: <NewProduct />,
        action: newProductAction,
      },
      {
        path: "products/:id/editar", //ROA Pattern - Resource Oriented Architecture
        element: <EditProduct />,
        loader: editProductLoader,
      },
    ],
  },
]);
