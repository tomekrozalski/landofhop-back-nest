import { Language } from 'utils/types';

const getAllLanguages = function(): Language[] {
  return this.aggregate([
    {
      $lookup: {
        from: 'languages',
        pipeline: [
          {
            $project: {
              _id: 0,
              code: 1,
              id: '$_id',
              name: 1,
            },
          },
        ],
        as: 'language',
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
        code: 1,
        id: '$_id',
        name: 1,
      },
    },
    {
      $sort: { code: 1 },
    },
  ]);
};

export default getAllLanguages;
