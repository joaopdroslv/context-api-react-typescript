import type { MonetaryAmount } from "../Money/MonetaryAmount";
import type { Currency } from "../Money/Currency";
import type { Dimension } from "./Dimension";
import type { Review } from "./Review";
import type { Supplier } from "../Supplier/Supplier";
import type { Category } from "../Category/Category";

export interface Product {
  id: number;
  name: string;
  shortDescription: string;
  longDescription?: string;
  categories: Category[]; // categories
  suppliers: Supplier[]; // suppliers
  price: MonetaryAmount; // sale price
  cost?: MonetaryAmount; // cost from supplier
  currency: Currency;
  stockQuantity: number;
  stockLocation?: string;
  weightGrams?: number;
  dimensions?: Dimension;
  tags?: string[];
  images?: string[]; // urls (placeholders)
  releaseDate?: string;
  discontinued?: boolean;
  rating?: number;
  reviews?: Review[];
  extra?: Record<string, any>;
}
