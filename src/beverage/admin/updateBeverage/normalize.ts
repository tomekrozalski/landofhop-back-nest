import { isBoolean, isNumber } from 'lodash';

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
    aged = {},
    alcohol = {},
    badge,
    barcode,
    bitterness = {},
    brand,
    container,
    contract = {},
    cooperation = {},
    dryHopped = {},
    expirationDate = {},
    extract = {},
    fermentation = {},
    // id, - have it, but not use
    filtration = {},
    fullness = {},
    hoppyness = {},
    ingredientsDescription = {},
    ingredientsList = {},
    isDryHopped = {},
    name,
    notes,
    pasteurization = {},
    place = {},
    power = {},
    price = {},
    series = {},
    smokedMalt = {},
    style = {},
    sweetness = {},
    tale = {},
    temperature = {},
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
        isBoolean(pasteurization.label) ||
        aged.label ||
        dryHopped.label ||
        isBoolean(isDryHopped.label) ||
        expirationDate.label) && {
        brewing: {
          ...(fermentation.label && { fermentation: fermentation.label }),
          ...(style.label && { style: style.label }),
          ...(alcohol.label && { alcohol: alcohol.label }),
          ...(extract.label && { extract: extract.label }),
          ...(isBoolean(filtration.label) && { filtration: filtration.label }),
          ...(isBoolean(pasteurization.label) && {
            pasteurization: pasteurization.label,
          }),
          ...(aged.label && { aged: aged.label }),
          ...(dryHopped.label && { dryHopped: { hops: dryHopped.label } }),
          ...(isBoolean(isDryHopped.label) && {
            isDryHopped: isDryHopped.label,
          }),
          ...(expirationDate.label && { expirationDate: expirationDate.label }),
        },
      }),
      ...((ingredientsDescription.label ||
        ingredientsList.label ||
        smokedMalt.label) && {
        ingredients: {
          ...(ingredientsDescription.label && {
            description: ingredientsDescription.label,
          }),
          ...(ingredientsList.label && {
            list: ingredientsList.label,
          }),
          ...(isBoolean(smokedMalt.label) && {
            smokedMalt: smokedMalt.label,
          }),
        },
      }),
      ...((isNumber(bitterness.label) ||
        isNumber(sweetness.label) ||
        isNumber(fullness.label) ||
        isNumber(power.label) ||
        isNumber(hoppyness.label) ||
        temperature.label) && {
        impressions: {
          ...(isNumber(bitterness.label) && { bitterness: bitterness.label }),
          ...(isNumber(sweetness.label) && { sweetness: sweetness.label }),
          ...(isNumber(fullness.label) && { fullness: fullness.label }),
          ...(isNumber(power.label) && { power: power.label }),
          ...(isNumber(hoppyness.label) && { hoppyness: hoppyness.label }),
          ...(temperature.label && { temperature: temperature.label }),
        },
      }),
      container,
      ...(price.label && {
        price: price.label,
      }),
    },
    ...((series.producer ||
      contract.producer ||
      cooperation.producer ||
      place.producer ||
      tale.producer) && {
      producer: {
        ...((series.producer ||
          contract.producer ||
          cooperation.producer ||
          place.producer ||
          tale.producer) && {
          general: {
            ...(series.producer && { series: series.producer }),
            ...(contract.producer && { contract: contract.producer }),
            ...(cooperation.producer && { cooperation: cooperation.producer }),
            ...(place.producer && { place: place.producer }),
            ...(tale.producer && { tale: tale.producer }),
          },
        }),
      },
    }),
    ...((price.editorial || patch.photos || notes) && {
      editorial: {
        ...(price.editorial && {
          price: price.editorial,
        }),
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
