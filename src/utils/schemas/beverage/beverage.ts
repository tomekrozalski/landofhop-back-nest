import * as mongoose from 'mongoose';

import editorialSchema from './editorialSchema';
import labelSchema from './labelSchema';
import producerSchema from './producerSchema';

// ------------- STATICS -------------
// Admin
import getLastTiles from 'beverage/admin/getLastTiles/getLastTiles.query';
import getTranslatedDetails from 'beverage/admin/getTranslatedDetails/getTranslatedDetails.query';
import getDetails from 'beverage/admin/getDetails/getDetails.query';
import getBrandById from 'beverage/admin/addNewBeverage/getBrandById.query';
import getImagesData from 'beverage/admin/getImagesData/getImagesData.query';

// Images
import saveCap from 'beverage/images/cap/saveCap.query';
import removeCap from 'beverage/images/cap/removeCap.query';
import saveCover from 'beverage/images/cover/saveCover.query';
import removeGallery from 'beverage/images/gallery/removeGallery.query';
import saveGallery from 'beverage/images/gallery/saveGallery.query';
import updateContainerOutline from 'beverage/images/outlines/updateContainerOutline.query';
import updateCoverOutline from 'beverage/images/outlines/updateCoverOutline.query';

// Prefetch
import getAllBeveragesDetails from 'beverage/prefetch/getAllBeveragesDetails/getAllBeveragesDetails.query';

// Public
import search from 'beverage/public/search/search.query';

// --------------------------

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
  },
  { strict: false },
);

beverageSchema.index({ badge: 1, shortId: 1 }, { unique: true });

beverageSchema.statics.getLastTiles = getLastTiles;
beverageSchema.statics.getAllBeveragesDetails = getAllBeveragesDetails;
beverageSchema.statics.getTranslatedDetails = getTranslatedDetails;
beverageSchema.statics.search = search;
beverageSchema.statics.getImagesData = getImagesData;
beverageSchema.statics.getBrandById = getBrandById;
beverageSchema.statics.saveCap = saveCap;
beverageSchema.statics.removeCap = removeCap;
beverageSchema.statics.saveCover = saveCover;
beverageSchema.statics.saveGallery = saveGallery;
beverageSchema.statics.removeGallery = removeGallery;
beverageSchema.statics.updateContainerOutline = updateContainerOutline;
beverageSchema.statics.updateCoverOutline = updateCoverOutline;
beverageSchema.statics.getDetails = getDetails;

export default beverageSchema;
