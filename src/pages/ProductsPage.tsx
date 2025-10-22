import React from "react";
import { ProductProvider } from "../context/ProductContext";
import { ProductsList } from "../components/Product/ProductsList";

export const ProductsPage: React.FC = () => {
  return (
    <ProductProvider>
      <div className="p-6">
        <ProductsList />
      </div>
    </ProductProvider>
  );
};
