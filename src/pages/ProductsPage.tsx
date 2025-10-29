import React, { type FC } from "react";
import { ProductsList } from "../components/Product/ProductsList";
import { ProductsFilter } from "../components/Product/ProductsFilter";
import { ProductsProvider } from "../context/Product/ProductsContext";
import { ActionButton } from "../components/ui/ActionButton";
import { ContentContainer } from "../components/ui/ContentContainer";

export const ProductsPage: FC = () => {
  return (
    <ProductsProvider>
      <div className="w-full h-full bg-gray-100">
        <main className="h-full w-4/5 mx-auto flex flex-col items-center py-6">
          <ContentContainer>
            <div className="w-full flex justify-end">
              <ActionButton color="default" className="w-30">
                Insert
              </ActionButton>
            </div>
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
