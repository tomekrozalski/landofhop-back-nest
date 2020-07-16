import { isBoolean } from 'lodash';

import { DataType } from './Data.type';

const normalize = ({
  added,
  alcohol = {},
  badge,
  barcode,
  brand,
  container,
  contract = {},
  cooperation = {},
  extract = {},
  fermentation = {},
  filtration = {},
  name,
  notes,
  pasteurization = {},
  place = {},
  series = {},
  tale = {},
  updated,
  shortId,
  style = {},
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
      ...((fermentation.label ||
        style.label ||
        alcohol.label ||
        extract.label ||
        isBoolean(filtration.label) ||
        isBoolean(pasteurization.label)) && {
        brewing: {
          ...(fermentation.label && { fermentation: fermentation.label }),
          ...(style.label && { style: style.label }),
          ...(alcohol.label && { alcohol: alcohol.label }),
          ...(extract.label && { extract: extract.label }),
          ...(isBoolean(filtration.label) && { filtration: filtration.label }),
          ...(isBoolean(pasteurization.label) && {
            pasteurization: pasteurization.label,
          }),
        },
      }),
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
