import { Link } from "react-router-dom";
import { getProducts } from "../services/ProductService";

export async function productsLoader() {
  const products = await getProducts();
  return products;
}

export const Products = () => {
  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-4xl font-black text-slate-500">Productos</h2>
        <Link
          to={"/products/nuevo"}
          className="rounded-md bg-indigo-600 text-white p-3 text-sm font-bold shadow-sm hover:bg-indigo-500"
        >
          Agregar producto
        </Link>
      </div>
    </>
  );
};
