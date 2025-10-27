export interface ProductFilters {
  keywords?: string[];
  categoriesIds?: number[];
  suppliersIds?:number[];
  price_min?: number;
  price_max?: number;
  rate_min?: number;
  rate_max?: number;
}
