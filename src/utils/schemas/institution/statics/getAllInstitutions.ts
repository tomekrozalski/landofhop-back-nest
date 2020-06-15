import { Institution } from 'utils/types';
import { language } from 'utils/schemas/common/aggregation';

const getAllInstitutions = function(): Institution[] {
  return this.aggregate([
    ...language,
    {
      $lookup: {
        from: 'institutions',
        localField: 'consortium',
        foreignField: '_id',
        as: 'consortium_info',
      },
    },
    {
      $unwind: {
        path: '$consortium_info',
        preserveNullAndEmptyArrays: true,
      },
    },
    {
      $set: {
        name_info: {
          $map: {
            input: '$name',
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
        name: {
          $map: {
            input: '$name_info',
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
        badge: 1,
        consortium: '$consortium_info.name',
        id: '$_id',
        name: 1,
        shortId: 1,
        website: 1,
      },
    },
    {
      $sort: { badge: 1 },
    },
  ]);
};

export default getAllInstitutions;
