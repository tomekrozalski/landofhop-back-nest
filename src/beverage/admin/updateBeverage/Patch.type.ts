export type PatchType = {
  shortId: string;
  photos?: {
    cap?: boolean;
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
  added: Date;
};
