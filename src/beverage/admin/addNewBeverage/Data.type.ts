export type DataType = {
  added?: Date;
  aged?: {
    label?: {
      type?: string;
      wood?: string;
      time?: {
        unit: string;
        value: number;
      };
      previousContent?: string[];
    }[];
  };
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
  expirationDate?: {
    label?: {
      unit: string;
      value: number;
    };
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
  ingredientsDescription?: {
    label?: {
      language;
      value;
      complete;
    }[];
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
