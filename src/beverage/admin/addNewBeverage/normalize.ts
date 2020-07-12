import { DataType } from './Data.type';

const normalize = ({
  added,
  badge,
  barcode,
  brand,
  container,
  contract = {},
  cooperation = {},
  name,
  notes,
  place = {},
  series = {},
  tale = {},
  updated,
  shortId,
}: DataType) => {
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
    ...(notes && {
      editorial: {
        ...(notes && { notes }),
      },
    }),
    added,
    ...(updated && { updated }),
    shortId,
  };
};

export default normalize;
