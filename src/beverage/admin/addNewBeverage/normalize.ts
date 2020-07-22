import { isBoolean } from 'lodash';

import { DataType } from './Data.type';

const normalize = ({
  added,
  aged = {},
  alcohol = {},
  badge,
  barcode,
  brand,
  container,
  contract = {},
  cooperation = {},
  expirationDate = {},
  extract = {},
  fermentation = {},
  filtration = {},
  ingredientsDescription = {},
  ingredientsList = {},
  name,
  notes,
  pasteurization = {},
  place = {},
  series = {},
  smokedMalt = {},
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
        isBoolean(pasteurization.label) ||
        aged.label ||
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
