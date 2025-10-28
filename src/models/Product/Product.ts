import type { MonetaryAmount } from "../MonetaryAmount/MonetaryAmount";
import type { Currency } from "./Currency";
import type { Dimension } from "./Dimension";
import type { Review } from "./Review";

export interface Product {
  id: number;
  name: string;
  shortDescription: string;
  longDescription?: string;
  categoryIds: number[]; // category ids
  supplierIds: number[]; // supplier ids
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
