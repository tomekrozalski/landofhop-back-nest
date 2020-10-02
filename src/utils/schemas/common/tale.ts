import * as mongoose from 'mongoose';

export default new mongoose.Schema(
  {
    language: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
    },
    lead: {
      type: String,
      required: true,
    },
    article: {
      type: String,
      required: false,
    },
  },
  { _id: false },
);
