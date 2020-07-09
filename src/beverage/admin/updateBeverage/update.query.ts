import * as mongoose from 'mongoose';

import { PatchType } from './Patch.type';

const update = function(id: string, data: any) {
  return this.replaceOne(
    {
      _id: mongoose.Types.ObjectId(id),
    },
    data,
  );
};

export default update;
