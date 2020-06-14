import { RawBeverage } from 'utils/types/beverage/beverageSearch';
import { language } from './common/aggregation';
import { institution, ingredient, place } from './common/aggregation/beverage';
import { editorial, label, producer } from './common/project/beverage';

const beverageSearch = function(phrase: string): RawBeverage {
  return this.aggregate([
    ...institution,
    ...place,
    ...ingredient,
    ...language,
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

export default beverageSearch;
