export type DataType = {
  added?: Date;
  alcohol?: {
    label?: {
      relate: string;
      scope?: string;
      unit: string;
      value: number;
    };
  };
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
  extract?: {
    label?: {
      relate: string;
      unit: string;
      value: number;
    };
  };
  fermentation?: {
    label?: string[];
  };
  filtration?: {
    label?: boolean;
  };
  name: {
    language?: string;
    value: string;
  }[];
  notes?: string;
  pasteurization?: {
    label?: boolean;
  };
  place?: {
    label?: string;
  };
  series?: {
    label?: { language?: string; value: string }[];
  };
  style?: {
    label?: { language?: string; value: string }[];
  };
  tale?: {
    label?: { language?: string; value: string }[];
    producer?: { language?: string; value: string }[];
  };
  updated?: Date;
  shortId: string;
};