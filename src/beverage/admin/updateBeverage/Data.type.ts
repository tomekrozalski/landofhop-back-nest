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
    producer?: {
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
    producer?: {
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
    producer?: number;
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
    producer?: string[];
  };
  expirationDate?: {
    label?: {
      unit: string;
      value: number;
    };
    producer?: {
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
    producer?: {
      relate: string;
      unit: string;
      value: number;
    };
  };
  fermentation?: {
    label?: string[];
    producer?: string[];
  };
  filtration?: {
    label?: boolean;
    producer?: boolean;
  };
  fullness?: {
    label?: number;
    producer?: number;
  };
  hoppyness?: {
    label?: number;
    producer?: number;
  };
  id: string;
  ingredientsDescription?: {
    label?: {
      language;
      value;
      complete;
    }[];
    producer?: {
      language;
      value;
      complete;
    }[];
  };
  ingredientsList?: {
    label?: string[];
    producer?: string[];
  };
  isDryHopped?: {
    label?: boolean;
    producer?: boolean;
  };
  name: {
    language?: string;
    value: string;
  }[];
  notes?: string;
  pasteurization?: {
    label?: boolean;
    producer?: boolean;
  };
  place?: {
    label?: string;
    producer?: string;
  };
  power?: {
    label?: number;
    producer?: number;
  };
  price?: {
    label?: {
      currency: string;
      date: Date;
      value: number;
    }[];
    producer?: {
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
    producer?: boolean;
  };
  style?: {
    label?: { language?: string; value: string }[];
    producer?: { language?: string; value: string }[];
  };
  sweetness?: {
    label?: number;
    producer?: number;
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
    producer?: {
      from: number;
      to: number;
      unit: string;
    };
  };
  updated?: Date;
};
