import * as mongoose from 'mongoose';

import getAllIngredients from 'ingredient/getAllIngredients/getAllIngredients.query';
import { langValue } from '../common';

const ingredientSchema = new mongoose.Schema({
  badge: {
    type: String,
    required: true,
  },
  name: {
    type: [langValue],
    required: true,
  },
  type: {
    type: String,
    enum: ['malt', 'hop', 'yeast', 'appendix'],
    required: true,
  },
  parent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Ingredient',
    required: false,
  },
});

ingredientSchema.statics.getAllIngredients = getAllIngredients;

export default ingredientSchema;
