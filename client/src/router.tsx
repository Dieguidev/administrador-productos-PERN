import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layouts/Layout";
import { Products, productsLoader, updateAvailabilityAction } from "./views/Products";
import { NewProduct, newProductAction } from "./views/NewProduct";
import { EditProduct, editProductAction, editProductLoader } from "./views/EditProducts";
import { deleteProductAction } from "./components/ProductDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Products />,
        loader: productsLoader,
        action: updateAvailabilityAction,
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
        action: editProductAction,
      },
      {
        path: "products/:id/eliminar",
        action: deleteProductAction,
      }
    ],
  },
]);
