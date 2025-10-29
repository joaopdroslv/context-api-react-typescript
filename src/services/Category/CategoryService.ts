import { BaseService } from "../BaseService";
import type { Category } from "../../models/Category/Category";
import { categories } from "../../database";

const baseUrl = "BASE_URL_HERE";

export class CategoryService extends BaseService<Category> {
  constructor() {
    super(baseUrl);
  }

  async getAll(): Promise<Category[]> {
    return categories;
  }
}
