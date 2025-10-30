import React, {
  type FC,
  type ReactNode,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
import type { Product } from "../../models/Product/Product";
import type { ProductParams } from "../../models/Product/ProductParams";
import type { ProductFilters } from "../../models/Product/ProductFilters";
import { ProductService } from "../../services/Product/ProductService";
import { useToast } from "../../hooks/useToast";
import { toast } from "react-toastify";
import type { BiData } from "../../models/BusinessIntelligence/BiData";

interface ProductsContextProps {
  loadingProducts: boolean;
  products: Product[];
  getProducts: (filters?: ProductFilters) => Promise<void>;
  deleteProducts: (id: number[]) => Promise<void>;
  filters: ProductFilters;
  setFilters: (filters: ProductFilters) => void;
  updateFilters: <K extends keyof ProductFilters>(
    key: K,
    value: ProductFilters[K]
  ) => void;
  clearFilters: () => void;
  loadingProductParams: boolean;
  productParams: ProductParams;
  // setProductParams: (params: ProductParams) => void;
  loadingBiData: boolean;
  biData: BiData;
  // setBiData: (biData: BiData) => void;
}

const emptyProductFilters: ProductFilters = {
  keywords: [],
  categories_ids: [],
  suppliers_ids: [],
  price_min: 0,
  price_max: 9999,
  cost_min: 0,
  cost_max: 9999,
  rate_min: 0,
  rate_max: 5,
};

const emptyProductParams: ProductParams = {
  categories: [],
  suppliers: [],
};

const emptyBiData: BiData = {
  productStats: [],
};

const ProductsContext = createContext<ProductsContextProps | undefined>(
  undefined
);

export const ProductsProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [loadingProducts, setLoadingProducts] = useState<boolean>(true);
  const [products, setProducts] = useState<Product[]>([]);
  const [filters, setFilters] = useState<ProductFilters>(emptyProductFilters);
  const [loadingProductParams, setLoadingProductParams] =
    useState<boolean>(true);
  const [productParams, setProductParams] =
    useState<ProductParams>(emptyProductParams);
  const [loadingBiData, setLoadingBiData] = useState<boolean>(true);
  const [biData, setBiData] = useState<BiData>(emptyBiData);
  const service = new ProductService();
  const { showToast } = useToast();

  const getProducts = async (f: ProductFilters = filters): Promise<void> => {
    setLoadingProducts(true);
    try {
      console.log(f);
      const data = await service.getProducts();
      setProducts(data);
      toast.success("Products loaded successfully!");
    } catch (err) {
      toast.error("Failed to load products!");
    } finally {
      setLoadingProducts(false);
    }
  };

  const getParams = async (): Promise<void> => {
    setLoadingProductParams(true);
    try {
      const data = await service.getParams();
      setProductParams(data);
      toast.success("Filters params loaded successfully!");
    } catch (err) {
      toast.error("Failed to load filters params!");
    } finally {
      setLoadingProductParams(false);
    }
  };

  const getBiData = async (): Promise<void> => {
    setLoadingBiData(true);
    try {
      const data = await service.getBiData();
      setBiData(data);
      toast.success("Bi data loaded successfully!");
    } catch (err) {
      toast.error("Failed to load bi data!");
    } finally {
      setLoadingBiData(false);
    }
  };

  const deleteProducts = async (ids: number[]): Promise<void> => {
    try {
      const msg = await service.deleteProducts(ids);
      toast.success(msg);
    } catch (err) {
      toast.error("Failed to delete the product!");
    }
  };

  useEffect(() => {
    getProducts(filters);
    getParams();
    getBiData();
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
      price_max: 9999,
      cost_min: 0,
      cost_max: 9999,
      rate_min: 0,
      rate_max: 5,
    });

  return (
    <ProductsContext.Provider
      value={{
        loadingProducts,
        products,
        getProducts,
        deleteProducts,
        filters,
        setFilters,
        clearFilters,
        updateFilters,
        loadingProductParams,
        productParams,
        loadingBiData,
        biData,
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
