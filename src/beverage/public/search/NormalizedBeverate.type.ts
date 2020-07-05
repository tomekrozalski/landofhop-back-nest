import { LanguageValue } from 'utils/types';
import { ContainerType } from 'beverage/utils/enums';

export type NormalizedBeverageType = {
  id: string;
  shortId: string;
  badge: string;
  name: LanguageValue;
  brand: {
    badge: string;
    name: LanguageValue;
  };
  photos?: {
    cover?: {
      height: number;
      width: number;
    };
    outlines?: {
      cover?: string;
    };
  };
  container: {
    type: ContainerType;
  };
};
