import { BaseService } from "../BaseService";
import type { Product } from "../../models/Product/Product";
import { products, productFiltersParams } from "../../database";
import type { ProductFiltersParams } from "../../models/Product/ProductFiltersParams";

const baseUrl = "BASE_URL_HERE";

export class ProductService extends BaseService<Product> {
  constructor() {
    super(baseUrl);
  }

  async getAll(): Promise<Product[]> {
    const sleep = (ms: number) =>
      new Promise((resolve) => setTimeout(resolve, ms));
    await sleep(5000);
    return products;
  }

  async getParams(): Promise<ProductFiltersParams> {
    return productFiltersParams;
  }
}
