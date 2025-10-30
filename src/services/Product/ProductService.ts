import { BaseService } from "../BaseService";
import type { Product } from "../../models/Product/Product";
import { products, productParams, biData } from "../../database";
import type { ProductParams } from "../../models/Product/ProductParams";
import type { BiData } from "../../models/BusinessIntelligence/BiData";
import { sleep } from "../../utils/Utils";

const baseUrl = "BASE_URL_HERE";

export class ProductService extends BaseService<Product> {
  constructor() {
    super(baseUrl);
  }

  async getProducts(): Promise<Product[]> {
    await sleep(5000);
    return products;
  }

  async getParams(): Promise<ProductParams> {
    return productParams;
  }

  async getBiData(): Promise<BiData> {
    await sleep(10000);
    return biData;
  }

  async deleteProducts(ids: number[]): Promise<string> {
    console.log(`Requested to delete products of IDs [${ids.join(", ")}]`);
    return "Deleted successfully!";
  }
}
