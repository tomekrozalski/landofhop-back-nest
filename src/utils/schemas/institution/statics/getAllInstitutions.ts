import { Institution } from 'utils/types';

const getAllInstitutions = function(): Institution[] {
  return this.aggregate([
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
