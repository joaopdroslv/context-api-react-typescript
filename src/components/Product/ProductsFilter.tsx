import React from "react";
import { useProduct } from "../../hooks/useProduct";

export const ProductsFilter: React.FC = () => {
  const { setFilters } = useProduct();

  return <div>component to filter products</div>;
};
