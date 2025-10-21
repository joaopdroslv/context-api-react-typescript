import React from "react";
import { ProductProvider } from "../context/ProductContext";
import { ProductList } from "../components/ProductList";

export const ProductsPage: React.FC = () => {
  return (
    <ProductProvider>
      <div className="p-6">
        <h1 className="text-xl font-semibold mb-4"># Listing all</h1>
        <ProductList />
      </div>
    </ProductProvider>
  );
};
