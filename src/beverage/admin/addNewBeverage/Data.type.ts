export type DataType = {
  added?: Date;
  badge: string;
  barcode?: string;
  brand: string;
  container: {
    color: string;
    material: string;
    type: string;
    unit: string;
    value: number;
  };
  contract?: {
    label?: string;
  };
  cooperation?: {
    label?: string[];
  };
  name: {
    language?: string;
    value: string;
  }[];
  notes?: string;
  place?: {
    label?: string;
  };
  series?: {
    label?: { language?: string; value: string }[];
  };
  tale?: {
    label?: { language?: string; value: string }[];
    producer?: { language?: string; value: string }[];
  };
  updated?: Date;
  shortId: string;
};
