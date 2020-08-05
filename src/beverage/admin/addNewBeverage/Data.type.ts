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
  bitterness?: {
    label?: number;
  };
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
    producer?: string;
  };
  cooperation?: {
    label?: string[];
    producer?: string[];
  };
  dryHopped?: {
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
  fullness?: {
    label?: number;
  };
  hoppyness?: {
    label?: number;
  };
  ingredientsDescription?: {
    label?: {
      language;
      value;
      complete;
    }[];
  };
  ingredientsList?: {
    label?: string[];
  };
  isDryHopped?: {
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
    producer?: string;
  };
  power?: {
    label?: number;
  };
  price?: {
    label?: {
      currency: string;
      date: Date;
      value: number;
    }[];
    editorial?: {
      currency: string;
      date: Date;
      value: number;
    }[];
  };
  series?: {
    label?: { language?: string; value: string }[];
    producer?: { language?: string; value: string }[];
  };
  smokedMalt?: {
    label?: boolean;
  };
  style?: {
    label?: { language?: string; value: string }[];
  };
  sweetness?: {
    label?: number;
  };
  tale?: {
    label?: { language?: string; value: string }[];
    producer?: { language?: string; value: string }[];
  };
  temperature?: {
    label?: {
      from: number;
      to: number;
      unit: string;
    };
  };
  updated?: Date;
  shortId: string;
};
