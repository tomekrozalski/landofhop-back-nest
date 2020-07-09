import * as mongoose from 'mongoose';

const getBrandById = function(id: string): { brand: string }[] {
  console.log('getBrandById', id);

  return this.aggregate([
    {
      $match: {
        _id: mongoose.Types.ObjectId(id),
      },
    },
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
    {
      $project: {
        _id: 0,
        brand: '$label.general.brand_info.badge',
      },
    },
  ]);
};

export default getBrandById;
