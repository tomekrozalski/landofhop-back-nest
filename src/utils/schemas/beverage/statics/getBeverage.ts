import { Beverage } from 'utils/types';
import { language } from 'utils/schemas/common/aggregation';
import { institution, ingredient, place } from './common/aggregation';
import { editorial, label, producer } from './common/project';

const getBeverage = function(
  badge: string,
  brand: string,
  shortId: string,
): Beverage[] {
  return this.aggregate([
    ...institution,
    ...place,
    ...ingredient,
    ...language,
    {
      $match: {
        badge: badge,
        'label.general.brand_info.badge': brand,
        shortId: shortId,
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
  ]);
};

export default getBeverage;
