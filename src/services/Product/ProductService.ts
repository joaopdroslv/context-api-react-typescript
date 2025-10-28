import { BaseService } from "../BaseService";
import type { Product } from "../../models/Product/Product";
import { products } from "../../database";

const baseUrl = "";

export class ProductService extends BaseService<Product> {
  constructor() {
    super(baseUrl);
  }

  async getAll(): Promise<Product[]> {
    return products;
  }
}
