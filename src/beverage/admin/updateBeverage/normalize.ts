import { DataType } from './Data.type';
import { PatchType } from './Patch.type';

type Props = {
  data: DataType;
  patch: PatchType;
};

const normalize = ({ data, patch }: Props) => {
  console.log('data to normalize', data);

  const {
    added,
    badge,
    barcode,
    brand,
    container,
    contract = {},
    cooperation = {},
    // id, - have it, but not use
    name,
    notes,
    place = {},
    series = {},
    tale = {},
    updated,
  } = data;

  return {
    badge,
    label: {
      general: {
        name,
        ...(series.label && { series: series.label }),
        brand,
        ...(contract.label && { contract: contract.label }),
        ...(cooperation.label && { cooperation: cooperation.label }),
        ...(place.label && { place: place.label }),
        ...(tale.label && { tale: tale.label }),
        ...(barcode && { barcode }),
      },
      container,
    },
    ...(tale.producer && {
      producer: {
        ...(tale.producer && {
          general: {
            ...(tale.producer && { tale: tale.producer }),
          },
        }),
      },
    }),
    ...((patch.photos || notes) && {
      editorial: {
        ...(patch.photos && { photos: patch.photos }),
        ...(notes && { notes }),
      },
    }),
    added: added || patch.added,
    ...(updated && { updated }),
    shortId: patch.shortId,
  };
};

export default normalize;
