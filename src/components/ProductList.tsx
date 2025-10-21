import React from "react";
// import { useProductContext } from "../context/ProductContext";
import { useProduct } from "../hooks/useProduct";
import type { Product } from "../models/Product";

export const ProductList: React.FC = () => {
  const { products, loading } = useProduct();

  if (loading) return <p>Loading...</p>;

  return (
    <ul>
      {products.map((p: Product) => (
        <li key={p.id}>
          <strong>{p.title}</strong> — ${p.price}
        </li>
      ))}
    </ul>
  );
};
