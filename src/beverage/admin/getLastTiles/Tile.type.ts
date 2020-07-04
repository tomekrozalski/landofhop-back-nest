import { ContainerType } from 'utils/enums/beverage';

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
