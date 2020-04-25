import * as mongoose from 'mongoose';

import { langValue } from '../common';
import { getAllPlaces } from './statics';

const placeSchema = new mongoose.Schema({
  city: [langValue],
  country: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Country',
    required: true,
  },
  institution: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Institution',
    required: true,
  },
  location: {
    type: {
      type: String,
      enum: ['Point'],
    },
    coordinates: [mongoose.Schema.Types.Decimal128],
  },
  shortId: {
    type: String,
    required: true,
  },
});

placeSchema.index({ shortId: 1 }, { unique: true });
placeSchema.statics.getAllPlaces = getAllPlaces;

export default placeSchema;
