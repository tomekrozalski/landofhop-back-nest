import { Beverage } from 'utils/types';
import { language } from './common/aggregation';
import { institution, ingredient, place } from './common/aggregation/beverage';
import { editorial, label, producer } from './common/project/beverage';

const getAllBeverages = function(): Beverage[] {
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
  ]);
};

export default getAllBeverages;
