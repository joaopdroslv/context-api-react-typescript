import type { CategoryMinimal } from "../Category/Category";
import type { SupplierMinimal } from "../Supplier/Supplier";

export interface ProductFiltersParams {
  categories: CategoryMinimal[];
  suppliers: SupplierMinimal[];
}
