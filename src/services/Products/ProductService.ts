import { BaseService } from "../BaseService";
import type { Product } from "../../models/Product/Product";

export class ProductService extends BaseService<Product> {
  constructor() {
    super("https://fakestoreapi.com");
  }
}
