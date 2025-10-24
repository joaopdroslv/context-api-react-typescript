export type Currency = "USD" | "EUR" | "BRL" | "GBP";

export interface Address {
  street: string;
  city: string;
  state?: string;
  postalCode?: string;
  country: string;
}

export interface Contact {
  name: string;
  email: string;
  phone?: string;
  role?: string;
}

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

export interface Dimension {
  widthMm?: number;
  heightMm?: number;
  depthMm?: number;
}

export interface Review {
  id: number;
  author: string;
  rating: number; // 1-5
  comment?: string;
  date: string;
}

export interface MonetaryAmount {
  amount: number;
  currency: Currency;
}

export interface Category {
  id: number;
  name: string;
  description?: string;
}

export interface Product {
  id: number;
  name: string;
  shortDescription: string;
  longDescription?: string;
  categoryIds: number[]; // category ids
  supplierIds: number[]; // supplier ids
  price: MonetaryAmount; // sale price
  cost?: MonetaryAmount; // cost from supplier
  currency: Currency;
  stockQuantity: number;
  stockLocation?: string;
  weightGrams?: number;
  dimensions?: Dimension;
  tags?: string[];
  images?: string[]; // urls (placeholders)
  releaseDate?: string;
  discontinued?: boolean;
  rating?: number;
  reviews?: Review[];
  extra?: Record<string, any>;
}

export const categories: Category[] = [
  {
    id: 1,
    name: "Electronics",
    description: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    id: 2,
    name: "Home & Living",
    description: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    id: 3,
    name: "Sports & Outdoors",
    description: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    id: 4,
    name: "Fashion",
    description: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    id: 5,
    name: "Toys & Kids",
    description: "Lorem ipsum dolor sit amet, consectetur.",
  },
];

export const suppliers: Supplier[] = [
  {
    id: 1,
    name: "NorthStar Electronics Ltd.",
    legalName: "NorthStar Electronics Limited",
    website: "https://www.northstarelectronics.example",
    contact: {
      name: "Ava Morgan",
      email: "ava.morgan@northstar.example",
      phone: "+1-212-555-0164",
      role: "Sales Manager",
    },
    address: {
      street: "120 Tech Park Ave",
      city: "Newark",
      state: "NJ",
      postalCode: "07102",
      country: "USA",
    },
    rating: 4.6,
    leadTimeDays: 14,
    minOrderQty: 10,
    paymentTerms: "NET30",
    productIds: [1, 7],
    notes:
      "Specializes in consumer electronics and components. ISO9001 certified.",
  },
  {
    id: 2,
    name: "CasaComfort Supplies",
    website: "https://www.casacomfort.example",
    contact: {
      name: "Lucas Pereira",
      email: "lucas@casacomfort.example",
      phone: "+55-11-98765-4321",
      role: "Account Executive",
    },
    address: {
      street: "Rua das Flores 400",
      city: "São Paulo",
      state: "SP",
      postalCode: "01000-000",
      country: "Brazil",
    },
    rating: 4.2,
    leadTimeDays: 7,
    minOrderQty: 5,
    paymentTerms: "NET15",
    productIds: [3, 9],
    notes: "Good for small-batch home goods. Offers drop-shipping.",
  },
  {
    id: 3,
    name: "Peak Performance Gear",
    website: "https://www.peakperformance.example",
    contact: {
      name: "Emma Johnson",
      email: "emma.j@peakperformance.example",
      phone: "+44-20-7946-0011",
      role: "Head of Partnerships",
    },
    address: {
      street: "45 Hill Lane",
      city: "London",
      state: "",
      postalCode: "NW1 4YE",
      country: "UK",
    },
    rating: 4.7,
    leadTimeDays: 10,
    minOrderQty: 20,
    paymentTerms: "NET30",
    productIds: [4, 10],
    notes: "High-end sports equipment manufacturer. Custom branding available.",
  },
  {
    id: 4,
    name: "UrbanStyle Apparel Co.",
    legalName: "UrbanStyle Apparel Company",
    website: "https://www.urbanstyle.example",
    contact: {
      name: "Miguel Santos",
      email: "miguel@urbanstyle.example",
      phone: "+55-21-3344-5566",
      role: "Procurement Lead",
    },
    address: {
      street: "Avenida Central 210",
      city: "Rio de Janeiro",
      state: "RJ",
      postalCode: "20000-000",
      country: "Brazil",
    },
    rating: 4.1,
    leadTimeDays: 21,
    minOrderQty: 50,
    paymentTerms: "NET45",
    productIds: [5],
    notes: "Focus on streetwear and seasonal collections.",
  },
  {
    id: 5,
    name: "BrightToys International",
    website: "https://www.brighttoys.example",
    contact: {
      name: "Sofia Rinaldi",
      email: "sofia@brighttoys.example",
      phone: "+39-06-5566-7788",
      role: "Export Manager",
    },
    address: {
      street: "Via Roma 12",
      city: "Rome",
      state: "",
      postalCode: "00100",
      country: "Italy",
    },
    rating: 4.3,
    leadTimeDays: 18,
    minOrderQty: 30,
    paymentTerms: "NET30",
    productIds: [6],
    notes: "Compliant with CE standards. Good design catalog.",
  },
  {
    id: 6,
    name: "Global Components Inc.",
    website: "https://www.globalcomponents.example",
    contact: {
      name: "Noah Kim",
      email: "noah.kim@globalcomponents.example",
      phone: "+82-2-345-6789",
      role: "Sales Director",
    },
    address: {
      street: "100 Industrial Rd",
      city: "Seoul",
      state: "",
      postalCode: "04524",
      country: "South Korea",
    },
    rating: 4.5,
    leadTimeDays: 12,
    minOrderQty: 100,
    paymentTerms: "Letter of Credit / NET30",
    productIds: [2, 7],
    notes: "OEM/ODM services, component sourcing.",
  },
  {
    id: 7,
    name: "EcoHome Fabrics",
    website: "https://www.ecohome.example",
    contact: {
      name: "Olivia Green",
      email: "olivia@ecohome.example",
      phone: "+1-415-555-0199",
      role: "Business Development",
    },
    address: {
      street: "22 Greenway Blvd",
      city: "San Francisco",
      state: "CA",
      postalCode: "94105",
      country: "USA",
    },
    rating: 4.4,
    leadTimeDays: 9,
    minOrderQty: 25,
    paymentTerms: "NET30",
    productIds: [3, 9],
    notes: "Sustainable textiles and eco-friendly home goods.",
  },
  {
    id: 8,
    name: "PlayPeak Distributors",
    website: "https://www.playpeak.example",
    contact: {
      name: "Ethan Brown",
      email: "ethan@playpeak.example",
      phone: "+61-2-9123-4455",
      role: "Regional Sales",
    },
    address: {
      street: "5 Harbor St",
      city: "Sydney",
      state: "NSW",
      postalCode: "2000",
      country: "Australia",
    },
    rating: 4.0,
    leadTimeDays: 16,
    minOrderQty: 15,
    paymentTerms: "NET30",
    productIds: [6],
    notes: "Good logistics in APAC region.",
  },
  {
    id: 9,
    name: "MetroElectro Parts",
    website: "https://www.metroelectro.example",
    contact: {
      name: "Liam O'Connor",
      email: "liam@metroelectro.example",
      phone: "+353-1-234-5678",
      role: "Operations Manager",
    },
    address: {
      street: "3 Dock Street",
      city: "Dublin",
      state: "",
      postalCode: "D01",
      country: "Ireland",
    },
    rating: 3.9,
    leadTimeDays: 20,
    minOrderQty: 50,
    paymentTerms: "NET30",
    productIds: [2, 8],
    notes: "Affordable components, variable quality depending on batch.",
  },
  {
    id: 10,
    name: "FamilyFun Toys Co.",
    website: "https://www.familyfun.example",
    contact: {
      name: "Isabella Torres",
      email: "isabella@familyfun.example",
      phone: "+52-55-1234-5678",
      role: "Sales",
    },
    address: {
      street: "Calle Alegre 88",
      city: "Mexico City",
      state: "CDMX",
      postalCode: "01000",
      country: "Mexico",
    },
    rating: 4.0,
    leadTimeDays: 11,
    minOrderQty: 10,
    paymentTerms: "NET30",
    productIds: [6],
    notes: "Mass-market toys, competitive pricing.",
  },
];

function mkPrice(a: number, c: Currency = "USD"): MonetaryAmount {
  return { amount: parseFloat(a.toFixed(2)), currency: c };
}

export const products: Product[] = [
  {
    id: 1,
    name: "NorthStar Smart Speaker",
    shortDescription:
      "Compact voice-controlled smart speaker. Lorem ipsum dolor sit amet.",
    longDescription:
      "High-fidelity smart speaker with voice assistant, Bluetooth, and multi-room support.",
    categoryIds: [1],
    supplierIds: [1],
    price: mkPrice(99.99),
    cost: mkPrice(55.0),
    currency: "USD",
    stockQuantity: 320,
    stockLocation: "WH-A1",
    weightGrams: 780,
    dimensions: { widthMm: 95, heightMm: 165, depthMm: 95 },
    tags: ["smart-home", "audio", "voice-assistant"],
    images: ["https://images.example/northstar-speaker.jpg"],
    releaseDate: "2024-09-10",
    discontinued: false,
    rating: 4.5,
    reviews: [
      {
        id: 1,
        author: "J. Parker",
        rating: 5,
        comment: "Great sound for the size.",
        date: "2025-01-10",
      },
    ],
    extra: { warrantyMonths: 24 },
  },
  {
    id: 2,
    name: "Global USB-C Fast Charger",
    shortDescription: "30W USB-C fast charger.",
    longDescription:
      "Portable 30W USB-C PD charger with safety protections and foldable plug.",
    categoryIds: [1],
    supplierIds: [6, 9],
    price: mkPrice(24.5),
    cost: mkPrice(8.0),
    currency: "USD",
    stockQuantity: 1500,
    stockLocation: "WH-A2",
    weightGrams: 60,
    dimensions: { widthMm: 40, heightMm: 55, depthMm: 28 },
    tags: ["charger", "accessory"],
    images: ["https://images.example/usb-c-charger.jpg"],
    releaseDate: "2023-05-20",
    discontinued: false,
    rating: 4.2,
    reviews: [],
    extra: { certifications: ["CE", "FCC"] },
  },
  {
    id: 3,
    name: "CasaComfort Cotton Throw Pillow",
    shortDescription: "Handmade cotton throw pillow.",
    longDescription:
      "Soft, breathable cotton cover with hypoallergenic filling. Perfect for sofas and bedrooms.",
    categoryIds: [2],
    supplierIds: [2, 7],
    price: mkPrice(29.99, "BRL"),
    cost: mkPrice(10, "BRL"),
    currency: "BRL",
    stockQuantity: 420,
    stockLocation: "WH-B1",
    weightGrams: 450,
    dimensions: { widthMm: 400, heightMm: 400, depthMm: 120 },
    tags: ["home", "textile", "eco-friendly"],
    images: ["https://images.example/cotton-pillow.jpg"],
    releaseDate: "2024-02-01",
    discontinued: false,
    rating: 4.0,
    reviews: [
      {
        id: 2,
        author: "M. Souza",
        rating: 4,
        comment: "Comfortable and good value.",
        date: "2025-04-02",
      },
    ],
    extra: { material: "100% cotton" },
  },
  {
    id: 4,
    name: "Peak Performance Running Shoes",
    shortDescription: "Lightweight running shoes for road and trail.",
    longDescription:
      "Breathable mesh, responsive sole, available in multiple sizes. Engineered for long-distance comfort.",
    categoryIds: [3],
    supplierIds: [3],
    price: mkPrice(129.99, "GBP"),
    cost: mkPrice(60, "GBP"),
    currency: "GBP",
    stockQuantity: 210,
    stockLocation: "WH-C1",
    weightGrams: 720,
    dimensions: { widthMm: 120, heightMm: 80, depthMm: 300 },
    tags: ["footwear", "running"],
    images: ["https://images.example/peak-shoes.jpg"],
    releaseDate: "2025-03-15",
    discontinued: false,
    rating: 4.7,
    reviews: [
      {
        id: 3,
        author: "E. Johnson",
        rating: 5,
        comment: "Best shoe for marathons.",
        date: "2025-05-01",
      },
    ],
    extra: { sizes: [38, 39, 40, 41, 42, 43, 44] },
  },
  {
    id: 5,
    name: "UrbanStyle Denim Jacket",
    shortDescription: "Classic denim jacket with modern fit.",
    longDescription:
      "Durable denim, reinforced stitching, available in three washes.",
    categoryIds: [4],
    supplierIds: [4],
    price: mkPrice(79.0, "BRL"),
    cost: mkPrice(32.0, "BRL"),
    currency: "BRL",
    stockQuantity: 95,
    stockLocation: "WH-D1",
    weightGrams: 980,
    dimensions: { widthMm: 520, heightMm: 680, depthMm: 40 },
    tags: ["jacket", "denim", "fashion"],
    images: ["https://images.example/denim-jacket.jpg"],
    releaseDate: "2024-08-01",
    discontinued: false,
    rating: 4.1,
    reviews: [],
    extra: { care: "Machine wash cold" },
  },
  {
    id: 6,
    name: "BrightToys Building Blocks Set",
    shortDescription: "120-piece building blocks.",
    longDescription:
      "High-quality ABS blocks, compatible with major brands. Encourages creativity and motor skills.",
    categoryIds: [5],
    supplierIds: [5, 10],
    price: mkPrice(39.99, "USD"),
    cost: mkPrice(12.0, "USD"),
    currency: "USD",
    stockQuantity: 760,
    stockLocation: "WH-E1",
    weightGrams: 1500,
    dimensions: { widthMm: 300, heightMm: 260, depthMm: 90 },
    tags: ["blocks", "education", "kids"],
    images: ["https://images.example/building-blocks.jpg"],
    releaseDate: "2021-11-11",
    discontinued: false,
    rating: 4.4,
    reviews: [
      {
        id: 4,
        author: "Parent101",
        rating: 4,
        comment: "Kids love it.",
        date: "2024-12-12",
      },
    ],
    extra: { recommendedAge: "3+" },
  },
  {
    id: 7,
    name: "NorthStar Bluetooth Headphones",
    shortDescription: "Over-ear Bluetooth headphones.",
    longDescription: "Noise-cancelling, 30-hour battery life, comfortable fit.",
    categoryIds: [1],
    supplierIds: [1, 6],
    price: mkPrice(149.99),
    cost: mkPrice(80),
    currency: "USD",
    stockQuantity: 260,
    stockLocation: "WH-A3",
    weightGrams: 320,
    dimensions: { widthMm: 180, heightMm: 210, depthMm: 80 },
    tags: ["audio", "headphones"],
    images: ["https://images.example/ns-headphones.jpg"],
    releaseDate: "2023-10-05",
    discontinued: false,
    rating: 4.3,
    reviews: [],
  },
  {
    id: 8,
    name: "Global HDMI 2.1 Cable 2m",
    shortDescription: "High-speed HDMI cable.",
    longDescription:
      "Supports 4K@120Hz and HDR. Braided shield and gold-plated connectors.",
    categoryIds: [1],
    supplierIds: [9],
    price: mkPrice(18.75),
    cost: mkPrice(4.5),
    currency: "USD",
    stockQuantity: 2400,
    stockLocation: "WH-A4",
    weightGrams: 120,
    dimensions: { widthMm: 2000, heightMm: 5, depthMm: 5 },
    tags: ["cable", "hdmi"],
    images: ["https://images.example/hdmi-cable.jpg"],
    releaseDate: "2022-06-10",
    discontinued: false,
    rating: 4.0,
    reviews: [],
  },
  {
    id: 9,
    name: "CasaComfort Bamboo Bath Mat",
    shortDescription: "Eco bamboo bath mat.",
    longDescription:
      "Anti-slip backing, quick-dry bamboo slats, natural finish.",
    categoryIds: [2],
    supplierIds: [2, 7],
    price: mkPrice(45.0, "BRL"),
    cost: mkPrice(18.0, "BRL"),
    currency: "BRL",
    stockQuantity: 340,
    stockLocation: "WH-B2",
    weightGrams: 2200,
    dimensions: { widthMm: 600, heightMm: 20, depthMm: 400 },
    tags: ["bath", "eco"],
    images: ["https://images.example/bamboo-mat.jpg"],
    releaseDate: "2024-04-01",
    discontinued: false,
    rating: 4.2,
    reviews: [],
  },
  {
    id: 10,
    name: "Peak Performance Yoga Mat",
    shortDescription: "Non-slip yoga mat.",
    longDescription: "Eco TPE material, 6mm thick, travel-friendly.",
    categoryIds: [3],
    supplierIds: [3],
    price: mkPrice(39.0, "USD"),
    cost: mkPrice(15.0, "USD"),
    currency: "USD",
    stockQuantity: 520,
    stockLocation: "WH-C2",
    weightGrams: 1100,
    dimensions: { widthMm: 680, heightMm: 6, depthMm: 1830 },
    tags: ["yoga", "fitness"],
    images: ["https://images.example/yoga-mat.jpg"],
    releaseDate: "2021-07-20",
    discontinued: false,
    rating: 4.5,
    reviews: [],
  },
];
