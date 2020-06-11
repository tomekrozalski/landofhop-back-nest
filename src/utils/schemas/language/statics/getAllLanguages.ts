import { Language } from 'utils/types';

const getAllLanguages = function(): Language[] {
  return this.aggregate([
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
