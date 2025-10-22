import React from "react";
import { ProductProvider } from "../context/ProductContext";
import { ProductsList } from "../components/Product/ProductsList";
import { ProductsFilter } from "../components/Product/ProductsFilter";

export const ProductsPage: React.FC = () => {
  return (
    <ProductProvider>
      <div className="w-full h-full bg-gray-100">
        <main className="h-full w-4/5 mx-auto flex flex-col items-center py-6">
          <section className="w-full bg-white py-10 px-10 rounded-md mb-4 flex items-center justify-center">
            <ProductsFilter />
          </section>
          <section className="w-full bg-white py-10 px-10 rounded-md mb-4 flex items-center justify-center">
            <ProductsList />
          </section>
        </main>
      </div>
    </ProductProvider>
  );
};
