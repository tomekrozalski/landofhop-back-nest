import * as mongoose from 'mongoose';
import * as Int32 from 'mongoose-int32';

import { langValue } from '../common';
import agedSchema from './agedSchema';
import priceSchema from './priceSchema';

const generalSchema = new mongoose.Schema(
  {
    cooperation: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Institution',
        },
      ],
      default: undefined,
    },
    contract: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Institution',
    },
    place: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Place',
    },
  },
  { _id: false },
);

const brewingSchema = new mongoose.Schema(
  {
    beverageType: {
      type: String,
      enum: ['beer', 'radler', 'other'],
    },
    fermentation: {
      type: [
        {
          type: String,
          enum: ['top', 'bottom', 'spontaneous'],
        },
      ],
      default: undefined,
    },
    alcohol: {
      scope: {
        type: String,
        enum: ['m500', 'pm500', 'pm1000'],
      },
    },
    filtration: Boolean,
    pasteurization: Boolean,
    aged: {
      type: [agedSchema],
      default: undefined,
    },
    style: {
      type: [langValue],
      default: undefined,
    },
    isDryHopped: Boolean,
    dryHopped: {
      hops: {
        type: [
          {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Ingredients',
          },
        ],
        default: undefined,
      },
    },
  },
  { _id: false },
);

const impressionsSchema = new mongoose.Schema(
  {
    color: String,
    clarity: {
      type: String,
      enum: ['crystalline', 'clear', 'opalescent', 'misty', 'hazy', 'muddy'],
    },
  },
  { _id: false },
);

const coverImageSchema = new mongoose.Schema(
  {
    height: Int32,
    width: Int32,
  },
  { _id: false },
);

const outlinesSchema = new mongoose.Schema(
  {
    cover: String,
    gallery: String,
  },
  { _id: false },
);

const photosSchema = new mongoose.Schema(
  {
    cap: {
      type: Boolean,
      validate: {
        validator(v) {
          return v;
        },
        message: props => `${props.value} need to be true or be undefined`,
      },
    },
    cover: coverImageSchema,
    gallery: Int32,
    outlines: outlinesSchema,
  },
  { _id: false },
);

const editorialSchema = new mongoose.Schema(
  {
    general: generalSchema,
    brewing: brewingSchema,
    impressions: impressionsSchema,
    price: {
      type: [priceSchema],
      default: undefined,
    },
    photos: photosSchema,
    notes: String,
  },
  { _id: false },
);

export default editorialSchema;
