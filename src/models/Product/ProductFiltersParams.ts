import type { CategoryMinimal } from "../Category/CategoryMinimal";
import type { SupplierMinimal } from "../Supplier/SupplierMinimal";

export interface ProductFiltersParams {
  categories: CategoryMinimal[];
  suppliers: SupplierMinimal[];
}
