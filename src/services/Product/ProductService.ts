import { BaseService } from "../BaseService";
import type { Product } from "../../models/Product/Product";
import { products, productFiltersParams, biData } from "../../database";
import type { ProductFiltersParams } from "../../models/Product/ProductFiltersParams";
import type { BiData } from "../../models/BusinessIntelligence/BiData";
import { sleep } from "../../utils/Utils";

const baseUrl = "BASE_URL_HERE";

export class ProductService extends BaseService<Product> {
  constructor() {
    super(baseUrl);
  }

  async getAll(): Promise<Product[]> {
    await sleep(5000);
    return products;
  }

  async getParams(): Promise<ProductFiltersParams> {
    return productFiltersParams;
  }

  async getBiData(): Promise<BiData> {
    await sleep(10000)
    return biData;
  }
}
