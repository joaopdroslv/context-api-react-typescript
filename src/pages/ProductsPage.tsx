import React from "react";
import { ProductsList } from "../components/Product/ProductsList";
import { ProductsFilter } from "../components/Product/ProductsFilter";
import { ProductsProvider } from "../context/Product/ProductsContext";

export const ProductsPage: React.FC = () => {
  return (
    <ProductsProvider>
      <div className="w-full h-full bg-gray-100">
        <main className="h-full w-4/5 mx-auto flex flex-col items-center py-6">
          <section className="w-full bg-white py-8 px-8 rounded-md mb-4 flex items-center justify-center">
            <ProductsFilter />
          </section>
          <section className="w-full bg-white py-8 px-8 rounded-md mb-4 flex items-center justify-center">
            <ProductsList />
          </section>
        </main>
      </div>
    </ProductsProvider>
  );
};
