import React from "react";
import { useProducts } from "../../hooks/useProducts";

export const ProductsFilter: React.FC = () => {
  const { setFilters } = useProducts();

  return <div>component to filter products</div>;
};
