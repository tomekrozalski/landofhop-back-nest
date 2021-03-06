import { RawBeverageType } from './RawBeverage.type';

type Props = {
  badge: string;
  brand: string;
  shortId: string;
};

const getImagesData = function({
  badge,
  brand,
  shortId,
}: Props): RawBeverageType {
  return this.aggregate([
    {
      $lookup: {
        from: 'institutions',
        localField: 'label.general.brand',
        foreignField: '_id',
        as: 'brand_info',
      },
    },
    {
      $unwind: '$brand_info',
    },
    {
      $match: {
        badge: badge,
        'brand_info.badge': brand,
        shortId: shortId,
      },
    },
    {
      $project: {
        _id: 0,
        id: '$_id',
        shortId: 1,
        badge: 1,
        brand: {
          badge: '$brand_info.badge',
          name: '$brand_info.name',
        },
        name: '$label.general.name',
        photos: '$editorial.photos',
        container: {
          type: '$label.container.type',
        },
      },
    },
  ]);
};

export default getImagesData;
