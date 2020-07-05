import { language } from 'utils/aggregation';
import { Beverage } from 'beverage/utils/types';
import { getNameAndBrandLanguage } from 'beverage/utils/aggregation';

const getLastTiles = function(amount): Beverage[] {
  return this.aggregate([
    {
      $lookup: {
        from: 'institutions',
        localField: 'label.general.brand',
        foreignField: '_id',
        as: 'label.general.brand_info',
      },
    },
    {
      $unwind: '$label.general.brand_info',
    },
    ...language,
    ...getNameAndBrandLanguage,
    { $sort: { added: -1 } },
    {
      $project: {
        _id: 0,
        id: '$_id',
        shortId: 1,
        badge: 1,
        brand: {
          badge: '$label.general.brand_info.badge',
          name: '$label.general.brand_info.name',
        },
        name: '$label.general.name',
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
    { $limit: +amount },
  ]);
};

export default getLastTiles;
