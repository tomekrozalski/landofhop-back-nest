import { language } from 'utils/aggregation';
import { Beverage } from 'beverage/utils/types';
import { institution, ingredient, place } from 'beverage/utils/aggregation';
import { editorial, label, producer } from 'beverage/utils/project';

const geDetails = function(
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

export default geDetails;
