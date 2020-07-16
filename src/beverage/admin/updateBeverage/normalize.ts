import { isBoolean } from 'lodash';

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
    alcohol = {},
    badge,
    barcode,
    brand,
    container,
    contract = {},
    cooperation = {},
    extract = {},
    fermentation = {},
    // id, - have it, but not use
    filtration = {},
    name,
    notes,
    pasteurization = {},
    place = {},
    series = {},
    style = {},
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
