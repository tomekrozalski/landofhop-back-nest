import { LanguageValue } from 'utils/types';
import { ContainerType } from 'beverage/utils/enums';

export type NormalizedBeverageType = {
  id: string;
  shortId: string;
  badge: string;
  brand: {
    badge: string;
    name: LanguageValue;
  };
  name: LanguageValue;
  photos?: {
    cover?: {
      height: number;
      width: number;
    };
    gallery?: number;
    outlines?: {
      cover?: string;
      gallery?: string;
    };
  };
  container: {
    type: ContainerType;
  };
};
