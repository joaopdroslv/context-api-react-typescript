import type { CategoryMinimal } from "../Category/Category";
import type { SupplierMinimal } from "../Supplier/Supplier";

export interface ProductParams {
  categories: CategoryMinimal[];
  suppliers: SupplierMinimal[];
}
