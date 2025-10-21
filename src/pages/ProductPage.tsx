import React from "react";
import { ProductProvider } from "../context/ProductContext";
import { ProductList } from "../components/ProductList";

export const ProductsPage: React.FC = () => {
  return (
    <ProductProvider>
      <div className="p-6">
        <ProductList />
      </div>
    </ProductProvider>
  );
};
