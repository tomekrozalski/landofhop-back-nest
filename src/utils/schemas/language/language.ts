import * as mongoose from 'mongoose';

import { langValue } from '../common';
import getAllLanguages from 'language/getAllLanguages/getAllLanguages.query';

const languageSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
  },
  name: {
    type: [langValue],
    required: true,
  },
});

languageSchema.index({ code: 1 }, { unique: true });
languageSchema.statics.getAllLanguages = getAllLanguages;

export default languageSchema;
