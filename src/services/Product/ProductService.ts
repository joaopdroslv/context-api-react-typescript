import { BaseService } from "../BaseService";
import type { Product } from "../../models/Product";

const baseUrl = "https://fakestoreapi.com";

export class ProductService extends BaseService<Product> {
  constructor() {
    super(baseUrl);
  }
}
