import React, { type FC } from "react";
import { ProductsList } from "../components/Product/ProductsList";
import { ProductsFilter } from "../components/Product/ProductsFilter";
import { ProductsProvider } from "../context/Product/ProductsContext";
import { ActionButton } from "../components/ui/ActionButton";
import { ContentContainer } from "../components/ui/ContentContainer";
import { InfoBadge } from "../components/ui/InfoBadge";

export const ProductsPage: FC = () => {
  return (
    <ProductsProvider>
      <div className="w-full h-full bg-gray-100">
        <main className="h-full w-4/5 mx-auto flex flex-col items-center py-6">
          <ContentContainer>
            <div className="w-full flex justify-start grid-cols gap-4">
              <InfoBadge value={999} text="Something" />
              <InfoBadge value={999} text="Something" />
              <InfoBadge value={999} text="Something" />
            </div>
            <div className="w-full flex justify-end mt-10">
              <ActionButton
                color="green"
                className="w-30"
                handleClick={() => alert("Not implemented!")}
              >
                Create
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
