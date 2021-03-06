import { language } from 'utils/aggregation';
import { institution, ingredient, place } from 'beverage/utils/aggregation';
import { editorial, label, producer } from 'beverage/utils/project';
import { RawBeverageType } from './RawBeverage.type';

const search = function(phrase: string): RawBeverageType {
  return this.aggregate([
    ...institution,
    ...place,
    ...ingredient,
    ...language,
    {
      $set: {
        'label.general.name_info': {
          $map: {
            input: '$label.general.name',
            as: 'names',
            in: {
              language: {
                $arrayElemAt: [
                  {
                    $filter: {
                      input: '$language',
                      as: 'values',
                      cond: { $eq: ['$$values.id', '$$names.language'] },
                    },
                  },
                  0,
                ],
              },
              value: '$$names.value',
            },
          },
        },
      },
    },
    {
      $set: {
        'label.general.name': {
          $map: {
            input: '$label.general.name_info',
            as: 'names',
            in: {
              language: '$$names.language.code',
              value: '$$names.value',
            },
          },
        },
      },
    },
    {
      $set: {
        'label.general.brand_language_info': {
          $map: {
            input: '$label.general.brand_info.name',
            as: 'names',
            in: {
              language: {
                $arrayElemAt: [
                  {
                    $filter: {
                      input: '$language',
                      as: 'values',
                      cond: { $eq: ['$$values.id', '$$names.language'] },
                    },
                  },
                  0,
                ],
              },
              value: '$$names.value',
            },
          },
        },
      },
    },
    {
      $set: {
        'label.general.brand_info.name': {
          $map: {
            input: '$label.general.brand_language_info',
            as: 'names',
            in: {
              language: '$$names.language.code',
              value: '$$names.value',
            },
          },
        },
      },
    },
    {
      $project: {
        _id: 0,
        id: '$_id',
        shortId: 1,
        badge: 1,
        ...{ label },
        ...{ producer },
        ...{ editorial },
        added: 1,
        updated: 1,
        language: 1,
      },
    },
    { $sort: { added: -1 } },
    {
      $match: {
        $or: [
          // FIND BY:
          // Badge
          { badge: { $regex: new RegExp(phrase, 'i') } },
          // Name
          { 'label.general.name.value': { $regex: new RegExp(phrase, 'i') } },
          // Brand name
          {
            'label.general.brand.name.value': {
              $regex: new RegExp(phrase, 'i'),
            },
          },
          // Series (label / producer)
          { 'label.general.series.value': { $regex: new RegExp(phrase, 'i') } },
          {
            'producer.general.series.value': {
              $regex: new RegExp(phrase, 'i'),
            },
          },
        ],
      },
    },
    {
      $project: {
        id: 1,
        shortId: 1,
        badge: 1,
        name: '$label.general.name',
        brand: {
          badge: '$label.general.brand.badge',
          name: '$label.general.brand.name',
        },
        photos: {
          cover: '$editorial.photos.cover',
          outlines: {
            cover: '$editorial.photos.outlines.cover',
          },
        },
        container: {
          type: '$label.container.type',
        },
      },
    },
  ]);
};

export default search;
