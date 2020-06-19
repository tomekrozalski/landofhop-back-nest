import * as mongoose from 'mongoose';

import languageSchema from '../language';
import editorialSchema from './editorialSchema';
import labelSchema from './labelSchema';
import producerSchema from './producerSchema';
import {
  beverageSearch,
  getAllBeverages,
  getBeverage,
  getBeverageForDashboard,
  getUpdatedBeverageImages,
  removeCap,
  removeGallery,
  saveCap,
  saveCover,
  saveGallery,
  updateContainerOutline,
  updateCoverOutline,
} from './statics';

const beverageSchema = new mongoose.Schema(
  {
    shortId: {
      type: String,
      required: true,
    },
    badge: {
      type: String,
      required: true,
    },
    label: {
      type: labelSchema,
      required: true,
    },
    producer: producerSchema,
    editorial: editorialSchema,
    added: {
      type: Date,
      required: true,
    },
    updated: Date,
    language: {
      type: [languageSchema],
      required: true,
    },
  },
  { strict: false },
);

beverageSchema.index({ badge: 1, shortId: 1 }, { unique: true });
beverageSchema.statics.beverageSearch = beverageSearch;
beverageSchema.statics.getAllBeverages = getAllBeverages;
beverageSchema.statics.getBeverage = getBeverage;
beverageSchema.statics.getBeverageForDashboard = getBeverageForDashboard;
beverageSchema.statics.getUpdatedBeverageImages = getUpdatedBeverageImages;
beverageSchema.statics.removeCap = removeCap;
beverageSchema.statics.removeGallery = removeGallery;
beverageSchema.statics.saveCap = saveCap;
beverageSchema.statics.saveCover = saveCover;
beverageSchema.statics.saveGallery = saveGallery;
beverageSchema.statics.updateContainerOutline = updateContainerOutline;
beverageSchema.statics.updateCoverOutline = updateCoverOutline;

export default beverageSchema;
