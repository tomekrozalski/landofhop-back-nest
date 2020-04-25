import * as mongoose from 'mongoose';

import { langValue } from '../common';

const countrySchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
  },
  name: {
    type: [langValue],
    required: true,
  },
});

countrySchema.index({ code: 1 }, { unique: true });

export default countrySchema;
