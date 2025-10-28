import React, { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import type { Product } from "../../models/Product/Product";
import type { ProductFiltersParams } from "../../models/Product/ProductFiltersParams";
import type { ProductFilters } from "../../models/Product/ProductFilters";
import { ProductService } from "../../services/Product/ProductService";

interface ProductsContextProps {
  products: Product[];
  loading: boolean;
  filters: ProductFilters;
  params: ProductFiltersParams;
  setFilters: (filters: ProductFilters) => void;
  updateFilters: <K extends keyof ProductFilters>(
    key: K,
    value: ProductFilters[K]
  ) => void;
  clearFilters: () => void;
  refreshProducts: (filters?: ProductFilters) => Promise<void>;
}

const emptyProductFilters: ProductFilters = {
  keywords: [],
  categories_ids: [],
  suppliers_ids: [],
  price_min: 0,
  price_max: 0,
  rate_min: 0,
  rate_max: 0,
};

const emptyProductParams: ProductFiltersParams = {
  categories: [],
  suppliers: [],
};

const ProductsContext = createContext<ProductsContextProps | undefined>(
  undefined
);

export const ProductsProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [params, setParams] =
    useState<ProductFiltersParams>(emptyProductParams);
  const [filters, setFilters] = useState<ProductFilters>(emptyProductFilters);
  const [loading, setLoading] = useState<boolean>(true);
  const service = new ProductService();

  const getAll = async (f: ProductFilters = filters): Promise<void> => {
    setLoading(true);
    try {
      console.log(f);
      const data = await service.getAll();
      setProducts(data);
    } catch (err) {
      console.error("Failed to load products:", err);
    } finally {
      setLoading(false);
    }
  };

  const getParams = async (): Promise<void> => {
    try {
      const data = await service.getParams();
      setParams(data);
    } catch (err) {
      console.error("Failed to load params:", err);
    }
  };

  useEffect(() => {
    getAll(filters);
    getParams();
  }, []);

  const updateFilters = <K extends keyof ProductFilters>(
    key: K,
    value: ProductFilters[K]
  ) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const clearFilters = () =>
    setFilters({
      keywords: [],
      categories_ids: [],
      suppliers_ids: [],
      price_min: 0,
      price_max: 0,
      rate_min: 0,
      rate_max: 0,
    });

  return (
    <ProductsContext.Provider
      value={{
        products,
        loading,
        filters,
        params,
        setFilters,
        clearFilters: clearFilters,
        updateFilters,
        refreshProducts: getAll,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = (): ProductsContextProps => {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error("useProductsContext must be used within a ProductProvider");
  }
  return context;
};
