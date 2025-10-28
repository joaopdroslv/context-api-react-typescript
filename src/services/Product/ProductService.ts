import { BaseService } from "../BaseService";
import type { Product } from "../../models/Product/Product";
import { products, productParams } from "../../database";
import type { ProductFiltersParams } from "../../models/Product/ProductFiltersParams";

const baseUrl = "";

export class ProductService extends BaseService<Product> {
  constructor() {
    super(baseUrl);
  }

  async getAll(): Promise<Product[]> {
    return products;
  }

  async getParams(): Promise<ProductFiltersParams> {
    return productParams;
  }
}
