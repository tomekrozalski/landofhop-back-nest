import { PatchType } from './Patch.type';

type Props = {
  data: {
    id: string;
    badge: string;
    name: {
      language?: string;
      value: string;
    }[];
    brand: string;
    container: {
      color: string;
      material: string;
      type: string;
      unit: string;
      value: number;
    };
    notes?: string;
    added?: Date;
  };
  patch: PatchType;
};

const normalize = ({ data, patch }: Props) => {
  return {
    badge: data.badge,
    label: {
      general: {
        name: data.name,
        brand: data.brand,
      },
      container: data.container,
    },
    ...((patch.photos || data.notes) && {
      editorial: {
        ...(patch.photos && { photos: patch.photos }),
        ...(data.notes && { notes: data.notes }),
      },
    }),
    added: data.added || patch.added,
    shortId: patch.shortId,
  };
};

export default normalize;
