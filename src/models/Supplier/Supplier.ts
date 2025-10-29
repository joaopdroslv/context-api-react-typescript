import type { Contact } from "../Contact/Contact";
import type { Address } from "../Address/Address";

export interface Supplier {
  id: number;
  name: string;
  legalName?: string;
  website?: string;
  contact: Contact;
  address: Address;
  rating?: number; // 0-5
  leadTimeDays?: number; // average lead time
  minOrderQty?: number;
  paymentTerms?: string; // e.g. NET30
  productIds?: number[]; // product ids they commonly supply
  notes?: string;
}

export interface SupplierMinimal {
  id: number;
  name: string;
}
