import * as mongoose from 'mongoose';

import { PatchType } from './Patch.type';

const getPatchById = function(id: string): PatchType[] {
  return this.aggregate([
    {
      $match: {
        _id: mongoose.Types.ObjectId(id),
      },
    },
    {
      $project: {
        _id: 0,
        shortId: 1,
        photos: '$editorial.photos',
        added: 1,
      },
    },
  ]);
};

export default getPatchById;
