import { ContainerType } from 'beverage/utils/enums';

export type TileType = {
  id: string;
  shortId: string;
  badge: string;
  brand: {
    badge: string;
    name: {
      value: string;
      language?: string;
    };
  };
  name: {
    value: string;
    language?: string;
  };
  photos: {
    cover: {
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
