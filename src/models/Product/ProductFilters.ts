export interface ProductFilters {
  keywords?: string[];
  categories_ids?: number[];
  suppliers_ids?: number[];
  price_min?: number;
  price_max?: number;
  cost_min?: number;
  cost_max?: number;
  rate_min?: number;
  rate_max?: number;
}
