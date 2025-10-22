import React, { createContext, useContext, useState, useEffect } from "react";
import type { Product } from "../models/Product/Product";
import type { ProductFilters } from "../models/Product/ProductFilters";
import { ProductService } from "../services/Product/ProductService";

interface ProductContextProps {
  products: Product[];
  loading: boolean;
  filters: ProductFilters;
  setFilters: (filters: ProductFilters) => void;
  refreshProducts: (filters?: ProductFilters) => Promise<void>;
}

const ProductContext = createContext<ProductContextProps | undefined>(
  undefined
);

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({
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

  useEffect(() => {
    refreshProducts();
  }, [filters]);

  return (
    <ProductContext.Provider
      value={{ products, loading, filters, setFilters, refreshProducts }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = (): ProductContextProps => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProductContext must be used within a ProductProvider");
  }
  return context;
};
