import React, { createContext, useContext, useState, useEffect } from "react";
import type { Product } from "../../models/Product/Product";
import type { ProductFilters } from "../../models/Product/ProductFilters";
import { ProductService } from "../../services/Product/ProductService";

interface ProductsContextProps {
  products: Product[];
  loading: boolean;
  filters: ProductFilters;
  setFilters: (filters: ProductFilters) => void;
  updateFilters: <K extends keyof ProductFilters>(
    key: K,
    value: ProductFilters[K]
  ) => void;
  cleanFilters: () => void;
  refreshProducts: (filters?: ProductFilters) => Promise<void>;
}

const ProductsContext = createContext<ProductsContextProps | undefined>(
  undefined
);

export const ProductsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filters, setFilters] = useState<ProductFilters>({});
  const [loading, setLoading] = useState<boolean>(true);
  const service = new ProductService();

  const refreshProducts = async (f: ProductFilters = filters) => {
    setLoading(true);
    try {
      console.log(f);
      const data = await service.getAll("products");
      setProducts(data);
    } catch (err) {
      console.error("Failed to load products:", err);
    } finally {
      setLoading(false);
    }
  };

  const updateFilters = <K extends keyof ProductFilters>(
    key: K,
    value: ProductFilters[K]
  ) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const cleanFilters = () => setFilters({});

  useEffect(() => {
    refreshProducts();
  }, [filters]);

  return (
    <ProductsContext.Provider
      value={{
        products,
        loading,
        filters,
        setFilters,
        cleanFilters,
        updateFilters,
        refreshProducts,
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
