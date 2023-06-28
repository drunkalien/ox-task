export type ProductType = {
  id: number;
  taxable: boolean;
  shippable: boolean;
  countable: boolean;
  cookable: boolean;
  composite: boolean;
  scalable: boolean;
  tracking: boolean;
  sellable: boolean;
  vatPercent: any;
  name: string;
  technicalCardId: any;
  writeOffMethod: number;
  countInBox: any;
  zone: number;
  unit: string;
  properties: Property[];
  videos: any[];
  productProperties: ProductProperty[];
  barcode: string;
  showMarket: boolean;
  lastUpdateTime: string;
  technicalCard: boolean;
  baseUnitRatio: any;
  product: number;
  sku: string;
  crossSellTags: any;
  category: number;
  supplier: string;
  supplierId: number;
  productName: string;
  brand: number;
  description: string;
  importProperties: any[];
  recSellPrice: any;
  recSupplierPrice: any;
  correctionType: number;
  shortDescription: string;
  stocks: Stock[];
  images: Image[];
  analogs: any[];
  modifiers: any[];
  tags: any[];
};

export type Property = {
  name: string;
  value: string;
};

export type ProductProperty = {
  name: string;
  value: string;
};

export type Stock = {
  id: string;
  tracking: boolean;
  countable: boolean;
  composite: boolean;
  properties: any[];
  sellPrice: SellPrice;
  supplyPrice: SupplyPrice;
  imported: string;
  impport: number;
  originalImport: number;
  transfer: any;
  importCount: string;
  transferCount: string;
  originalImportCount: string;
  supplier: number;
  count: number;
  location: number;
  expirationDate: any;
};

export type SellPrice = {
  UZS: number;
  USD: number;
  ratio: Ratio;
  first: string;
};

export type Ratio = {
  "UZS/USD": number;
};

export type SupplyPrice = {
  UZS: number;
  USD: number;
  ratio: Ratio2;
  first: string;
};

export type Ratio2 = {
  "USD/UZS": number;
};

export type Image = {
  id: number;
  brand: number;
  zone: number;
  originalName: string;
  name: string;
  extension: string;
  mimeType: string;
  createdAt: string;
  updatedAt: string;
  sort: number;
  urls: Urls;
};

export type Urls = {
  "50x_": any;
  "100x_": any;
  "150x_": any;
  "300x_": any;
  "500x_": any;
  "800x_": any;
  original: any;
};

export type VariationsResponseType = {
  items: ProductType[];
  total_count: number;
  page: number;
};
