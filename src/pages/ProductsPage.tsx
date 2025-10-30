import React, { type FC } from "react";
import { ProductsList } from "../components/Product/ProductsList";
import { ProductsFilter } from "../components/Product/ProductsFilter";
import { ProductsProvider } from "../context/Product/ProductsContext";
import { ContentContainer } from "../components/ui/ContentContainer";
import { ProductsBi } from "../components/Product/ProductsBi";

export const ProductsPage: FC = () => {
  return (
    <ProductsProvider>
      <div className="w-full h-full bg-gray-100">
        <main className="h-full w-4/5 mx-auto flex flex-col items-center py-6">
          <ContentContainer>
            <ProductsBi />
          </ContentContainer>
          <ContentContainer>
            <ProductsFilter />
          </ContentContainer>
          <ContentContainer>
            <ProductsList />
          </ContentContainer>
        </main>
      </div>
    </ProductsProvider>
  );
};
