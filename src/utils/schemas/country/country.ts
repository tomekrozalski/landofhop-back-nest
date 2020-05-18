import * as mongoose from 'mongoose';

import { langValue } from '../common';
import { getAllCountries } from './statics';

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
countrySchema.statics.getAllCountries = getAllCountries;

export default countrySchema;
