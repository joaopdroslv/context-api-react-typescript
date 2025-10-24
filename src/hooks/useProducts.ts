import { useProductsContext } from "../context/Product/ProductsContext";

export const useProducts = () => {
  return useProductsContext();
};
