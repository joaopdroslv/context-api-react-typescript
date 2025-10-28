import { BaseService } from "../BaseService";
import type { Supplier } from "../../models/Supplier/Supplier";
import { suppliers } from "../../database";

const baseUrl = "";

export class SupplierService extends BaseService<Supplier> {
  constructor() {
    super(baseUrl);
  }

  async getAll(): Promise<Supplier[]> {
    return suppliers;
  }
}
